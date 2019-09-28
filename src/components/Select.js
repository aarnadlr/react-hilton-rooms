import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Select = ({ style, userType = 'unset', ageNum = '00', isDisabled }) => {
  const [selected, setSelected] = useState('');
  //
  const handleChange = e => {
    setSelected(e.target.value);
  };

  return (
        <div
        style={{
          ...style,
          display: 'flex',
          flexDirection: 'column',
          width: '50px'
        }}
      >
        <label
          style={{ lineHeight: '1', margin: '0 0 8px 0', textAlign: 'center' }}
          htmlFor="select"
        >
          {userType}
          <br />({ageNum})
        </label>

        <select
          id="select"
          value={selected}
          onChange={handleChange}
          disabled={isDisabled}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
  );
};

Select.propTypes = {
  style: PropTypes.object,
  userType: PropTypes.string,
  ageNum: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default Select;
