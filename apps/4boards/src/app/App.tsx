import { Navigate, Route, Routes } from 'react-router-dom';
import { Codenames, Layout, Play } from './containers';
import { Providers } from './contexts';
import './styles';

export function App() {
  return (
    <Providers>
      <Routes>
        <Route index path="/play" element={<Play />}></Route>
        <Route path="/codenames" element={<Codenames />}></Route>
        <Route path="*" element={<Navigate to="/play" />}></Route>
      </Routes>
      <Codenames />
    </Providers>
  );
}
