import React, { Component } from 'react';
import {Form ,FormGroup,FormControl,FormLabel ,Button}from 'react-bootstrap';
import {connect} from 'react-redux';
import {setrecipes} from './actions'
class Searchfinder extends Component{
constructor()
{
super();
this.state={

  ingredients:'chicken',
  dish:'garlic',
  users:''
}
this.search=this.search.bind(this)
}
  search(e){
  /*
    fetch('https://jsonplaceholder.typicode.com/users')
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        users: data 
      }))*/

    let {ingredients,dish}=this.state;
    const url=`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    fetch(url,{
      method:'GET'
    }).then(response=>response.json())
    .then(json=>this.setState({ users:json}))
  }
render(){ 
    return(
      <section>
  <Form  inline>
    <FormGroup>
      <FormLabel >Ingredients</FormLabel >
      {' '}
  <FormControl type="text" placeholder="garlic, chicken" onChange={event=>this.setState({ ingredients:event.target.value
   })} />
    </FormGroup>
      {' '}
   <FormGroup>
      {' '}
      <FormLabel >Dish</FormLabel >
      {' '}
 <FormControl type="text" placeholder="adobo"  onChange={event=>this.setState({ dish:event.target.value})}/>

  </FormGroup>
  <Button onClick={this.search}>submit</Button>
</Form>
</section>
    )
}
   
}
export default connect (null,{setrecipes}) (Searchfinder);