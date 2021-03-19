import React from 'react';
import './style.css';
import BoxContent from './Components/BoxContent/BoxContent';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class MainPage extends React.PureComponent {

  render() {
    return (
      <div className="grid">
        <Header />
        <Navigation />
        <BoxContent />
        <Footer />
      </div>

    );
  }
}

export default MainPage;