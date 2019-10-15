// Test away
import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import Dashboard from './Dashboard';



test('it renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});



test('shows the display', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/close/i)

});




test('shows the controls', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/open/i)

});



test('shows the controls', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/locked/i)

});

test('shows the controls', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i)

});

