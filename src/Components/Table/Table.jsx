import React from 'react'
import './Table.css'

const Table = (props) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th className='header'>Customer Name</th>
                <th className='header'>Company</th>
                <th className='header'>Phone Number</th>
                <th className='header'>Email</th>
                <th className='header'>Country</th>
                <th className='header'>Status</th>
            </tr>
        </thead>
        <tbody>
        
                {props.customers.map(user=>(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.company}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>{user.status}</td>
                </tr>
                ))}
                
        </tbody>
    </table>
  )
}

export default Table
