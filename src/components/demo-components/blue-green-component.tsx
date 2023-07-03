import React, { ChangeEvent, useState } from 'react';
import DemoHigherOrderComponent from './demo-higher-order-component';


interface MyProps {
    booleanProp?: boolean
}


const BlueGreenComponent: React.FC<MyProps> = (props: MyProps) => {


    return (
        <React.Fragment>
            <h3>Demo Blue Green Component</h3>

            {/* The state the higher componenent adds to this component is pass via props. This component can now react to that state
            change. Now, both the BlueGreenComponent and the BiggerSmallerComponent are able to share functionality without duplication
            and without needing to have a common parent. */}
            {props.booleanProp ? <p style={{color: "blue"}}>Text is now blue, because boolean is true</p> : <p style={{color: "green"}}>Text is now green, because boolean is false</p>}


        </React.Fragment>
    );
}

/* 
NOTICE how the component we are returning is not the component defined in this file, instead it's the component that is returned from the higher order component
*/
export default DemoHigherOrderComponent(BlueGreenComponent);

