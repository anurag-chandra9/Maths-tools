import { useState } from 'react'
import './App.css'

function App() {
  const[Inputarr,setInputarr]=useState("");
  const[Sortedarr,setSortedarr]=useState([]);
  const insertionsort=(arr)=>{
    let sorted=[...arr];
    for(let i=1;i<sorted.length;i++){
      let key=sorted[i];
      let j=i-1;

      while(j>=0&& sorted[j]>key){
        sorted[j+1]=sorted[j];
        j=j-1;
      }
      sorted[j+1]=key;

    }return sorted;

  };
  const handleinput = (e) => {
    setInputarr(e.target.value);
  };
   const handleoutput=()=>{
     const arr=Inputarr.split(",").map(Number);
     const result=insertionsort(arr);
     setSortedarr(result);
   };



  return (
  <div className='place-items-center m-5'>
    <h1 className=' m-2 bg-slate-500'>Insertion sort</h1>
    <input type="text" value={Inputarr} onChange={handleinput}  />
    <button  className='bg-green-800 rounded-lg ' onClick={handleoutput}>SORT</button>
    <p>Sorted: {Sortedarr.join(", ")}</p>

  </div>
  )
}

export default App
