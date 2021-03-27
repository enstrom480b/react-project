import React, { Component } from 'react'
import axios from 'axios'
import {Link}from 'react-router-dom'
export default class Home extends Component {
state={
    posts:[]
}

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    this.setState({
        posts:res.data.slice(0,10)
    })
    console.log(res.data)})
}


    render() {
        const {posts}=this.state
        const postslist=posts.length?(posts.map((data)=>
             
                <div key={data.id}>
                    <Link to={'/'+posts.id}>
                <span>{data.title}</span>
                      </Link>
                <p>{data.body}</p>
                </div>
                )):(<p>no items</p>)
            
      

        return(<div>{postslist}</div>)

        
    
      }
        
    
    
    
}