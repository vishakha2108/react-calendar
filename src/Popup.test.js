/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react' ;
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Popup',() =>{
    test('Event sustains in memo', () => {
        render(<App />);
        userEvent.click(screen.getByText(1));
        userEvent.click(screen.getByText('Add Memo'));
        userEvent.type(screen.getByRole('textbox'),'sample');
        userEvent.click(screen.getByText('Add'));
        userEvent.click(screen.getByText('x'));
        userEvent.click(screen.getByText(1));
        expect(screen.getByText('-> sample')).toBeInTheDocument();

    });
});
