import { useState } from 'react'
import { Users } from './users'
import './App.css'

function App() {
  const [query,setQuery]=useState("");
  const filterUsers = (Users) => Users.filter(user => user.name.toLocaleLowerCase().includes(query));
  return (
    <>
      <div className="app">
        <input type="text" placeholder="Search..." className='Search' onChange={e=>setQuery(e.target.value)} />
          <ul className='list'>
            {
              filterUsers(Users).map(users =>(
                <li className='listItem' key={users.id}>{users.name}</li>
              ))
            }
          </ul>
      </div>

    </>
  )
}

export default App
