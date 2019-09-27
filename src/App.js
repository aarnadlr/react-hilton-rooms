import React, { useState, useEffect } from 'react';
import './App.css';
import Room from './components/Room';
import styled from 'styled-components';
import Select from './components/Select';
import Heading from './components/Heading';
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

const HeadingContainer = styled.section`
  padding: 40px;
  background-color: white;
  margin-top: 12px;
  margin-right: ${props => props.marginRight || 0}px;
  -webkit-box-shadow: 5px 5px 42px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 42px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);
`;

const SelectWrapper = styled.div`
  display: flex;
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
    }
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
              // marginRight={item.room < 4 ? 12 : 0}
              // isDisabled={item.isDisabled}
              // setDisabled={setRoom2Disabled}
              >
                <HeadingContainer
                  // marginRight={marginRight}
                  marginRight={item.room < 4 ? 12 : 0}
                >
                  <Heading
                    hasCheck={item.hasCheck}
                    roomNum={item.room}
                    isChecked={item.isChecked}
                    setIsChecked={setRoom2Checked}
                    onCheckboxChange={handleCheckboxChange}
                  />

                  <SelectWrapper>
                    <Select
                      userType={'Adult'}
                      style={{ marginRight: '16px' }}
                      ageNum={'18+'}
                      // isDisabled={isDisabled}
                    />

                    <Select
                      userType={'Child'}
                      ageNum={'0-17'}
                      // isDisabled={isDisabled}
                    />
                  </SelectWrapper>
                </HeadingContainer>
              </Room>
            ))}
          </FormBody>

          <Button type="submit">SUBMIT</Button>
        </form>
      </Container>
    </Context.Provider>
  );
}

export default App;
