import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Searcher } from './components/Searcher';
import { UserCard } from './containers/UserCard';
import { getUsers } from '../src/services/users';

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  const getUser = async (user) => {
    const userResponse = await getUsers(user);

    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse);
    }

    if (userResponse.status === 404) {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
      setNotFound(false);
    }
  };

  useEffect(() => {
    getUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: 'max-content',
        borderRadius: '16px',
        marginTop: '20px',
        paddingTop: '32px',
        paddingBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
