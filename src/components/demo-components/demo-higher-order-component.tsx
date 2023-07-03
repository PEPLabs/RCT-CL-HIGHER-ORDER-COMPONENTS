import React, { useState } from 'react';


interface MyProps {
    booleanProp?: boolean
}

/*
    Eliminating code redundancy by reusing code is important in all aspects of coding, React included. At times you find that a subset of your components have fragments of identical
        functionality. Well, there is a concept called "higher order components" that exists in React. The idea is that you have a higher order function that takes in a component as an
        argument, it then creates a NEW component using the original component argument while adding some additional funtionality. This NEW component is displayed to the screen instead
        of the original component. Now, because the higher order component is able to add new functionality, you can remove redundant functionality from all "orignal" components and ask
        the higher order component to generate a new component with the previously redundant functionality already added.
*/
const DemoHigherOrderComponent = (OriginalComponent: React.FC<MyProps>) => {

    //INNER COMPONENT
    //Make sure your component is title cased, else you'll get an error.
    const NewComponentDesignedToBeReturned: React.FC<MyProps> = (props: MyProps) =>{

        //Demo's State
        const [booleanState, setBooleanState] = useState(true);


        return (
            <React.Fragment>

                {/* Make sure your component you received as an argument is title cased, else you'll get an error. */}
                <OriginalComponent booleanProp={booleanState}></OriginalComponent>
    
                <h3>Text added by the Demo Higher Order Component</h3>

                <p>Boolean State: {booleanState}</p>
                <button onClick={()=>{setBooleanState(!booleanState)}}>Alter Boolean State</button>

                <br/>
                <br/>
            </React.Fragment>
        );
    }

    /* Notice that we are returning the INNER COMPONENT, which is a new component consisting of the original component and some added functionality */
    return NewComponentDesignedToBeReturned;
}

/* Notice here that we are returning a function that takes a component as an argument. This is the heart of what a higher order function is */
export default DemoHigherOrderComponent;