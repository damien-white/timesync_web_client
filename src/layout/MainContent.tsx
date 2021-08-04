import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function MainContent({ children }: Props): JSX.Element {
  return <main>{children}</main>;
}
