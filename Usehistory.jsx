import React,{Component} from 'react'

import {BrowserRouter as Router,Route,Switch,Link}from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import User from "./pages/User";
import Contacts from './pages/Contacts';
class Usehistory extends Component{
constructor()
{
    super()
    this.state={
 
    }
   } 
    render()
    {
    return(
    <Router>
    <div className="routerlinks"> 
    <ul>
         <li> 
        <Link to={
              {  pathname:"/Home",
            state:{
                from :'root'
            }
        }
        }>Home</Link>
    </li>
        <li> 
          <Link to="/About">about</Link>
        </li>
        <li> 
            <Link to="/Contacts">contacts</Link>
        </li>
        <li> 
            <Link to="/User">user</Link>
        </li>
    </ul>
    </div>
<Switch>
<Route exact path="/Home" component={Home}/>
<Route exact path="/About" component={About}/>
<Route exact path="/User/:firstname/:lastname" component={User}/>
<Route exact path="/Contacts" component={Contacts}/>
</Switch>
    </Router>
    )
    }

}
export default Usehistory