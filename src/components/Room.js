import React from 'react';
import Select from './Select';
import styled from 'styled-components';
import Heading from './Heading';
import PropTypes from 'prop-types';

const Container = styled.section`
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

const Room = ({
  hasCheck,
  roomNum = 0,
  marginRight = 0,
  isChecked,
  setIsChecked,
  isDisabled,
  setDisabled,
	onCheckboxChange
}) => {
  return (
    <Container marginRight={marginRight}>
      <Heading
        hasCheck={hasCheck}
        roomNum={roomNum}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
				onCheckboxChange={onCheckboxChange}
      />

      <SelectWrapper>
        <Select
          userType={'Adult'}
          style={{ marginRight: '16px' }}
          ageNum={'18+'}
          isDisabled={isDisabled}
        />

        <Select userType={'Child'} ageNum={'0-17'} isDisabled={isDisabled} />
      </SelectWrapper>
    </Container>
  );
};

Room.propTypes = {
  hasCheck: PropTypes.bool.isRequired,
  roomNum: PropTypes.number,
  marginRight: PropTypes.number,
  isChecked: PropTypes.bool,
  setIsChecked: PropTypes.func,
  isDisabled: PropTypes.bool,
  setDisabled: PropTypes.func
};

export default Room;
