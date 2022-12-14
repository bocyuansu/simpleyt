import React from 'react';

const Spinner = (props) => {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
