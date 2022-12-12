import { Navigate, Route, Routes } from 'react-router-dom';
import { Codenames, Layout, Play } from './containers';
import { Providers } from './contexts';
import './styles';

export function App() {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="codenames" element={<Codenames />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Codenames />
    </Providers>
  );
}
