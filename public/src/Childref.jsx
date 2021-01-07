import React,{useEffect} from 'react'
let rendercount=0;

export default function Childref() {

    useEffect(()=>{

        rendercount++;
    })
    return (
        <div>
            {rendercount}
        </div>
    )
}
