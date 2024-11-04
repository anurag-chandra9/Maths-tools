import React, { useState } from 'react';
import './App.css';

function App() {
  const[Input,setInput]=useState("")
  const[Sortedarr,setSortedarr]=useState([])

  const handleinput=(e)=>{
    setInput(e.target.value)
  }
  const bubblesort=(arr)=>{
    const array=[...arr]
    for(let i=0;i<array.length;i++){
      for(let j=0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
          [array[j],array[j+1]]=[array[j+1],array[j]];
        }
      }
    }
    return array;
  };
  const handleoutput=()=>{
    const filterarray=Input.split(',').map((num)=>parseInt(num.trim(),10)).filter((num)=>!isNaN(num));

    const sorted=bubblesort(filterarray);
    setSortedarr(sorted);

  }



  return (
<div className='place-items-center m-5'>
  <h1 className=' m-2 bg-slate-500'>Bubble sort</h1>
  <input type="text" value={Input} onChange={handleinput} placeholder='write a array' />
  <button className='bg-green-800 rounded-lg ' onClick={handleoutput}> Sort </button>
  <p>sorted array: {Sortedarr.join(", ")}</p>
</div>
   
  );
}

export default App;
