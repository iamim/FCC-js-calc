import React from 'react';

export const InputWindow = (props) => {
  return (
    <h1>{props.toDisplay}</h1>
  );
};

InputWindow.propTypes = {
  toDisplay: React.PropTypes.string.isRequired
};
