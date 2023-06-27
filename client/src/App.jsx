import { useEffect, useState } from 'react'
import './App.css'
import Table from './Table';
import axios from 'axios'

function App() {
  const [query,setQuery]=useState("");
  const [data , setData ] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:3000/?q=${query}`)
      setData(res.data);
      console.log(res);
    }
    fetchUsers();
  }, [query])
  
  return (
    <>
      <div className="app">
        <input type="text" placeholder="Search..." className='Search' style={{width:'300px',height:"30px", padding:'5px'}} onChange={e=>setQuery(e.target.value)} />
        <Table data={data}/>
      </div>

    </>
  )
}

export default App
