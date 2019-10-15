// Test away!
import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import Controls from './Controls';



// test ('App renders without crashing', () => {
//     render(<Controls/>);
//   })


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





test('button click closes gate', () => {
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosedMock} />);



    fireEvent.click(getByText(/close/i));
    expect(toggleClosedMock).toHaveBeenCalled();




})




test('the closed toggle button is disabled if the gate is locked', () => {
    const {getByText} = render(<Controls locked={true}  />);

    expect(getByText(/close/i)).toBeDisabled

});

test('the locked toggle button is disabled if the gate is open', () => {
    const {getByText} = render(<Controls closed={false}  />);

    expect(getByText(/lock/i)).toBeDisabled

});

