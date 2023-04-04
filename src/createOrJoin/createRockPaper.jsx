import { useState, useEffect, useRef } from 'react';
import { socket } from '../socket/socket';
import { CssVarsProvider } from '@mui/joy/styles';
import { useNavigate, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Button from '@mui/joy/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function CreateTicTacToe() {
    const navigate = useNavigate();
    const [roomFilledOr, setRoomFilledOr] = useState(true);
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState();

    useEffect(() => {
        setRoomFilledOr(username && room ? false : true);
    }, [username, room]);

    const handleSubmit = () => {
        socket.emit('join', { name: username, room });
    }

    return (
        <div>
            <AppBar>
            <Toolbar sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                background: '#ffac33',
                }}>
                <IconButton disableRipple>Welcome to Rock Paper Scissors</IconButton>
                <IconButton onClick={() => {navigate('/')}}><LogoutIcon /></IconButton>
            </Toolbar>
            </AppBar>

            <div className='twoGames' id='paperPage'>
                <CssVarsProvider>
                    <main>
                        <Sheet
                            sx={{
                                width: 300,
                                height: 340,
                                mx: 'auto', 
                                my: 3, 
                                py: 1, 
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
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input
                                    name="name"
                                    type="name"
                                    placeholder="Username"
                                    value={username}
                                    onChange={({target}) => setUsername(target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Enter A Room Number</FormLabel>
                                <Input
                                    name="room"
                                    type="text"
                                    placeholder="Room Number"
                                    value={room}
                                    onChange={({target}) => setRoom(target.value)}
                                />
                            </FormControl>
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px' }}>
                                <FormControl sx={{ width: '180px' }}>
                                    <Button onClick={handleSubmit} endDecorator={<PlayArrowIcon />} component={Link} to='/' size='sm' disabled={roomFilledOr}>Join a Game</Button>
                                </FormControl>
                            </div>
                        </Sheet>
                    </main>
                </CssVarsProvider>
            </div>
        </div>
    );
}
