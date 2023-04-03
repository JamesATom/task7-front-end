import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import GamesIcon from '@mui/icons-material/Games';

export default function CreateRockPaper() {
    const navigate = useNavigate();
    return (
        <div>
            <AppBar>
                <Toolbar sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    background: '#ffac33'
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
                            <Button endDecorator={<PlayArrowIcon />} component={Link} to='/tictactoe'>Create a Game</Button>
                        </FormControl>
                        <FormControl>
                            <Button endDecorator={<PlayArrowIcon />} component={Link} to='/rockpaper'>Join a Game</Button>
                        </FormControl>
                    </Sheet>
                </main>
            </CssVarsProvider>
        </div>
    </div>
    );
}
