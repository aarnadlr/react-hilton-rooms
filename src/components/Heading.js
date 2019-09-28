import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 32px 0;
`;

const Input = styled.input`
  position: relative;
  top: 3px;
  margin: 0 8px 0 0;
`;

const Heading = ({ hasCheck, isChecked, roomNum = 0, onCheckboxChange }) => {
  return (
    <Main>
      {hasCheck && (
        // CHECKBOX
        <Input
          name="roomCheck"
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
          data-testid='heading-input-tag'
        />
      )}
      <header data-testid='heading-header-tag'>Room {roomNum}</header>
    </Main>
  );
};

Heading.propTypes = {
  hasCheck: PropTypes.bool.isRequired,
  roomNum: PropTypes.number.isRequired,
  isChecked: PropTypes.bool,
  onCheckboxChange: PropTypes.func
};

export default Heading;
