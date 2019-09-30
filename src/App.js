import React, { useState, useEffect } from 'react';
import Room from './components/Room';
import styled from 'styled-components';
import Select from './components/Select';
import Heading from './components/Heading';
import { usePersistentState } from './localstorage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  // flex-wrap: wrap;
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
  }
`;

const RoomContainer = styled.section`
  padding: 48px;
  background-color: white;
  margin-top: 16px;
  margin-right: ${props => props.marginRight || 0}px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-radius: 12px;
  &:hover{
    transform: translateY(-2px);
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.15);
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [submitted, setSubmitted] = useState(false);

  const [roomValuesAll, setRoomValuesAll] = usePersistentState('data', [
    {
      room: 1,
      adult: 0,
      child: 0,
      hasCheck: false,
      isChecked: null,
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

  // CHANGE ROOMS 2 & 3 to CHECKED if Room 4 is CHECKED
  useEffect(() => {
    if (roomValuesAll[3].isChecked === true) {
      setRoomValuesAll(
        roomValuesAll.map(item => {
          if (item.room < 4) {
            return {
              room: item.room,
              adult: item.adult,
              child: item.child,
              hasCheck: item.hasCheck,
              isChecked: true,
              isDisabled: true
            };
          }
          return item;
        })
      );
    }
  }, [roomValuesAll[3]]);

  // CHANGE ROOM 2 to CHECKED if Room 3 is CHECKED
  useEffect(() => {
    if (roomValuesAll[2].isChecked === true) {
      setRoomValuesAll(
        roomValuesAll.map(item => {
          if (item.room < 3) {
            return {
              room: item.room,
              adult: item.adult,
              child: item.child,
              hasCheck: item.hasCheck,
              isChecked: true,
              isDisabled: true
            };
          }
          return item;
        })
      );
    }
  }, [roomValuesAll[2]]);

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitted(true);
    console.table(roomValuesAll);
  };

  const handleCheckboxChange = roomNum => {
    setRoomValuesAll(
      roomValuesAll.map(item => {
        if (item.room === roomNum) {
          return {
            room: item.room,
            adult: 0,
            child: 0,
            hasCheck: true,
            isChecked: !item.isChecked,
            isDisabled: true
          };
        }
        return item;
      })
    );
  };

  const handleSelectChange = (name, roomNum, e) => {
    setRoomValuesAll(
      roomValuesAll.map(item => {
        if (name === 'adult' && item.room === roomNum) {
          return {
            room: item.room,
            adult: e.target.value,
            child: item.child,
            hasCheck: item.hasCheck,
            isChecked: item.isChecked,
            isDisabled: item.isDisabled
          };
        }
        if (name === 'child' && item.room === roomNum) {
          return {
            room: item.room,
            adult: item.adult,
            child: e.target.value,
            hasCheck: item.hasCheck,
            isChecked: item.isChecked,
            isDisabled: item.isDisabled
          };
        }
        return item;
      })
    );
  };

  return (
    <Container>
      <form style={{display:'flex', flexDirection:'column', alignItems:'center', margin: '24px 40px'}} onSubmit={handleSubmit}>
        <FormBody>
          {roomValuesAll.map(item => (
            <Room key={item.room}>
              <RoomContainer marginRight={item.room < 4 ? 16 : 0}>
                <Heading
                  hasCheck={item.hasCheck}
                  roomNum={item.room}
                  isChecked={item.isChecked}
                  onCheckboxChange={() => handleCheckboxChange(item.room)}
                  isDisabled={item.isDisabled}
                />

                <SelectWrapper>
                  {/* ADULT DROPDOWN */}
                  <Select
                    userType={'Adult'}
                    style={{ marginRight: '16px' }}
                    ageNum={'18+'}
                    isDisabled={item.room < 2 ? false : !item.isChecked}
                    selectValue={item.adult}
                    handleSelectChange={e =>
                      handleSelectChange('adult', item.room, e)
                    }
                    name={'adult'}
                    roomNum={item.room}
                  />

                  {/* CHILD DROPDOWN */}
                  <Select
                    userType={'Child'}
                    ageNum={'0-17'}
                    isDisabled={item.room < 2 ? false : !item.isChecked}
                    selectValue={item.child}
                    handleSelectChange={e =>
                      handleSelectChange('child', item.room, e)
                    }
                    name={'child'}
                    roomNum={item.room}
                  />
                </SelectWrapper>
              </RoomContainer>
            </Room>
          ))}
        </FormBody>

        <Button data-testid={'app-button-submit'} type="submit">SUBMIT</Button>
      </form>

      {submitted && (
        <div data-testid={'app-div-data'} style={{ marginTop: '48px', width: '360px' }}>
          <>
            <strong>Submitted User Data (also printed to console):</strong>
            <br />
            {roomValuesAll.map(item => (
              <div key={item.room}>
                <p>Room: {item.room}</p>
                <p>Adults: {item.adult}</p>
                <p>Children: {item.child}</p>
                <hr />
              </div>
            ))}
          </>
        </div>
      )}
    </Container>
  );
}

export default App;
