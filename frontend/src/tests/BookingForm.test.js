import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from '../pages/BookingPage';

// Mock dispatch function
const mockDispatch = jest.fn();

// Mock onReservationSubmit function
const mockOnReservationSubmit = jest.fn();

it('renders the booking form', () => {
  render(
    <BookingPage
      availableTimes={['17:00']}
      occasions={['Birthday']}
      dispatch={mockDispatch}
      onReservationSubmit={mockOnReservationSubmit}
    />
  );

  const heading = screen.getByText("Book now");
  expect(heading).toBeInTheDocument();

});
