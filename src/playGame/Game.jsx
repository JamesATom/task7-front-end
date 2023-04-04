import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Board from './Board';
import { useNavigate } from 'react-router-dom';
import { socket } from '../socket/socket';

export default function Game({ channel, setChannel }) {
    const navigate = useNavigate();
    const [playersJoined, setPlayersJoined] = useState(false);
    const [sth, setSth] = useState();
    const [result, setResult] = useState({ winner: "none", state: "none" });

    useEffect(() => {
        socket.on('message', (data) => {
            setPlayersJoined(data.size >= 2 ? true : false);
            setSth('what');
        });
    });

    if (!playersJoined) {
        return <div> Waiting for other player to join...</div>;
    }

    const handleClick = () => {
        socket.emit('remove_user');
        window.localStorage.clear();
        navigate('/tictactoe');
    }

    return (
        <div>
            <AppBar>
                <Toolbar 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    background: '#33ab9f' }}>
                    <IconButton disableRipple>Welcome to Tic Tac Toe</IconButton>
                    <IconButton onClick={handleClick}><LogoutIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <div className="gameContainer">
                <Board result={result} setResult={setResult} />
                {result.state === "won" && <div> {result.winner} Won The Game</div>}
                {result.state === "tie" && <div> Game Tieds</div>}
            </div>
        </div>
    );
}
