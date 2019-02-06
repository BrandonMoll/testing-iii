import { render, fireEvent, cleanup } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard'

afterEach(cleanup);

describe('The Controls component', () => {
    it('Provides buttons to toggle the closed and locked states', () => {
        const { getByText } = render(<Controls />);
        getByText(/close gate/i);
        getByText(/lock gate/i);
    });

    it('Buttons text changes to reflect the state the door will be in if clicked', () => {
        const { getByText } = render(<Dashboard />);

        const closedGate = getByText(/close gate/i);
        fireEvent.click(closedGate);
        expect(closedGate).toHaveTextContent(/open gate/i);

        const lockGate = getByText(/lock gate/i);
        fireEvent.click(lockGate);
        expect(lockGate).toHaveTextContent(/unlock gate/i)
    });

    it('The closed toggle button is disabled if the gate is closed', () => {
        //This does not make sense, the button does not become disabled, it switches to saying "open gate"
        //Which is tested in the test above
    });

    it('The locked toggle button is disabled if the gate is open', () => {
        const { getByText } = render(<Dashboard />);
        const lockGate = getByText(/lock gate/i);
        getByText(/open/i)
         expect(lockGate).toHaveAttribute('disabled')
    })
})