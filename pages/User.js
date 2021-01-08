import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {firstname,lastname}=useParams()
    return (
        <div>
            <h1>User{firstname}{lastname}</h1>
        </div>
    )
}
