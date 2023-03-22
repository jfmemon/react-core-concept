import React from 'react';
import { fakeDb, removeFromDb } from '../Utilities/fakeDatabase';
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    function buyItem(id){
        fakeDb(id);
    }
    function removeItem(id){
        removeFromDb(id);
    }
    return (
        <div className='cosmetic'>
            <h2>Cosmetic name: {name}</h2>
            <h3>Cosmetic quantity: {price}</h3>
            <p><small>Cosmetic id: {id}</small></p>
            <button onClick={() => buyItem(id)}>Add to cart</button>
            <button onClick={() => removeItem(id)}>Remove item</button>
        </div>
    );
};

export default Cosmetic;