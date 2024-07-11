import React from 'react';
import PropTypes from 'prop-types';

const DateFormatter = ({ date, color }) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric' }).format(new Date(date));
  return <div style={{fontSize: '3em', textAlign: 'center', color: color}}>{formattedDate}</div>;
};

DateFormatter.propTypes = {
  date: PropTypes.string.isRequired,
  options: PropTypes.object,
  color: PropTypes.string
};

export default DateFormatter;
