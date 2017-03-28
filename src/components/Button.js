import React from 'react';

export const Button = (props) => {
  function handleBtnClick() {
    props.handleBtnClick(props.value);
  }

  return (
    <div onClick={handleBtnClick}>
      {props.value}
    </div>
  );
};

Button.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleBtnClick: React.PropTypes.func.isRequired
};
