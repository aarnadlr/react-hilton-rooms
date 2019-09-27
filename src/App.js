import React from 'react';
import './App.css';
import Room from "./components/Room";
import styled from 'styled-components';

const Main = styled.main`
display: flex;
padding: 40px;
`;

function App() {
  return (
    <Main >

			<Room roomNum={1} marginRight={12} hasCheck={false}/>
			<Room roomNum={2} marginRight={12} hasCheck={true}/>
			<Room roomNum={3} marginRight={12} hasCheck={true}/>
			<Room roomNum={4} hasCheck={true}/>

    </Main>
  );
}

export default App;
