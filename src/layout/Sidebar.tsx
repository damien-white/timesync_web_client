import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Sidebar({ children }: Props) {
  return <aside>{children}</aside>;
}
