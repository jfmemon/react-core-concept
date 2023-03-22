import React from 'react';
import { useState } from 'react';
import StepsTwo from '../StepsTwo/StepsTwo';
const StepsOne = () => {
    const [steps, setSteps] = useState(0);
    const countSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }
    return (
        <div style={{border:'1px solid black', margin:'5px', padding:'5px'}}>
            <h1>Steps count</h1>
            <h3>Today's steps is: {steps}</h3>
            <button onClick={countSteps}>Count steps</button>
            <StepsTwo steps={steps}></StepsTwo>
        </div>
    );
};

export default StepsOne;