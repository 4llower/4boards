import { PropsWithChildren } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

type Props = PropsWithChildren<unknown>;

export function Providers({ children }: Props) {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {children}
    </BrowserRouter>
  );
}
