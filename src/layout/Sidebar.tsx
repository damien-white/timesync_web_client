import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Sidebar({ children }: Props): JSX.Element {
  return <aside>{children}</aside>;
}
