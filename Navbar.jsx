import React, { Component } from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom';
class Navbar extends Component {
    render() {

      console.log(this.props)
        return (
            <nav className="nav-wrap red-darken">
                <div className="container">
                  <a className="btn btn-primary" href="/">Pokyitmes</a>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/About">About</Link></li>
                      <li><Link to="/Contact">Contact</Link></li>
        
                      </ul>
            </div> 
            </nav>
           
        )
    }
}
export default  withRouter(Navbar)