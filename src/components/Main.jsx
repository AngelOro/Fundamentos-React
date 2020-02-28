import React from 'react';
import Content from './Content';
import Prices from './Prices';

// Componente Clase

class Main extends React.Component {

    render(){
        return(
            <>
            <Content />
            <Prices />
            </>
        );
    }
}

export default Main;