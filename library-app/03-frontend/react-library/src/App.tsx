import React from 'react';
import './App.css';
import { Footer } from './layouts/HomePage/components/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar/>
        <HomePage/>
      <Footer/>
    </div>
  );
}
