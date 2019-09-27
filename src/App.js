import React, { useState, useEffect } from 'react';
import './App.css';
import Room from './components/Room';
import styled from 'styled-components';

import Context from './context';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 40px;
`;

const FormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  margin: 24px 0 0 0;
  width: 200px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ebebeb;
    transform: scale(1.04);
    // color: white
  }
`;

function App() {
  // const [room1Values, setRoom1Values] = useState([]);

  // const handleCheckboxChange = roomNum => {
  //   console.log('CHANGED: ', roomNum);
  //   // setIsChecked(e.target.checked);
  // };

  const [room4Checked, setRoom4Checked] = useState(false);
  const [room4Disabled, setRoom4Disabled] = useState(room4Checked);

  const [room3Checked, setRoom3Checked] = useState(room4Checked);
  const [room3Disabled, setRoom3Disabled] = useState(room3Checked);

  const [room2Checked, setRoom2Checked] = useState(room3Checked);
  const [room2Disabled, setRoom2Disabled] = useState(room2Checked);

  const [roomValuesAll, setRoomValuesAll] = useState([
    {
      room: 1,
      adult: 0,
      child: 0,
      hasCheck: false,
      isChecked: room2Checked,
      isDisabled: false
    },
    {
      room: 2,
      adult: 0,
      child: 0,
      hasCheck: true,
      isChecked: false,
      isDisabled: true
    },
    {
      room: 3,
      adult: 0,
      child: 0,
      hasCheck: true,
      isChecked: false,
      isDisabled: true
    },
    {
      room: 4,
      adult: 0,
      child: 0,
      hasCheck: true,
      isChecked: false,
      isDisabled: true
    },
  ]);

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Data: ');
  };

  const handleCheckboxChange = roomNum => {
    console.log('CHANGED: ', roomNum);
    // setRoomValuesAll(e.target.checked);
    // setRoomValuesAll(roomValuesAll[roomNum-1].isChecked = !roomValuesAll[roomNum-1].isChecked);
    // setRoomValuesAll([...roomValuesAll, roomValuesAll[roomNum-1].isChecked=!roomValuesAll[roomNum-1].isChecked]);
  };

  return (
    <Context.Provider value={roomValuesAll}>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormBody>
            {roomValuesAll.map(item => (
              <Room
                key={item.room}
                roomNum={item.room}
                marginRight={item.room < 4 ? 12 : 0}
                hasCheck={item.hasCheck}
                isChecked={item.isChecked}
                setIsChecked={setRoom2Checked}
                isDisabled={item.isDisabled}
                setDisabled={setRoom2Disabled}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}

            {/*<Room*/}
            {/*  roomNum={1}*/}
            {/*  marginRight={12}*/}
            {/*  hasCheck={false}*/}
            {/*  isChecked={null}*/}
            {/*/>*/}

            {/*<Room*/}
            {/*  roomNum={2}*/}
            {/*  marginRight={12}*/}
            {/*  hasCheck={true}*/}
            {/*  isChecked={room2Checked}*/}
            {/*  setIsChecked={setRoom2Checked}*/}
            {/*  isDisabled={room2Disabled}*/}
            {/*  setDisabled={setRoom2Disabled}*/}
            {/*/>*/}

            {/*<Room*/}
            {/*  roomNum={3}*/}
            {/*  marginRight={12}*/}
            {/*  hasCheck={true}*/}
            {/*  isChecked={room3Checked}*/}
            {/*  setIsChecked={setRoom3Checked}*/}
            {/*  isDisabled={room3Disabled}*/}
            {/*  setDisabled={setRoom3Disabled}*/}
            {/*/>*/}

            {/*<Room*/}
            {/*  roomNum={4}*/}
            {/*  hasCheck={true}*/}
            {/*  isChecked={room4Checked}*/}
            {/*  setIsChecked={setRoom4Checked}*/}
            {/*  isDisabled={room4Disabled}*/}
            {/*  setDisabled={setRoom4Disabled}*/}
            {/*/>*/}
          </FormBody>

          <Button type="submit">SUBMIT</Button>
        </form>
      </Container>
    </Context.Provider>
  );
}

export default App;
