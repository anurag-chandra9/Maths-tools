import { useState } from 'react'
import './App.css'

function App() {
  const [Input,setInput]=useState('');
  const [Ispalinedrom,setIspalinedrom]=useState(null);
  const handleevent=(e)=>{
          setInput(e.target.value);
  }
  const checkpalindrom=()=>{
    const convert=Input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed=convert.split('').reverse().join('');
    setIspalinedrom(convert===reversed);

  }


  return (
    <div className='flex flex-col  justify-between items-center  w-full p-4 max-w-screen-sm '>
    
      <h1 className=' bg-slate-500 flex flex-col  justify-between items-center w-full p-4   '>check Palinedrom</h1>
      <input className='flex flex-col  justify-between items-center  w-full p-4 ' type="text" value={Input} placeholder='enter a string ' onChange={handleevent} />
    <button className=' bg-blue-500 flex flex-col  justify-between items-center w-full p-4 ' onClick={checkpalindrom}>check</button>
    <div className='text-black bg-gray-500 flex flex-col  justify-between items-center w-full p-4 '>
      {Ispalinedrom!==null&&(<p className='text-black bg-white'>
        {Ispalinedrom? 'this string is  a palindrom'
        :'this string is  not palindrom'}</p>)
      }
    </div>
    
    
    </div>
  )
}

export default App
