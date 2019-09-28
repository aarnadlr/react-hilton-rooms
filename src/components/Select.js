import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  style,
  userType,
  ageNum,
  isDisabled,
  selectValue,
  handleSelectChange,
  name
}) => {
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
        data-testid={'select-label-tag'}
      >
        {userType}
        <br />
        ({ageNum})
      </label>

      <select
        name={name}
        id="select"
        value={selectValue}
        onChange={handleSelectChange}
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
  userType: PropTypes.string.isRequired,
  ageNum: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func,
  selectValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Select;
