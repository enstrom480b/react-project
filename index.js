import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Person=({img,name,job})=>{
const url=`https://randomuser.me/api/portraits/med/men/${img}.jpg`
return (<article className="person">
<img src={url} alt="person"/>
<h4>Name:{name}</h4>
<h4>Job:{job}</h4>
  </article>
  )
}

const Personlist=()=>{
  return(
  <section className="personlist">
    <Person img="35" name="john" job="developer"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="36" name="evans" job="enginner"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="37" name="json" job="pilot"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="38" name="john" job="developer"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="39" name="evans" job="enginner"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="40" name="json" job="pilot"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="41" name="john" job="developer"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="42" name="evans" job="enginner"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

    <Person img="43" name="json" job="pilot"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>














    </section>
    

    )
}

ReactDOM.render(
 <Personlist/>,
 document.getElementById('root')
);

