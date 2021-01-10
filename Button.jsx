import React, { Component } from 'react';
import './btn.css';
import {connect}from 'react-redux';
class Button extends Component{

render()
{
return ( <div ><span>age::{this.props.age}</span><div className="btn" ><button onClick={this.props.onageup}>up</button><br/>
<button onClick={this.props.onagedown}>down</button></div>
<div><ul >{
    this.props.history.map((el)=>(
<li className="btn1"key={el.id} onClick={this.props.deleteitem}>{el.age} </li>
    )

    
    )}</ul></div>
</div>
)
}
}
const mapstatetoprops=(state)=>{

    return{
        age:state.age,
        history:state.history

    }
}
const mapdispatchtoprops=(dispatch)=>{

    return{
        onageup:()=>dispatch({type:'AGE_UP',value:10}),
        onagedown:()=>dispatch({type:'AGE_DOWN',value:10}),
        deleteitem:()=>{

            
        }
    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Button)