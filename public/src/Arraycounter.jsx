import React ,{useState} from 'react'
function Arraycounter()
{
    const [items,setitems]=useState([])
    const additems=()=>{
setitems([...items,{id:items.length,value:Math.floor(Math.random()*10+1)}])
    }
   additems() 
return(<div>counter</div>)
}
export default Arraycounter