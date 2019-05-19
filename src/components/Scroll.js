import React from 'react';
import Card from '../components/Card';

const Scroll = (props) => {

    return (
        <div className="wrapper-scroll">
            {props.children}
        </div>
    );
}

export default Scroll;