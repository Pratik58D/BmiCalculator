import './App.css';
import React,{useState} from 'react';
import './index.css'



function App() {
const [weight,setWeight]  = useState(0);
const [height,setHeight]  = useState(0);
const [bmi,setBmi]  = useState('');
const [message,setMessage]  = useState("");


//logic of the app
let calcBmi = (e)=>{

//prevent submitting to the server
  e.preventDefault()

  if (weight === 0 || height === 0){
    alert("Please wnter a valid weight and height")
  }
  else{
  let bmi = (weight/(height*height)*703)
  setBmi(bmi.toFixed(1))
   if(bmi <25){
    setMessage("you are underweight");
   }
   else if (bmi>=25 && bmi <30){
    setMessage("you are healthy")
   }
    else{
      setMessage("you are overweight")

    }
   
  }

}

let reload = ()=>{
  window.location.reload()
}

  return (
    <div className="App">
      <div className="container">
        <h2>Bmi Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label > Weight (ibs)</label>
            <input type="text" placeholder='"enter weight value' value={weight} onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div>
            <label > Height (inch)</label>
            <input type="text" placeholder='"Enter height value' value={height}  onChange={(e)=> setHeight(e.target.value)}/>
          </div>

          <div>
            <button className="btn" type='submit'>Submit</button>
            <button className="btn btn-outline" type='submit' onClick={reload}>Submit</button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>

    </div>
  );
}

export default App;
