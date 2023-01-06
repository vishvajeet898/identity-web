import React from 'react';
import Image from "next/image";
import blob from "../../public/Blobs.svg"
import leftBand from "../../public/blob_feature.svg"
import Card from "./card";
import blob_card from "../../public/blob_card.svg";

function Feature(props) {


    return (
        <div className={`w-full md:bg-hero h-full  relative z-0`}>
            <div className="hidden md:flex absolute inset-0 flex justify-center items-center z-10 gap-10">
                <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                    <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                    <p className={`font-bold text-black text-4xl text-center mt-8 mb-2`}>Many cards one solutions</p>
                    <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>Forgetting to carry the physical cards, hassle to carry many visiting cards to connect.</p>
                </div>
                <div className={`mr-[4px] flex flex-col gap-14`}>
                    <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                        <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                        <p className={`font-bold text-black text-4xl text-center mt-8 mb-2`}>NFC to share data</p>
                        <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>Using NFC to share data and get connected with like minded people.</p>
                    </div>
                    <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                        <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                        <p className={`font-bold text-black text-4xl text-center mt-8 mb-2`}>No need of carrying cards</p>
                        <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>No need of carrying cards after using identity app.</p>
                    </div>
                </div>
                <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                    <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                    <p className={`font-bold text-black text-4xl mt-8 mb-2`}>Data privacy</p>
                    <p className={`px-6 text-center pb-4 mt-4 mb-4 text-center text-black text-lg font-medium`}>Data privacy with strong data protection subscription system.</p>
                </div>
            </div>

            <p className={`text-4xl font-bold text-black pl-12 md:pl-24 pt-12 md:pt-24`}>Features</p>
            <div className=" md:hidden absolute inset-0 flex flex-col justify-center items-center z-10 gap-10 mt-[900px]">
                <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                    <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                    <p className={`font-bold text-black text-4xl text-center mt-8 mb-2`}>Many cards one solutions</p>
                    <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>Forgetting to carry the physical cards, hassle to carry many visiting cards to connect.</p>
                </div>
                <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                    <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                    <p className={`font-bold text-black text-4xl text-center mt-8 mb-2`}>NFC to share data</p>
                    <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>Using NFC to share data and get connected with like minded people.</p>
                </div>
                <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                    <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                    <p className={`font-bold text-black text-4xl text-center mt-8 mb-2`}>No need of carrying cards</p>
                    <p className={`px-6 text-center pb-4 mt-4 mb-4 text-black text-lg font-medium`}>No need of carrying cards after using identity app.</p>
                </div>
                <div className={`shadow-2xl bg-white w-64 h-96 flex flex-col rounded-3xl items-center`}>
                    <Image  src={blob_card} alt={"blob"} className={`mx-4 my-6`}/>
                    <p className={`font-bold text-black text-4xl mt-8 mb-2`}>Data privacy</p>
                    <p className={`px-6 text-center pb-4 mt-4 mb-4 text-center text-black text-lg font-medium`}>Data privacy with strong data protection subscription system.</p>
                </div>
            </div>
        </div>
    );
}

export default Feature;