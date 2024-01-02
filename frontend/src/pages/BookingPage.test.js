import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage'

describe('BookingForm Component', () => {
  const occasions = ['Birthday', 'Anniversary'];
  const availableTimes = ['17:00', '17:30', '18:00', '18:30'];
  const dispatchMock = jest.fn();
  const onReservationSubmitMock = jest.fn();

  it('should correctly render all fields and their default values', () => {
    render(
      <BookingPage
        occasions={occasions}
        availableTimes={availableTimes}
        dispatch={dispatchMock}
        onReservationSubmit={onReservationSubmitMock}
      />
    );

    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guest/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  it('should display an error message and disable submit button when date field is empty', async () => {
    render(
      <BookingPage
        occasions={occasions}
        availableTimes={availableTimes}
        dispatch={dispatchMock}
        onReservationSubmit={onReservationSubmitMock}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(screen.getByText(/please fill in all required fields/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

  it('should display an error message and disable submit button when number of guests field is empty', async () => {
    render(
      <BookingPage
        occasions={occasions}
        availableTimes={availableTimes}
        dispatch={dispatchMock}
        onReservationSubmit={onReservationSubmitMock}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(screen.getByText(/please fill in all required fields/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

});
