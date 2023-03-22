import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { useState, useEffect } from 'react';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch("data.json")
        .then(response => response.json())
        .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Welcome to cosmetics mall.</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
                >

                </Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;