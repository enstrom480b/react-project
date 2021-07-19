import React, { Component } from 'react'
import {BrowserRouter,Route}from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Post from './components/Posts'

export default class Appsrouter extends Component {
    render() {
     
        return (
            <div>
      <BrowserRouter>

         <Navbar/>
         <Route exact path='/' component={Home}/>
         <Route path='/About' component={About}/>
         <Route path='/Contact' component={Contact}/>
         <Route path="/:post_id" component={Post}/>

      </BrowserRouter>
             
            </div>
        )
    }
}
