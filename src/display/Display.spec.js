// Test away!
import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import Display from './Display';
import  'jest-dom/extend-expect'

test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});




test('closed use the red-led class', () => {
    const {getByText} = render(<Display closed={true}  />);
  const closed = getByText (/closed/i);
    expect(closed).toHaveClass("red-led")

});

test('locked use the red-led class', () => {
    const {getByText} = render(<Display locked={true}  />);
  const locked = getByText (/locked/i);
    expect(locked).toHaveClass("red-led")

});


test('when open use the green-led', () => {
    const {getByText} = render(<Display closed={false}  />);
  const open = getByText (/open/i);
    expect(open).toHaveClass("green-led")

});

test('when unlocked use the green-led', () => {
    const {getByText} = render(<Display unlocked={false}  />);
  const unlocked = getByText (/unlocked/i);
    expect(unlocked).toHaveClass("green-led")

});



test('displays Locked if the locked prop is true', () => {
    const {getByText} = render(<Display locked={true}  />);
  const locked = getByText (/locked/i);
    expect(locked).toBeTruthy

});


test('displays Closed if the closed prop is true', () => {
    const {getByText} = render(<Display closed={true}  />);
  const isClosed = getByText (/closed/i);
    expect(isClosed).toBeTruthy

});


test('default to unlocked and open', () => {
    const {getByText} =  render(<Display />);
  const isUnlocked = getByText (/unlocked/i);
  const isOpen = getByText (/open/i);
    expect(isUnlocked).toBeTruthy;
    expect(isOpen).toBeTruthy;

});