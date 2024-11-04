import { useState } from 'react'


function App() {
  const[Number,setNumber]=useState('')
  const[Isprime,setIsprime]=useState(null)

  const handleinput=(e)=>{
    setNumber(e.target.value);
    setIsprime(null);
  };
  const checkprime=(num)=>{
    if(num<2){
      return false;}
    for(let i=2;i<=Math.sqrt(num);i++){
      if(num%i===0){
        return false;
      }

    }return true;
  };

  const handleoutput=(e)=>{
    e.preventDefault();
    const num=parseInt(Number);
    if(!isNaN(num)){
      setIsprime(checkprime(num));
    }else{
      setIsprime(null);
     
      
    }

  };
  


  

  return (
    <div className='mx-auto w-1/2 border-r-2 p-4'>
      <h1 className='flex text-center justify-center w-full bg-blue-500 '>check prime number</h1>
    
      <input className='flex text-center justify-center bg-slate-50 w-full' type="text" value={Number} onChange={handleinput} placeholder='enter a number'  />
      <button className='flex text-center justify-center bg-red-800 w-full' onClick={handleoutput} >check</button>
    
      <div className='flex text-center justify-center bg-gray-300 w-full' > 
      {Isprime===null&& "enter a valid input"}
    
        {Isprime!==null &&
       (<h2> {Isprime? `${Number} is prime number`:`${Number} is not a prime number`}</h2> )}
      </div>


    </div>
       

  
    
    
  )
}

export default App
