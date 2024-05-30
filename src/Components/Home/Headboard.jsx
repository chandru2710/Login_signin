import React from "react";
import Cartphotos from "./Cartphotos";
function Headboard(){
   return(
   <>
   <section className='Main-Background'>
    <section className="Headboard-size">
    <nav className="navbar">
    <div className="Nav-content"><small className="Small">Portfolio</small></div>
    <div className="Nav-content"><small className="Small">info</small></div>
    <div className="Brand-align">
    <h1 className="Brandname">Moonlight</h1>
    <small className="sub-Brand">Photography</small>
    </div>
    <div className="Nav-content"><small className="Small">About me</small></div>
    <div className="Nav-content"><small className="Small">Contect</small></div>
    </nav>
    <Cartphotos></Cartphotos>
    </section>
    </section>
   </>
    )
}

export default Headboard