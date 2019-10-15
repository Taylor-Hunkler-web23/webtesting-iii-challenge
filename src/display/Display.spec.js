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



test('when open use the green-led', () => {
    const {getByText} = render(<Display closed={false}  />);
  const open = getByText (/open/i);
    expect(open).toHaveClass("green-led")

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