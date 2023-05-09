import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 1 to 4', () => {
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4')
    const operatorAdd = container.getByTestId('operator-add')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(operatorAdd)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7')
    const button4 = container.getByTestId('number4')
    const operatorSubtract = container.getByTestId('operator-subtract')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(operatorSubtract)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button5)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const operatorDivide = container.getByTestId('operator-divide')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(operatorDivide)
    fireEvent.click(button7)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(button2)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('123')
  })

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1')
    const operatorAdd = container.getByTestId('operator-add')
    const button2 = container.getByTestId('number2')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const button3 = container.getByTestId('number3')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(operatorAdd)
    fireEvent.click(button2)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button3)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('9')
  })

  it('should be able to clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button3 = container.getByTestId('number3')
    const button4 = container.getByTestId('number4')
    const operatorAdd = container.getByTestId('operator-add')
    const operatorEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    fireEvent.click(button1)
    fireEvent.click(operatorAdd)
    fireEvent.click(button2)
    fireEvent.click(operatorAdd)
    fireEvent.click(button3)
    fireEvent.click(clear)
    fireEvent.click(operatorAdd)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('7')
  })


})

