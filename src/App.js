import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const[interest , setInterest]=useState(0)
  const[principle , setPrinciple]=useState(0)
  const[rate , setRate]=useState(0)
  const[year , setYear]=useState(0)
  const[isPrinciple,setisPrinciple]=useState(true)
  const[isRate,setisRate]=useState(true)
  const[isYear,setisYear]=useState(true)



  const getvalidate = (e)=>{
    const {name,value}=e.target
    // console.log(name,value);
    // console.log(typeof(value));
    /// console.log(!!value.match(/^[0-9]+5/));
    if(!!value.match(/^[0-9]+$/)){
      if(name==='principle')
      {
        setPrinciple(value)
      setisPrinciple(true)}
      else if(name==='rate'){
        setRate(value)
        setisRate(true)
      }
      else{
        setYear(value)
        setisYear(true)
      }
    }
    else{
    
      if(name==='principle'){setPrinciple(value)
      setisPrinciple(false)}
      else if(name==='rate'){
        setRate(value)
        setisRate(false)
      }
      else{
        setYear(value)
        setisYear(false)

      }
    }
    
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle ||!rate|| !year ){
      alert('please fill the form')
    }
    else{
      // alert('submit')
      setInterest(principle*rate*year/100)

    }
  }
  const handleReset=(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setisPrinciple(true)
    setisRate(true)
    setisYear(0)


  }
  
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
      <h1>SIMPLE INTEREST APP</h1>
      <p>Calculate Simple Interest Daily</p>
      <div className='bg-warning d-flex justify-content-center align-items-center w-100 p-3 rounded flex-column'>
        <h1>$ {' '}{interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <form className='mt-5' onSubmit={handleCalculate}>
      <div className='mb-3'>
        <TextField name='principle' value={principle ||""} onChange={(e)=>getvalidate(e)} className='w-100' id="outlined-basic" label="$ Principle Amount" variant="outlined" />

       </div>
       
      { !isPrinciple &&
        <div>
        <p className='text-danger'>Invalid Input</p>
      </div>}




        <div className='mb-3'>
        <TextField name='rate' value={rate ||""} className='w-100' id="outlined-basic" label="Rate of Interest(p.a) %" variant="outlined"  onChange={(e)=>getvalidate(e)} />

        </div>


        
      { !isRate &&
        <div>
        <p className='text-danger'>Invalid Input</p>
      </div>}



      <div className='mb-3'>
            <TextField name='year' value={year || ""} className='w-100' id="outlined-basic" label="Year (yr)" variant="outlined" onChange={(e) => getvalidate(e)} />
          </div>
          {!isYear && <p className='text-danger'>Invalid Input</p>}
        
        <Stack className='mt-5' direction="row" spacing={2}>
        <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Contained</Button>
          <Button onClick={handleReset} style={{width:'200px',height:'50px'}} variant="outlined">RESET</Button>
        </Stack>
      </form>

        </div>      
    </div>
  );
}

export default App;
