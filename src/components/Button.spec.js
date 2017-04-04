import React from "react";
import {shallow} from "enzyme";
import {Button} from "./Button";

describe('Button', () => {
  let buttonUT;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    buttonUT = shallow(<Button value="test-val" handleBtnClick={callback}/>);
  });

  it('always renders a div', () => {
    expect(buttonUT.first().is('div')).toBe(true);
  });

  it('the div has class calc-button', () => {
    expect(buttonUT.first().hasClass('calc-button')).toBe(true);
  });

});
