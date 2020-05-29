import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/header';


class App extends React.Component{
    render() {
        return (
            <Header/>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'));