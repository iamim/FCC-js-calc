import React from 'react';

export const ExpressionWindow = (props) => {
  return (
    <h1>{props.toDisplay}</h1>
  );
};

ExpressionWindow.propTypes = {
  toDisplay: React.PropTypes.string.isRequired
};
