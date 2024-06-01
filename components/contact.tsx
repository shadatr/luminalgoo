"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import { englishData, turkishhData } from "@/data";
import { selectIsEnglish } from "@/redux/language";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const data = isEnglish ? englishData : turkishhData;
  return (
    <div className="w-[100%] m-0  h-[26rem] overflow-hidden " id="contact-us">
      <Vortex
        backgroundColor=""
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full gap-10"
      >
        <div className="lg:text-lg font-bold lg:w-[900px] text-center">
          {data.contact}
        </div>
        <div className="flex gap-10">
          <Link
            href={
              "https://www.instagram.com/luminalgoo?igsh=MW1hcWszemltZTQ4dA=="
            }
          >
            <Image src={"/instagram.png"} alt={""} width={40} height={40} />
          </Link>
          <Link href={"https://www.linkedin.com/company/luminalgoo/"}>
            <Image src={"/linkedin.png"} alt={""} width={40} height={40} />
          </Link>
        </div>
      </Vortex>
      <div className="w-[100%] m-0  h-[26rem]"></div>
    </div>
  );
};

export default Contact;
