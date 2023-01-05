import React from 'react';
import Image from "next/image";
import Logo from "../../public/logo.png"
import Navbar from "./navbar";
import HeadInfo from "./headInfo";
import heroSc from "../../public/heroSc.svg"
import heroScm from "../../public/hero_small.svg"

function Hero(props) {
    return (
       <div className={`flex flex-col w-full md:grid md:grid-flow-col`}>
          <div>
              <Navbar className={``}/>
              <div>
                  <HeadInfo/>
              </div>
          </div>
           <Image src={heroSc} alt={`screenshot`} className={`hidden md:block`}/>
           <Image src={heroScm} alt={`screenshot`} className={` md:hidden`}/>
       </div>
    );
}

export default Hero;