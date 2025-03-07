import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [textValue, setTextValue] = useState(""); //input field text
  const [value, setValue] = useState(""); //value is data from backend

  const submit = async() =>{
    const res = await fetch(`https://younglabs-innovations-ysid.vercel.app/api/greet?name=${textValue}`,{
      method : 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if(!data.message){
      return setValue(data.error)
    }
    setValue(data.message)
  }
  
  return (
    <div className='flex flex-col gap-24 items-center h-screen w-full'>
      <div className='mt-5 text-2xl font-poppinsMedium'>
        {value}
      </div>
      <div 
        className='bg-red-300 border border-blue-600 justify-center rounded-xl h-72 w-1/2 flex items-center gap-5 flex-col'
      >
        <input
          type='text'
          value={textValue}
          onChange={(e)=>setTextValue(e.target.value)}
          placeholder='enter your name...'
          className='rounded-lg p-3 w-[70%] border bg-gray-100 border-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-300 transition-all'
        />
        <button 
          className = "rounded-xl p-3 bg-blue-400 text-white hover:bg-blue-500 transition-all"
          onClick={submit}  
        >
          Get Greeting
        </button>
      </div>
    </div>
  )
}

export default App
