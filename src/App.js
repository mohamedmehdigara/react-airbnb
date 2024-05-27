import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SearchResultsPage from './components/SearchResultsPage';
import ListingDetailsPage from './components/ListingDetailsPage';
import NotFoundPage from './components/NotFoundPage';
import "./App.css";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import BecomeHost from './components/BecomeHost';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/search" element={<SearchResultsPage/>} />
          <Route path="/listing/:id" element={<ListingDetailsPage/>} />
          <Route path="/SignupForm" element={<SignupForm/>} />
          <Route path="/LoginForm" element={<LoginForm/>} />
          <Route path="/become-host" element={<BecomeHost />} /> 


          <Route element={<NotFoundPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
