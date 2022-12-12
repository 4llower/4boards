import { PropsWithChildren } from 'react';
import { Header } from './Header';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
