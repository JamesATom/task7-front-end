import React, { useEffect, useState } from 'react';
import Square from "./Square";
import { Patterns } from './WinningPatter';
import { socket } from '../socket/socket';

export default function Board({ result, setResult }) {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("X");
    const [turn, setTurn] = useState("X");
    
    useEffect(() => {
        checkIfTie();
        checkWin();
    }, [board]);

    const chooseSquare = async (square) => {
        console.log('Clicked: ', square);
        if (turn == player && board[square] == "") {
            setTurn(player == "X" ? "O" : "X");
            
            setBoard(prev => [...prev.filter((val, idx) => {
                if (idx == square && val == "") {
                    console.log('why');
                    return player;
                }
                return val;
            })]);
            console.log('Board inside chooseSquare: ', board);

            await socket.emit('game-move', {
                type: "game-move",
                data: { square, player, board }
            });
        }
    };

    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]];
            if (firstPlayer === "") return;
                let foundWinningPattern = true;

            currPattern.forEach((idx) => {
                if (board[idx] !== firstPlayer) {
                    foundWinningPattern = false;
                }
            });
    
            if (foundWinningPattern) {
                setResult({ winner: board[currPattern[0]], state: "won" });
            }
        });
    }
    
    const checkIfTie = () => {
        let filled = true;
        board.forEach((square) => {
            if (square == "") {
                filled = false;
            }
        });
    
        if (filled) {
            setResult({ winner: "none", state: "tie" });
        }
    }

 
    socket.on('game-move', ({event}) => {
        if (event.type == "game-move") {
            const currentPlayer = (event.data.player == "X" ? "O" : "X");
            setPlayer(currentPlayer);
            setTurn(currentPlayer);
            setBoard(event.data.board.map((val, idx) => {
                        // console.log('VALUE: ', val);x
                        if (idx == event.data.square && val == "") {
                            return event.data.player;
                        }
                        return val;
                    })
            );
            // console.log('Board inside socket.on: ', board);
        }
    });
   
    

    return (
            <div className="board">
                <div className="row">
                    <Square
                        val={board[0]}
                        chooseSquare={() => {
                            chooseSquare(0);
                        }} />
                    <Square
                    val={board[1]}
                    chooseSquare={() => {
                        chooseSquare(1);
                    }} />
                    <Square
                        val={board[2]}
                        chooseSquare={() => {
                            chooseSquare(2);
                    }} />
                </div>
                <div className="row">
                    <Square
                        val={board[3]}
                        chooseSquare={() => {
                            chooseSquare(3);
                    }} />
                    <Square
                        val={board[4]}
                        chooseSquare={() => {
                            chooseSquare(4);
                    }} />
                    <Square
                        val={board[5]}
                        chooseSquare={() => {
                            chooseSquare(5);
                        }} />
                </div>
                <div className="row">
                    <Square
                        val={board[6]}
                        chooseSquare={() => {
                            chooseSquare(6);
                        }} />
                    <Square
                        val={board[7]}
                        chooseSquare={() => {
                            chooseSquare(7);
                        }} />
                    <Square
                        val={board[8]}
                        chooseSquare={() => {
                            chooseSquare(8);
                        }} />
                </div>
            </div>
        );
}
