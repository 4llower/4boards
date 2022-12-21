import { Navigate, Route, Routes } from 'react-router-dom';
import { CodenamesGame, Play, Login } from './containers';
import { Providers } from './contexts';
import './styles';

export function App() {
  return (
    <Providers>
      <div className="app">
        <Routes>
          <Route path="play" element={<Play />}></Route>
          <Route path="codenames" element={<CodenamesGame />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Navigate to="login" />}></Route>
        </Routes>
      </div>
    </Providers>
  );
}
