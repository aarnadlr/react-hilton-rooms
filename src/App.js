import React from 'react';
import './App.css';
import Select from './components/Select';

function App() {
  return (
    <main style={{ display: 'flex' }}>

      <Select
        userType={'Adult'}
        style={{ marginRight: '16px' }}
        ageNum={'18+'}
      />

      <Select userType={'Child'} ageNum={'0-17'} />

    </main>
  );
}

export default App;
