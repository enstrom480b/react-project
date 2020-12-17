import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.component';
import Searchfinder from './Searchfinder.component';
import Receipelist from './Receipelist';
import {createStore} from 'redux';
import {Provider}from 'react-redux'
import rootreducer from './reducers/index'
const store=createStore(rootreducer)
store.subscribe(()=>console.log('store',store.getState()))
ReactDOM.render(

  <Provider store={store}>
    <App />
    <Searchfinder/>

     </Provider>,document.getElementById('root')
);