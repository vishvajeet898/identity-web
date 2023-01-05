import React from 'react';
import Image from "next/image";
import Logo from "../../public/logo.png";

function Navbar(props) {
    return (
        <div className={``}>
            <div className={`items-center flex flex-row w-full md:w-2/3 gap-10 md:gap-7 my-2 mx-3`}>

                <div className={`flex flex-row gap-1`}>
                    <Image className={`w-6 h-6`} src={Logo} alt={"logo"}/>
                    <p className={`text-lg md:text-2xl text-black font-extrabold`}>Identity</p>
                </div>
                <p className={`text-lg md:text-xl text-black font-medium`}>About</p>
                <p className={`text-lg md:text-xl text-black font-medium`}>Features</p>
                <p className={`text-lg md:text-xl text-black font-medium`}>Beta Enrollment</p>
            </div>
        </div>

    );
}

export default Navbar;