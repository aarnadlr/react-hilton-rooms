// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';

const Room = ({ children }) => {
  return(
		<>
		{children}
		</>
	);
};

Room.propTypes = {
  children: PropTypes.object
};

export default Room;
