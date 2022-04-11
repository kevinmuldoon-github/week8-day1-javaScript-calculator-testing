import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should be able to add two numbers together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonPlus = container.find('#operator-add');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button1.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should be able to subtract one number from another', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const buttonMinus = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button7.simulate('click');
    buttonMinus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to multiply two numbers together', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should be able to divide one number by another', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const runningTotal = container.find('#running-total');

    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('123');
  });

  it('should allow multiple operations to be chained togeter', () => {

    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button4 = container.find('#number4');
    const button5 = container.find('#number5');
    const button6 = container.find('#number6');
    const button7 = container.find('#number7');
    const button8 = container.find('#number8');
    const button9 = container.find('#number9');
    const button0 = container.find('#number0');

    const buttonPlus = container.find('#operator-add');
    const buttonMinus = container.find('#operator-subtract');
    const buttonDivide = container.find('#operator-divide');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button1.simulate('click');
    button0.simulate('click');
    button5.simulate('click');
    buttonMultiply.simulate('click');
    button2.simulate('click'); //210
    buttonMinus.simulate('click');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button7.simulate('click'); //189
    buttonPlus.simulate('click');
    button9.simulate('click'); //198
    buttonPlus.simulate('click');
    button6.simulate('click');
    buttonMultiply.simulate('click');
    button8.simulate('click');
    buttonDivide.simulate('click');
    button4.simulate('click'); //210
    buttonEquals.simulate('click');

    expect(runningTotal.text()).toEqual('2928');

    // Correct answer should be 210, but calculator app does not follow the order of operations

  });

})
