import BookingForm from '../components/BookingForm';
import { useState } from 'react';

export default function BookingPage({availableTimes, occasions, dispatch}) {
  const [reservationData, setReservationData] = useState(null);
  const handleReservationSubmit = (data) => {
    // Handle the form submission data in the parent component
    console.log('Reservation data submitted:', data);
    setReservationData(data);
  };


  return (
    <>
      <BookingForm 
        occasions={occasions}
        availableTimes={availableTimes}
        dispatch={dispatch}
        onReservationSubmit={handleReservationSubmit} />
      {reservationData && (
        <div>
          Reservation data submitted:
          <pre>{JSON.stringify(reservationData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}
