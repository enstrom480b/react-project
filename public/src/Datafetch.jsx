import React ,{useState,useEffect}from 'react';
import axios from 'axios';


function Datafetch() {
const [posts,setpost]=useState([])
const [id,setid]=useState()
const [buttonid,setbuttondi]=useState()
useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
.then((res)=>{
return res
})
.then((data)=>{
setpost(data.data)
})

},[buttonid])

const handleclick=()=>{

    return setbuttondi(id)
}

console.log(id)
return (<div className="section">
    <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
    <input type="button" value='onsubmit' onClick={handleclick}/>
    <div>{posts.userId}</div>
    <div>{posts.id}</div>
    <div>{posts.title}</div>
    <div>{posts.body}</div>
    
    {/*posts.map((data)=><ul><li>{data.title}</li></ul>)*/}

      </div>);
}
  export default Datafetch