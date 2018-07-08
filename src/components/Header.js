import React, { Component } from 'react';
import CounterButton from './Counter'
import Counter from './Counter';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div>
                return<h1>Mario Friends</h1>
                <Counter color={'red'} />
            </div>
        )
    }
}

export default Header;