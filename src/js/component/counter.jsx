import { useState, useEffect } from "react";
import React from "react";

//create your first component
const SecondsCounter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(true);

  function startCountdown({ target }) {
    setInput(target.value);
  }

  function submit(e) {
    e.preventDefault();
    setCounter((counter) => (counter = parseInt(input)));
    setInput((input) => (input = ""));
  }

  useEffect(()=>{
	startCounter()
  },[])

  function startCounter() {
    if (status === true) {
      setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else if (status === false){
		clearInterval()
	}
  }


	const stop = () => {
		setStatus(false)
		console.log("no para esta we..."+ status)
	};







  //   useEffect(() => {
  //     var interval = setInterval(() => {
  //       setCounter((counter) => counter + 1);
  //     }, 1000);

  //     return interval;
  //   }, []);

  //   const stop = () => {
  // 	clearInterval(interval)
  // 	console.log("paraaa")
  //   };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div id="counter">
        <i className="fa-regular fa-clock fa-5x "></i>
        <p id="numbers">{counter}</p>
      </div>
      <form onSubmit={submit} id="setCountdown">
        <div>
          <label htmlFor="setCountdown" className="form-label">
            Set a countdown start
          </label>
          <input
            type="text"
            value={input}
            onChange={startCountdown}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Start Countdown
        </button>
      </form>
      <div className="controles d-flex justify-content-center gap-3">
        <button className="btn btn-primary" onClick={stop}>
          stop
        </button>
        <button className="btn btn-primary">Iniciar</button>
        <button className="btn btn-primary" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;
