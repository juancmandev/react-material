import React from 'react';
import { Container } from '@mui/material';
import { Searcher } from './components/Searcher';
import './App.css';

function App() {
  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '20px',
        paddingTop: '32px',
        paddingBottom: '32px',
        display: 'grid',
        justifyContent: 'center',
      }}>
      <Searcher />
    </Container>
  );
}

export default App;
