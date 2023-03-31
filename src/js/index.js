//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/counter.jsx";
import SetCountdown from "./component/setCountdown.jsx";

//render your react application

var counter = 0


ReactDOM.render(
    <React.Fragment>
        <SecondsCounter id="counter" seconds={counter}/>
        <SetCountdown/>
    </React.Fragment>

,document.querySelector("#app"));







