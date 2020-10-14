import React, { useContext } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
