import React from 'react';
import StepsThree from '../StepsThree/StepsThree';

const StepsTwo = (props) => {
    return (
        <div style={{margin:'5px', border:'1px solid green', padding:'5px'}}>
            <h2>Second steps count</h2>
            <h5>Todays steps: {props.steps}</h5>
            <StepsThree steps={props.steps}></StepsThree>
        </div>
    );
};

export default StepsTwo;