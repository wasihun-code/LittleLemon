// App.js
import './App.css';

import { fetchAPI } from './API/api';
import React, { useReducer } from 'react';
import { Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';



export default function App() {
  console.log(fetchAPI(new Date()))

  const reducer = (state, action) => {
    let newState;
    switch (action.type) {
      case 'UPDATE_TIMES':
        newState = updateTimes(state, new Date(action.payload));
        break;

      default:
        return state;
    }
    return newState;
  }
  
  const updateTimes = (state, selectedDate) => {
    const updatedTimes = fetchAPI(selectedDate);
    return updatedTimes;
  };  
  
  const initializeTimes = () => fetchAPI(new Date())
  const occasions = ['Birthday', 'Anniversary'];
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              occasions={occasions}
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          } 
        />
        <Route path="/booking/confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
