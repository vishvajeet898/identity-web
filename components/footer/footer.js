import React from 'react';
import {Button} from "@material-tailwind/react";
import Image from "next/image";
import playStoreLogo from "../../public/playstore.png";
import appstoreLogo from "../../public/app-store.png";
import lastSc from "../../public/last.svg";


function Footer(props) {
    return (
        <div className={`grid grid-flow-row md:grid-flow-col bg-[#2EC5CE] w-full`}>
            <div className={`flex flex-col mx-10 md:ml-40 mt-24`}>
                <p className={`text-4xl text-black font-bold`}>Identity</p>
                <p className={`text-lg text-black font-normal md:w-2/3 mt-2`}>Download the app to connect with millions of people lorem ipsiounkdbbd wdkkdbkbdqwjdvbkq dkqBDKbwd qKWDBKBWD, WDKBQD</p>
                <p className={`text-lg text-black font-normal mt-10`}>Get the App</p>
                <div className={`flex flex-row gap-4`}>
                    <Button className={`bg-black md:w-40`} variant="filled" size={`sm`} fullWidth={false}>
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
                                <p>Google Play</p>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>


            <Image src={lastSc} alt={`lastsc`} className={`hidden md:block`}/>

        </div>
    );
}

export default Footer;