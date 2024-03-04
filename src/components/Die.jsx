// import React from 'react';
import PropTypes from 'prop-types';

function Die({ number }) {
  return (
    <div className="die">
      {number !== null ? number : ''}
    </div>
  );
}

Die.propTypes = {
  number: PropTypes.number,
};

export default Die;
