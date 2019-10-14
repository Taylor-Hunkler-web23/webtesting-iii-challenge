// Test away!
import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import Display from './Display';


test('it renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});





// test('shows the when locked or closed use the red-led class', () => {
//     const showsRed = getByText(<Dashboard closed={true} />);

//     expect((showsRed.getByText(/closed/i))

// });


test('shows the when locked or closed use the red-led class', () => {
    const {getByText} = render(<Display closed={true} />);
    const gateClosed = getByText (/closed/i)
    expect((gateClosed.classList.contains('red-led')))

});



test('when open use the green-led class', () => {
    const {getByText} = render(<Display closed={false} />);
    const gateOpen = getByText (/open/i)
    expect((gateOpen.classList.contains('green-led')))

});
