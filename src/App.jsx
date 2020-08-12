import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Grid from 'components/basic/Grid';
import AddTodo from 'components/AddTodo';

const AppContainer = styled.div`
  width: 100vw;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ddd;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Grid.Half>
          <AddTodo />
        </Grid.Half>
      </AppContainer>
    </>
  );
}

export default App;
