import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecoundsCounter  from "./secoundscounter";

//create your first component
const Home = () => {
	
	const [timer, setTimer] = useState(0)

	useEffect(()=>{
        
        setTimeout(()=>{
			setTimer(value=> value+1)
		}, 1000)

	},[timer])
	
	return (
		<div className="text-center">
		<section className="counter-holder">

		<SecoundsCounter number={<span className="fa-solid fa-clock"></span>}/>
        <SecoundsCounter number={Math.floor(timer/100000)%10}/>
		<SecoundsCounter number={Math.floor(timer/10000)%10}/>
		<SecoundsCounter number={Math.floor(timer/1000)%10}/>
		<SecoundsCounter number={Math.floor(timer/100)%10}/>
		<SecoundsCounter number={Math.floor(timer/10)%10}/>
		<SecoundsCounter number={Math.floor(timer%10)}/>

		</section>
			
		</div>
	);
};

export default Home;