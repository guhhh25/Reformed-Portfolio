import Link from "next/link";
import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsTelephoneFill } from "react-icons/bs";

export default function Contact() {
    return (
        <div className="flex flex-col lg:flex-row  items-center justify-around h-[400px] bg-white ">
            <Link href={"https://www.linkedin.com/in/gustavo-henrique-713a48170/"} className="cursor-pointer py-8" target="_blank">
            <BsLinkedin className="h-16 w-12 text-black"/>
            </Link>

            <Link href={"https://github.com/guhhh25"} className="cursor-pointer py-8" target="_blank">
            <BsGithub className="h-16 w-12 text-black"/>
            </Link>

            <Link href={"https://wa.me/5511964269084"} className="cursor-pointer py-8" target="_blank">
            <BsTelephoneFill className="h-16 w-12 text-black"/>
            </Link>
        </div>
    )

}