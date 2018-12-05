import React, { Component } from 'react';
import Inquiry from './Inquiry';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { started: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ started: true });
    }

    render() {
        return (
            <div className="app">
                { this.state.started ? <Inquiry /> : (
                    <div className="menu">
                        <div className="menu-item" onClick={this.handleClick}>Test N1</div>
                    </div>
                ) }
            </div>
        );
    }
}

export default App;