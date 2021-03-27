import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {createStore} from 'redux';
//import {Provider}from 'react-redux';
import Appsrouter from './Appsrouter';
//import reducer from './reducers/index'
//const store=createStore(reducer)
ReactDOM.render(
<div>
<Appsrouter/>
</div>,
  document.getElementById('root')
);

/*
import productsreducer from  './reducers/productsreducer'
import userreducer  from './reducers/userreducer'


const allreducer=combineReducers({
  products:productsreducer,
  user:userreducer
})
const store=createStore(allreducer,{
  products:[{name:'iphone'}],
  user:'michael'
},
window.devToolsExtension && window.devToolsExtension()
)
ReactDOM.render(
  <Provider store={store}>
< Math/>
  </Provider>,
  document.getElementById('root')
);

/*
const action={
type:'changestate',
payload:{
  newstate:'newstate'
}
}
const initstate={
  arr:[],
  post:[]
}
function reducer(state=initstate,action){
  if(action.type==='changestate')
  {
    return { ...state,arr:[...state.arr,action.payload.newstate]}
  }
  
}
const store=createStore(reducer)
store.subscribe(()=>{
  console.log('store created',store.getState())
})
store.dispatch({
  type:'changestate',
  payload:{
    newstate:'oldtate'
  }
  })
  store.dispatch({
    type:'changestate',
    payload:{
      newstate:'newstate'
    }
    })
ReactDOM.render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('root')
);
//import rootreducer from './reducers';
/*
const initstate={
  todos:[],
  posts:[]
}
//import {addCharacterById}from './actions'
const todoaction={
  type:'ADD_TODO',
  todo:'buy milk'
}
function myreducer(state=initstate,action){
 if(action.type==='ADD_TODO'){
   return{...state,todos:[...state.todos,action.todo]}
 } 
console.log(state,action)
} 
//import Characterlist from './Characterlist'
const store=createStore(myreducer)
store.subscribe(()=>{
  console.log('store updated',store.getState())
})
store.dispatch({type:'ADD_TODO',todo:'buy eggs'})
store.dispatch({type:'ADD_TODO',todo:'buy chicken'})
store.dispatch({type:'ADD_TODO',todo:'buy chips'})
//console.log(store.getState())
//store.subscribe(()=>console.log('store',store.getState()));
//store.dispatch(addCharacterById(2))
ReactDOM.render(
  <Provider store={store}>
< Math/>
  </Provider>,
  document.getElementById('root')
);
*/