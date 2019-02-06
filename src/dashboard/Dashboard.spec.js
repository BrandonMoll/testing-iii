import { render, fireEvent, cleanup } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('The Dashboard Component', () => {
    it('starts with the gate open and unlocked', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/open/i);
        getByText(/unlocked/i);
    });

    it('Shows the controls and display', () => {
        const { getByText } = render(<Dashboard />);

        getByText(/open/i);
        getByText(/unlocked/i);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

    it('Cannot be closed or opened if locked', () => {
        const { getByText } = render(<Dashboard />);
        const closeGate = getByText(/close gate/i);
        const lockGate = getByText(/lock gate/i);
        fireEvent.click(closeGate);
        fireEvent.click(lockGate);

        const openGate = getByText(/open gate/i);
        expect(openGate).toHaveAttribute('disabled')
    })
})