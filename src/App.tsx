import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlueGreenComponent from './components/demo-components/blue-green-component';
import BiggerSmallerComponent from './components/demo-components/bigger-smaller-component';
import TodoVolumeComponent from './components/todo-components/todo-volume-component';

function App() {
  return (
    <div className="App">
    <h2>Higher Order Component</h2>
      <p>Eliminating code redundancy by reusing code is important in all aspects of coding, React included. At times you find that a subset of your components have fragments of identical
        functionality. Well, there is a concept called "higher order components" that exists in React. The idea is that you have a higher order function that takes in a component as an
        argument, it then creates a NEW component using the original component argument while adding some additional funtionality. This NEW component is displayed to the screen instead
        of the original component. Now, because the higher order component is able to add new functionality, you can remove redundant functionality from all "orignal" components and ask
        the higher order component to generate a new component with the previously redundant functionality already added.
      </p>
      <p>In this lab, let's explore how to create higher order components.</p>


      <div className="section-container">
        <BlueGreenComponent></BlueGreenComponent>
        <BiggerSmallerComponent></BiggerSmallerComponent>
      </div>
      <div className="todo-container">
        <TodoVolumeComponent></TodoVolumeComponent>
      </div>

      <div>
        <a href="https://legacy.reactjs.org/docs/higher-order-components.html">https://legacy.reactjs.org/docs/higher-order-components.html</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try creating a higher order component that rendering MULTIPLE compies of the original component to form a socialmedia-like component.*/}
    </div>
  );
}

export default App;
