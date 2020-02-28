import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

//Deja de ser un componente stateful una diferencia es que no contiene '{}' y se convierte en Stateless

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

}
      
export default App;