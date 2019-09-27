import React, { useState, useEffect } from 'react';
import './App.css';
import Room from './components/Room';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  padding: 40px;
`;

function App() {

  const [room4Checked, setRoom4Checked] = useState(false);
  const [room4Disabled, setRoom4Disabled] = useState(room4Checked);

  const [room3Checked, setRoom3Checked] = useState(room4Checked);
  const [room3Disabled, setRoom3Disabled] = useState(room3Checked);

  const [room2Checked, setRoom2Checked] = useState(room3Checked);
  const [room2Disabled, setRoom2Disabled] = useState(room2Checked);


  // ROOM 3: check if Room 4 state has changed
  useEffect(() => {
    setRoom3Checked(room4Checked);
  }, [room4Checked]);


  // ROOM 2: check if Room 3 or 4 state has changed
  useEffect(() => {
    setRoom2Checked(room3Checked);
  }, [room3Checked, room4Checked]);


  // ROOM 4: Map DISABLED to CHECKED
  useEffect(() => {
    setRoom4Disabled(!room4Checked);
  });

  // ROOM 3: Map DISABLED to CHECKED
  useEffect(() => {
    setRoom3Disabled(!room3Checked);
  });

  // ROOM 2: Map DISABLED to CHECKED
  useEffect(() => {
    setRoom2Disabled(!room2Checked);
  });

  return (
    <Main>

      <Room roomNum={1} marginRight={12} hasCheck={false} isChecked={null} />

      <Room
        roomNum={2}
        marginRight={12}
        hasCheck={true}
        isChecked={room2Checked}
        setIsChecked={setRoom2Checked}

				isDisabled={room2Disabled}
				setDisabled={setRoom2Disabled}
      />

      <Room
        roomNum={3}
        marginRight={12}
        hasCheck={true}
        isChecked={room3Checked}
        setIsChecked={setRoom3Checked}

				isDisabled={room3Disabled}
				setDisabled={setRoom3Disabled}
      />
      <Room
        roomNum={4}
        hasCheck={true}
        isChecked={room4Checked}
        setIsChecked={setRoom4Checked}

				isDisabled={room4Disabled}
				setDisabled={setRoom4Disabled}
      />
    </Main>
  );
}

export default App;
