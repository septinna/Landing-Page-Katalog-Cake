import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const FunctionalApp = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevClickCount => prevClickCount + 1);
  };

  let bodyComponent;
  if (clickCount <= 5) {
    bodyComponent = <Body clickCount={clickCount} handleClick={handleClick} />;
  } else {
    bodyComponent = <div>Jumlah klik sudah mencapai batas maksimal.</div>;
  }

  return (
    <div>
      <Header />
      {bodyComponent}
      <Footer />
    </div>
  );
};

export default FunctionalApp;
