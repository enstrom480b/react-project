import React from 'react'
import {useLocation,useHistory} from 'react-router';

export default function Home() {
    const location=useLocation()
    const history=useHistory()
const goback=()=>
{
      return (history.goBack())
}


    return (
        <div>
            <h1>Home</h1>
       
            <button onClick={goback}>GOBACK</button>
        </div>
    )
}
