import React from "react";

export const ExpressionWindow = (props) => {
  return (
    <div className="calc__expression">
      <p className="calc__expression-text">
        {props.toDisplay}
      </p>
    </div>
  );
};

ExpressionWindow.propTypes = {
  toDisplay: React.PropTypes.string.isRequired
};
