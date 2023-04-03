import { useState, useEffect} from "react";
import React from "react";


//create your first component
const SecondsCounter = (props) => {

	const [counter, setCounter] = useState(0);
	const [input, setInput] = useState('')

	function startCountdown({target}) {
		setInput(target.value)
    }

	function submit(e){
		e.preventDefault()
		console.log(input)
		setCounter((counter)=> counter = input)

	}

	useEffect(() => {
	  const interval = setInterval(() => {
		setCounter((counter) => counter + 1);
	  }, 1000);
  
	  return interval

	}, []);

	return (
		<div>
			<div id="counter" >
				<i className="fa-regular fa-clock fa-5x "></i>
				<p id="numbers">{counter}</p>
			</div>
			<form onSubmit={submit} id="setCountdown">
				<div>
					<label htmlFor="setCountdown" className="form-label">Set a countdown start</label>
					<input type="text" value={input} onChange={startCountdown} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<button type="submit" className="btn btn-primary">Start Countdown</button>
			</form>
		</div>
	);
}



export default SecondsCounter;
