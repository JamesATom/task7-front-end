import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Main from './main/main';
import CreateTicTacToe from './createOrJoin/createTicToe';
import CreateRockPaper from './createOrJoin/createRockPaper';
import Game from './playGame/Game';

const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path='/' element={<Main />} />
      <Route path='/tictactoe' element={<CreateTicTacToe />} />
      <Route path='/rockpaper' element={<CreateRockPaper />} />
      <Route path='/playGame' element={<Game />} />
  </>
));


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
