import React from 'react';
import { Board } from './components/Board';

import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { MainContent } from './layout/MainContent';
import { Sidebar } from './layout/Sidebar';

export const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <MainContent>
        <Sidebar>Sidebar will go here</Sidebar>
        <section>
          <Board />
        </section>
      </MainContent>
      <Footer>
        <small>If you would like to see more of our work, please visit us at:&nbsp;</small>
        <small>&copy; {new Date().getFullYear()} &mdash;&nbsp;</small>
        <a href="https://darkfusion.io/" target="_blank" rel="noopener noreferrer">
          Dark Fusion Systems
        </a>
        . All rights reserved.
      </Footer>
    </React.Fragment>
  );
};
