import React from 'react';
import logo from '../assets/logo.svg';

const CompanyLogo: React.FC = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" width={56}/>
  );
};

export default CompanyLogo;