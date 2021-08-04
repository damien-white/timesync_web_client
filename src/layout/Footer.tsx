import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Footer({ children }: Props) {
  return <footer>{children}</footer>;
}
