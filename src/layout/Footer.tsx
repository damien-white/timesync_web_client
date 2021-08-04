import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Footer({ children }: Props): JSX.Element {
  return <footer>{children}</footer>;
}
