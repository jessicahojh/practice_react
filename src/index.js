import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import ToDoList from './components/ToDoList';
import Time from './components/Time'
import DetailedTime from './components/Time';
import CatContacts from './components/CatContacts';
import DisplayJokes from './components/DisplayJokes'
import App2 from './components/Function2class_based_components';
import Intro2State from './components/Intro2State';
import {StatePractice2} from './components/Intro2State';
import ClickMe from './components/HandlingEvents';
import Counter from './components/CountChangeState';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Example 1

ReactDOM.render(
                <div>
                    <h1>Hello World!</h1>
                    <p>This is a paragraph</p>
                </div>, 
                document.getElementById("root1")
);

/* old way
var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph."
*/


// Example 2


ReactDOM.render(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>,
  document.getElementById("root2")
)

// better way 

function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById("root3")
)

ReactDOM.render(<App/>, document.getElementById("root4"))

ReactDOM.render(<ToDoList/>, document.getElementById("root5"))

ReactDOM.render(<Time/>, document.getElementById("root6"))

ReactDOM.render(<DetailedTime/>, document.getElementById("root7"))

ReactDOM.render(<CatContacts/>, document.getElementById("root8"))

ReactDOM.render(<DisplayJokes/>, document.getElementById("root9"))

ReactDOM.render(<App2/>, document.getElementById("root10"))

ReactDOM.render(<Intro2State/>, document.getElementById("root11"))

ReactDOM.render(<StatePractice2/>, document.getElementById("root12"))

ReactDOM.render(<ClickMe/>, document.getElementById("root13"))

ReactDOM.render(<Counter/>, document.getElementById("root14"))


