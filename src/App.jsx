import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Grid from 'components/basic/Grid';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';

const AppContainer = styled.div`
  width: 100vw;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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
          <TodoEditor />
        </Grid.Half>
        <Grid.Half>
          <TodoList />
        </Grid.Half>
      </AppContainer>
    </>
  );
}

export default App;
