import React from 'react';
import Details from '../PhoneDetails/Details';

const Phone = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <Details price={'20000'}></Details>
        </div>
    );
};

export default Phone;