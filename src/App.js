import React, { useState, useEffect } from 'react';
import './App.css';
import Room from './components/Room';
import styled from 'styled-components';
import Select from './components/Select';
import Heading from './components/Heading';

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

  // const [room2, setRoom2] = useState({
  //   room: 2,
  //   adult: 0,
  //   child: 0,
  //   hasCheck: true,
  //   isChecked: false,
  //   isDisabled: true
  // });

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

  // ROOM 3: check if Room 4 state has changed
  // useEffect(() => {
  //   setRoom3Checked(room4Checked);
  // }, [room4Checked]);
	//
  // // ROOM 2: check if Room 3 or 4 state has changed
  // useEffect(() => {
  //   setRoom2Checked(room3Checked);
  // }, [room3Checked, room4Checked]);
	//
  // // ROOM 4: Map DISABLED to CHECKED
  // useEffect(() => {
  //   setRoom4Disabled(!room4Checked);
  // });
	//
  // // ROOM 3: Map DISABLED to CHECKED
  // useEffect(() => {
  //   setRoom3Disabled(!room3Checked);
  // });
	//
  // // ROOM 2: Map DISABLED to CHECKED
  // useEffect(() => {
  //   setRoom2Disabled(!room2Checked);
  // });
	// useEffect(()=>{
	//
	// })

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Data: ');
  };

  const handleCheckboxChange = roomNum => {
    console.log('CHANGED!: ', roomNum);

    setRoomValuesAll( roomValuesAll.map(item=>{
    	if(item.room===roomNum){
    		return {
    			room: item.room,
					adult: 0,
					child: 0,
					hasCheck: true,
					isChecked: !item.isChecked,
					isDisabled: true
				}
			}
    	return item;
		}));

  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormBody>
          {roomValuesAll.map(item => (
            <Room key={item.room}>
              <HeadingContainer marginRight={item.room < 4 ? 12 : 0}>
                <Heading
                  hasCheck={item.hasCheck}
                  roomNum={item.room}
                  isChecked={item.isChecked}
                  // setIsChecked={setRoom2Checked}
                  onCheckboxChange={()=>handleCheckboxChange(item.room)}
                  isDisabled={item.isDisabled}
                  // setDisabled={setRoom2Disabled}
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
  );
}

export default App;
