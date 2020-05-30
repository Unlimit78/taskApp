import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/header';
import MainBody from './layout/MainBody';
import Footer from './layout/foot';

class App extends React.Component{

    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <div>
                    <MainBody/>
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('main'));