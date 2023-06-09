import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import GamesIcon from '@mui/icons-material/Games';

export default function Main() {
    return (
        <div className='twoGames' id='mainPage'>
            <CssVarsProvider>
                <main>
                    <Sheet
                        sx={{
                            width: 300,
                            height: 300,
                            mx: 'auto', 
                            my: 4, 
                            py: 3, 
                            px: 2, 
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            borderRadius: 'sm',
                            boxShadow: 'md',
                        }}
                            variant="outlined">
                        <div>
                            <Typography level="h4" component="h1">
                                <b>Welcome!</b>
                            </Typography>
                            <Typography level="body2">Let's play a game.</Typography>
                        </div>
                        <FormControl sx={{ margin: '40px 0px' }}>
                            <Button endDecorator={<GamesIcon />} component={Link} to='/tictactoe'>Tic Tac Toe</Button>
                        </FormControl>
                        <FormControl>
                            <Button endDecorator={<GamesIcon />} component={Link} to='/rockpaper'>Rock Paper Scissors</Button>
                        </FormControl>
                    </Sheet>
                </main>
            </CssVarsProvider>
        </div>
    );
}

