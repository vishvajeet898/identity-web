import React from 'react';
import blob_card from "../../public/blob_card.svg"
import path_ic from "../../public/path_ic.svg"
import Image from "next/image";

function Card(props) {
    return (
        <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
            <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
            <p className={`font-bold text-black text-4xl mt-8 mb-2`}>Fast</p>
            <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
        </div>
    );
}

export default Card;