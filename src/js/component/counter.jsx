import { useState, useEffect} from "react";
import React from "react";


//create your first component
const SecondsCounter = (props) => {

	const [counter, setCounter] = useState(0);

	useEffect(() => {
	  const interval = setInterval(() => {
		setCounter((counter) => counter + 1);
	  }, 1000);
  
	  return () => {
		clearInterval(interval);
	  };
	}, []);

	return (

		<div id="counter" >
			<i className="fa-regular fa-clock fa-5x "></i>
			<p id="numbers">{counter}</p>
		</div>
	);

}



// const Number = () => {

// 	setInterval(() => {
// 		counter++
// 	}, 1000)
// 	return counter++
// }


export default SecondsCounter;
