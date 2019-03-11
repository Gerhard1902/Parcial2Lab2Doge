import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DogeMeme from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<DogeMeme top={"I´m a programmer"} bottom={"No, i won´t fix your computer"} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
