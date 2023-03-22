import React from 'react';

const StepsThree = (props) => {
    return (
        <div style={{margin:'5px', border:'1px solid red', padding:'5px'}}>
            <h1>Steps three count</h1>
            <h3>Today's steps: {props.steps}</h3>
        </div>
    );
};

export default StepsThree;