/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react' ;
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Popup',() =>{
    test('Event sustains in memo', async() => {
        render(<App />);
        userEvent.click(screen.getByText(1));
        const popup = (await (screen.findByText('Add Memo')));
        userEvent.click(popup);
        const memo = await (screen.findByRole('textbox'));
        userEvent.type(memo, 'sample');
        userEvent.click (screen.getByText('Add'))
        userEvent.click (screen.getByText('x'))
        const noPopup = await (screen.findByText(1));
        userEvent.click(noPopup);
        expect( await screen.findByText('-> sample')).toBeInTheDocument();

    });
});
