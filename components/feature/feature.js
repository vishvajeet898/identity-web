import React from 'react';
import Image from "next/image";
import blob from "../../public/Blobs.svg"
import leftBand from "../../public/blob_feature.svg"
import Card from "./card";

function Feature(props) {


    return (
        <div className={`w-full md:bg-hero h-full  relative z-0`}>
            <div className="hidden md:flex absolute inset-0 flex justify-center items-center z-10 gap-10">
                <Card/>
                <div className={`mr-[4px] flex flex-col gap-14`}>
                    <Card/>
                    <Card/>
                </div>
                <Card/>
            </div>

            <p className={`text-4xl font-bold text-black pl-12 md:pl-24 pt-12 md:pt-24`}>Features</p>
            <div className=" md:hidden absolute inset-0 flex flex-col justify-center items-center z-10 gap-10 mt-[900px]">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export default Feature;