import { useState } from 'react'
import './App.css'

function App() {
const[Number,setNumber]=useState('')
const[Sequence,setSequence]=useState([])

const handleinput=(e)=>{
  setNumber(e.target.value);

}

const genratefib= (num) => {
  let fib = [0, 1];
  let next = fib[1];

  while (next < num) {
    next = fib[fib.length - 1] + fib[fib.length - 2];
    if (next < num) {
      fib.push(next);
    }
  }
  return fib;
};

const handleoutput=()=>{
  const input=parseInt(Number)
  if(!isNaN(input)&&input>=0){
    setNumber(input)
    setSequence( genratefib(input))
  }else{
    setNumber('');
    setSequence([]);
  }
};





  return (
   <div className=' text-center  justify-center w-70 '>
           <h1 className=' text-blue-500 text-3xl p-6 ' >Genrate Fibonacci-series</h1>
           <input className='mx-7 w-90' type="text" value={Number} onChange={handleinput} placeholder='write a number to genrate a fibonacci-series' />
           <button className='bg-green-600' onClick={handleoutput}> Genrate</button>
           <div className=' text-center  justify-center w-70' >
        <h3 className='flex-wrap text-center  justify-center '>Fibonacci Series (less than {Number}):</h3>
        <p>{Sequence.join(", ")}</p>
      </div>

          
    </div>
  )
}

export default App
