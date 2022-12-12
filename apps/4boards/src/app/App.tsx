import { Codenames } from './containers';
import { Providers } from './contexts';
import './styles';

export function App() {
  return (
    <Providers>
      <Codenames />
    </Providers>
  );
}
