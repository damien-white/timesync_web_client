import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { MainContent } from './layout/MainContent';
import { Sidebar } from './layout/Sidebar';

import { theme } from './theme';

export const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MainContent>
          <section>This will hold the main content of the app</section>
          <Sidebar>Sidebar will go here</Sidebar>
        </MainContent>
        <Footer>
          <p>Designed and built by Peter Donovan</p>
          <p>If you would like to see more of my work, please visit:&nbsp;</p>
          <small>&copy; {new Date().getFullYear()} &mdash;&nbsp;</small>
          <a href="https://darkfusion.io/" target="_blank" rel="noopener noreferrer">
            Dark Fusion Systems
          </a>
          . All rights reserved.
        </Footer>
      </ThemeProvider>
    </React.Fragment>
  );
};
