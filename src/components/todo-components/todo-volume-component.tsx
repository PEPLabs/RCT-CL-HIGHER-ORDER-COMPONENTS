import React, { ChangeEvent, useState } from 'react';
import TodoHigherOrderComponent from './todo-higher-order-component';


interface MyProps {
    numberProp?: number
}


const VolumeComponent: React.FC<MyProps> = (props: MyProps) => {

    let myElement;

    if(props.numberProp && props.numberProp<=4){
        myElement = (<p>I can't hear the volume: {props.numberProp * 10 + " decibels"}</p>)
    }
    else if(props.numberProp && props.numberProp<=9){
        myElement = (<p>Okay, I can hear the volume now: {props.numberProp * 10 + " decibels"}</p>)
    }
    else if(props.numberProp && props.numberProp>9){
        myElement = (<p>WHAT'D YOU SAY!?! I CAN'T HEAR YOU! {props.numberProp * 10 + " decibels"}</p>)
    }



    return (
        <React.Fragment>
            <h3>Todo volume Component</h3>

            <p>Todo: your task is to use "TodoHigherOrderComponent" to give this component number state as well as a button that alters that state by incrementing by 1.
                If done correctly, this component should use conditional rendering to cycle between 3 different text messages as the number state increases.
            </p>

            {myElement}

        </React.Fragment>
    );
}

/* 
TODO: ensure that your export is correct for utilizing a higher order component. This is the only place in this file that you need to modify.
*/
export default VolumeComponent;

