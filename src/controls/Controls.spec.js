// Test away!
import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import Controls from './Controls';



// test ('App renders without crashing', () => {
//     render(<Controls/>);
//   })

test

test('it renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

test('Displays if gate locked', () => {
    const { getByText } = render(<Controls />);

    getByText(/lock/i)



})


test('Displays if gate close', () => {
    const { getByText } = render(<Controls />);



    getByText(/close/i)

})


test('if gate is locked, close button disabled', () => {
    const { getByText } = render(<Controls locked={true} />);



    expect(getByText(/close/i)).toBeFalsy;

})


test('button click closes gate', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosedMock} />);



    fireEvent.click(getByText(/close/i));
    expect(toggleClosedMock).toHaveBeenCalled();




})

