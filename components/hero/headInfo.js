import React from 'react';
import {Button, ButtonProps} from "@material-tailwind/react";
import Image from "next/image";
import playStoreLogo from "../../public/playstore.png"
import appstoreLogo from "../../public/app-store.png"
import stripDown from "../../public/heroStripDown.svg"
import {ImFacebook2} from "react-icons/im"
import {RiInstagramFill} from "react-icons/ri"
import {BsLinkedin} from "react-icons/bs"


function HeadInfo(props) {
    return (
        <div className={`flex flex-col w-full items-center md:items-start md:w-2/3`}>
            <p className={`text-4xl md:text-6xl font-bold text-black pl-12 md:pl-24 pt-12 md:pt-24`}>Connect with different Identities</p>
            <p className={`text-xl font-normal text-black  pl-12 md:pl-24 py-4`}>Identity is a end to end encryption data sharing platform where users can create and share thier identity and ge connected with like-minded people within a sec by tapping two phones.Identity is a end to end encryption data sharing platform where users can create and share thier identity and ge connected with like-minded people within a sec by tapping two phones.</p>
            <div className={`flex flex-row gap-4`}>
                <Button onClick={() => { window.location.href = "https://drive.google.com/drive/folders/17QORGFFRYa0teoRUhBQPE0sETO-pnUQh?usp=sharing"; } }  className={`bg-black md:w-40 md:ml-24`} variant="filled" size={`sm`} fullWidth={false}>
                    <div className={`flex flex-row gap-2 items-center`}>
                        <Image src={playStoreLogo} alt={"playstore"} className={`w-8 h-8 md:w-8 md:h-8`}/>
                        <div className={`flex flex-col items-start`}>
                            <p>GET IT ON</p>
                            <p>Google Play</p>
                        </div>
                    </div>
                </Button>
                <Button className={`bg-black md:w-40 ml-2`} variant="filled" size={`sm`} fullWidth={false}>
                    <div className={`flex flex-row gap-2`}>
                        <Image src={appstoreLogo} alt={"playstore"} className={`w-8`}/>
                        <div className={`flex flex-col items-start`}>
                            <p>GET IT ON</p>
                            <p> Apple Store</p>
                        </div>
                    </div>
                </Button>
            </div>
            <div className={`flex flex-row md:ml-24 my-14 gap-10`}>
                <button>
                    <ImFacebook2 className={`text-4xl`}/>
                </button>
                <button>
                    <RiInstagramFill className={`text-4xl`}/>
                </button>
                <button>
                    <BsLinkedin className={`text-4xl`}/>
                </button>
            </div>
            <Image src={stripDown} alt={`strip`}/>

        </div>
    );
}

export default HeadInfo;