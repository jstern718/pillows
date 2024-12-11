/* eslint-disable react/prop-types */

import catHeroWide from "../assets/hero6.jpeg"

import { affiliateText } from '../../utils-text.jsx';
let affiliateWording = affiliateText();


function Hero() {

  return (
    <>
       <div className="hero-div">
            <p className = "affiliate-desktop text-sm">{affiliateWording}</p>
            <img src={catHeroWide} alt="Pillowsmith banner with a purple background. In front of the background is an illustrated woman sleeping on a pillow and a real cat sleeping on a different people (all in black & white). The text reads 'Pillowsith: Sleep like a kitten'" className="hero-img row"/>
        </div>
    </>
  )
}

export default Hero;
