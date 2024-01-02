import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';
import { submitAPI } from '../API/api';

export default function BookingPage({ onReservationSubmit, availableTimes, occasions, dispatch }) {
  const [occasion, setOccasion] = useState('');
  const [date, setDate] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [n_guests, setNGuests] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const allFieldsFilled = !(occasion && date && availableTime && n_guests);

  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format
  const navigator = useNavigate();

  useEffect(() => {
    console.log('date changed');
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  }, [date, dispatch]);

  const handleSetOccasion = (event) => {
    setOccasion(event.target.value);
  };

  const handleSetDate = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!occasion && !date && !availableTime && !n_guests) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Assuming submitAPI is an asynchronous function
    const submissionSuccessful = submitAPI({
      occasion,
      date,
      availableTime,
      n_guests,
    });

    if (submissionSuccessful) {
      // Handle successful submission
      console.log('Reservation data submitted:', {
        occasion,
        date,
        availableTime,
        n_guests,
      });
    } else {
      // Handle submission failure
      setErrorMessage('Failed to submit reservation');
    }

    navigator('/booking/confirmed')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book now</h1>
      <div className="row-2">
        <div className="field">
          <label htmlFor="res-occasion">Occasion</label>
          <select
            required
            id="res-occasion"
            value={occasion}
            onChange={handleSetOccasion}
          >
            <option key="default"></option>
            {occasions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="res-date">Choose Date</label>
          <input
            required
            type="date"
            id="res-date"
            value={date}
            onChange={handleSetDate}
            min={currentDate}
          />
        </div>

        <div className="field">
          <label htmlFor="res-time">Choose Time</label>
          <select
            required
            id="res-time"
            value={availableTime}
            onChange={(e) => setAvailableTime(e.target.value)}
          >
            <option key="default"></option>
            {availableTimes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="guests">Number of guest</label>
          <input
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={n_guests}
            onChange={(e) => setNGuests(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          aria-label="On Click" 
          disabled={allFieldsFilled}>
            Make Your Reservation
        </button>
        {<p>{errorMessage}</p>}
      </div>
    </form>
  );
}
