import React from 'react';
import Navbar from './Navbar';

const Home = ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }

  </div>
);
    // <Footer />
export default Home;
