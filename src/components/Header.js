import React, { Component } from 'react';
import CounterButton from './Counter'
import Counter from './Counter';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div className="headers">
                <h1>Mario Friends</h1>
                <p> These are not your regular Mario Friends</p>
            </div>
        )
    }
}

export default Header;