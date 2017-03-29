import React from "react";
import classNames from "classnames";

export const Button = (props) => {
  function handleBtnClick() {
    props.handleBtnClick(props.value);
  }

  const classes = classNames({
    'calc-button': true,
    '-width-double': props.equals
  });

  return (
    <div className={classes} onClick={handleBtnClick}>
      {props.value}
    </div>
  );
};

Button.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleBtnClick: React.PropTypes.func.isRequired,
  equals: React.PropTypes.bool
};
