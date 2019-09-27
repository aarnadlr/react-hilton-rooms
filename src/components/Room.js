import React from 'react';
import Select from './Select';
import styled from 'styled-components';
import Heading from "./Heading";
import PropTypes from 'prop-types';

const Main = styled.main`
  padding: 24px;
  background-color: #f3f2f2;
  margin-right: ${props => props.marginRight || 0}px;
`;

const Section = styled.section`
  display: flex;
`;

const Room = ({roomNum=0, marginRight=0, hasCheck}) => {
  return (
    <Main marginRight={marginRight}>

      <Heading roomNum={roomNum} hasCheck={hasCheck}/>

      <Section>
        <Select
          userType={'Adult'}
          style={{ marginRight: '16px'}}
          ageNum={'18+'}
        />

        <Select userType={'Child'} ageNum={'0-17'} />
      </Section>
    </Main>
  );
};

Room.propTypes = {
  roomNum: PropTypes.number,
  marginRight: PropTypes.number,
  hasCheck: PropTypes.bool.isRequired
};

export default Room;
