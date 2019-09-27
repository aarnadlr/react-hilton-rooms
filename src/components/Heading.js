import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 0 24px 0;
`;

const Input = styled.input`
  position: relative;
  top: 3px;
  margin: 0 8px 0 0;
`;

const Heading = ({ hasCheck, roomNum = 0 }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  };

  return (
    <Main>
      {hasCheck && (

      	// CHECKBOX INPUT
        <Input
          name="roomCheck"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      )}
      <header>Room {roomNum}</header>
    </Main>
  );
};

Heading.propTypes = {
  hasCheck: PropTypes.bool.isRequired,
  roomNum: PropTypes.number,
};

export default Heading;
