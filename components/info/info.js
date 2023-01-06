import React from 'react';
import faces from "../../public/faces.svg"
import Image from "next/image";

function Info(props) {
    return (
        <div className={`w-full bg-rings bg-opacity-0 bg- h-full md:bg-cover relative z-0 mt-[1000px] md:mt-[400px]`}>
            <div className={`absolute mx-12  md:mx-24 inset-0 flex flex-col justify-center items-center z-10 gap-10`}>
                <div className={`grid grid-flow-row md:grid-flow-col gap-2`}>
                    <p className={`text-4xl font-bold md:px-8`}>Enter the world of different Identities</p>
                    <p className={`text-xl font-normal`}>We believe in building and providing the best product and services and power of connections.</p>
                </div>
                <Image src={faces} alt={"qwqw"} className={`w-full md:w-[900px]`}/>

            </div>

        </div>
    );
}

export default Info;