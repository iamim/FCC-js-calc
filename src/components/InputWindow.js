import React from "react";

export const InputWindow = (props) => {
  return (
    <div className="calc__input">
      <p className="calc__input-text">
        {props.toDisplay}
      </p>
    </div>
  );
};

InputWindow.propTypes = {
  toDisplay: React.PropTypes.string.isRequired
};
