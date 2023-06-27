import { useState } from 'react'
import { Users } from './users'
import './App.css'
import Table from './Table';

function App() {
  const [query,setQuery]=useState("");
  const keys = ['name','username','email'];
  const filteredUsers = (users) => (users.filter( user => keys.some(key =>  user[key].toLowerCase().includes(query)) ));
  return (
    <>
      <div className="app">
        <input type="text" placeholder="Search..." className='Search' style={{width:'300px',height:"30px", padding:'5px'}} onChange={e=>setQuery(e.target.value)} />
        <Table data={filteredUsers(Users)}/>
      </div>

    </>
  )
}

export default App
