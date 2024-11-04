import { useState } from 'react'
import './App.css'

function App() {
  const[Inputarr,setInputarr]=useState("");
  const[Sortedarr,setSortedarr]=useState([]);
   
  const selectionsort=(arr)=>{
    let sorted=[...arr];
    let n=sorted.length;
    for(let i=0;i<n-1;i++){
      let minIndex=i;
      for(let j=i+1;j<n;j++){
        if(sorted[j]<sorted[minIndex]){
          minIndex=j;
        }
      }
      if(minIndex!==i){
        [sorted[i],sorted[minIndex]]=[sorted[minIndex],sorted[i]];
      }
    }return sorted;
  };
    const handleinput = (e) => {
    setInputarr(e.target.value);
  };
  const handleoutput = () => {
    const arr = Inputarr
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !isNaN(num));
  
    const result = selectionsort(arr);
    setSortedarr(result);
  };
  ;



  return (
  <div className='place-items-center m-5'>
    <h1 className=' m-2 bg-slate-500'>selection sort</h1>
    <input type="text" value={Inputarr} onChange={handleinput}  />
    <button  className='bg-green-800 rounded-lg ' onClick={handleoutput}>SORT</button>
    <p>Sorted: {Sortedarr.join(", ")}</p>

  </div>
  )
}

export default App
