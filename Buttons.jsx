import React,{useState} from 'react'
import Userdetails from './Userdetails'

export default  function Buttons ()


{
const[detailvisible,setdetailvsible]= useState(false)
const[curvisoble,setcurvisoble]= useState(false)

    console.log(detailvisible)
return(
    <section>
        <button onClick={()=>setdetailvsible(curvisoble=>!curvisoble)}>click
        </button>       
         <h2> {detailvisible ?'show':'hide'}</h2>
         <h2> {detailvisible &&<Userdetails name="evans" age="35"/>}</h2>

        </section>)
}



