import React ,{useState} from 'react'
function Hookcounter()
{
const [name,setname]=useState({firstname:'',lastname:''})
    return(<div><form>
        Firstname:<input type="text" v alue={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})}/><br/>
        Lastname:<input type="text" value={name.lastname} onChange={e=>setname({...name,lastname:e.target.value})}/>
        <h4>{name.firstname}{name.lastname}</h4>

        </form></div>)
}
export default Hookcounter