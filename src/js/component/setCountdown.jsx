import React from "react";

//create your first component
const SetCountdown = (props) => {

    function startCountdown(e) {
        props.seconds = e
    }

	return (
        <form id="setCountdown">
            <div>
                <label htmlFor="setCountdown" className="form-label">Set a countdown start</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button onClick={startCountdown} type="submit" className="btn btn-primary">Start Countdown</button>
        </form>
	);
};


export default SetCountdown;