import { render, fireEvent, cleanup } from 'react-testing-library';
import React from 'react';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup);

describe('The Display Component', () => {

    it('Displays if gate is open and unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        
        getByText(/open/i);
        getByText(/unlocked/i)
    });

    it('Displays if the gate is closed and locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        
        getByText(/closed/i);
        getByText(/locked/i);
        
    });

    it('Displays red color when locked or closed', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        const closed = getByText(/closed/i);
        const locked = getByText(/locked/i);

        expect(closed).toHaveClass('led red-led')
        expect(locked).toHaveClass('led red-led')
    });

    it('Displays green color when unlocked or open', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        const open = getByText(/open/i);
        const unlocked = getByText(/unlocked/i);

        expect(open).toHaveClass('led green-led')
        expect(unlocked).toHaveClass('led green-led')
    });
})