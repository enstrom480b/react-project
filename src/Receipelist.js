import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { func } from 'prop-types';
class Receipelist extends Component{

render()
{
    console.log(this.props)
    return(<div>{

        this.props.recipes.map(receip=>{
return (<h4>{receip.title}</h4>)

        })
    }</div>)
}

}
function maptostateprops(state)
{
    return state;
}

export default connect (maptostateprops,null)(Receipelist)