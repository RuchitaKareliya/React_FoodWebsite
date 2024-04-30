import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'

import about from '../Assets/about.png'

const Hero=()=>{
    return(
        <div className='hero'>
            <div className="hero-left">
                <h2>
                    Hello Foodies
                </h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Latest</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>Food Items & Cold-Drinks</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Food</div>
                    <img src={arrow_icon} alt=""/>
                </div>

            </div>
            <div className="hero-right">
                <img src={about} alt="" style={{height: "500px"}}/>
            
            </div>


        </div>
    )
}
export default Hero