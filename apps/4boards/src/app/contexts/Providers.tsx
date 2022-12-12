import { PropsWithChildren } from 'react';
import { GlobalStyles } from './GlobalStyles';

type Props = PropsWithChildren<unknown>;

export function Providers({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
