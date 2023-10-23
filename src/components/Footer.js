//import "../style/Footer.css";

import React from 'react';
import HeaderSocials from './pages/HeaderSocials';


const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
      <HeaderSocials />
      </div>
    </footer>
  );
};

  //const Footer = () => <HeaderSocials />;
  
  export default Footer;