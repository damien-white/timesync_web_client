import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function MainContent({ children }: Props) {
  return <main>{children}</main>;
}
