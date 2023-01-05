import React from 'react';
import { Input,Button } from "@material-tailwind/react";

import mock from "../public/Phone Mockup.svg"
import Image from "next/image";

function Register(props) {
    return (
        <div className={`w-full  md:my-32 grid grid-flow-row md:grid-flow-col mb-12`}>
            <div className={`hidden md:block w-1/2 ml-4`}>
                <Image src={mock} alt={"mock"}/>
            </div>

            <div className={`md:w-2/3 flex flex-col items-center`}>
                <p className={` font-bold text-4xl text-[#2091F9] `}>Register </p>
                <p className={`mt-10 font-bold text-xl text-[#374754]`}>Enroll for beta testing and latest updates </p>

                <div className={`mt-14 flex flex-col md:flex-row gap-2 my-2`}>
                    <div className={`flex flex-col`}>
                        <Input className={`md:w-70`} size="lg" fullWidth={true} variant="outlined" label="First Name" />
                    </div>
                    <div className={`flex flex-col`}>
                        <Input className={`md:w-70`} size="lg" fullWidth={true} variant="outlined" label="Last Name" />
                    </div>
                </div>

                <div className={`mt-4 flex flex-col md:flex-row gap-2 my-2`}>
                    <div className={`flex flex-col`}>
                        <Input className={`w-70`} size="lg" fullWidth={true} variant="outlined" label="E-mail Address" />
                    </div>
                    <div className={`flex flex-col`}>
                        <Input className={`w-70`} size="lg" fullWidth={true} variant="outlined" label="Phone" />
                    </div>
                </div>

                <Button color="blue" size={"md"}>Enroll</Button>

            </div>
        </div>
    );
}

export default Register;