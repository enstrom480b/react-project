import React, { Component } from 'react';
import './btn.css';
import {connect}from 'react-redux';
class Button extends Component{

render()
{
return ( <div className="btn"><span>age::{this.props.age}</span><button onClick={this.props.onageup}>up</button><br/>
<button onClick={this.props.onagedown}>down</button></div>)
}
}
const mapstatetoprops=(state)=>{

    return{
        age:state.age
    }
}
const mapdispatchtoprops=(dispatch)=>{

    return{
        onageup:()=>dispatch({type:'AGE_UP'}),
        onagedown:()=>dispatch({type:'AGE_DOWN'})
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Button)