import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { USERS } from './graphql/Users';

function App() {
  const { data, loading } = useQuery(USERS)
  console.log(data)

  return (
    <div>
      
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
