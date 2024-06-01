"use client";
import React from "react";
import { englishData, turkishhData } from "@/data";
import { selectIsEnglish } from "@/redux/language";
import { useSelector } from "react-redux";
import { BackgroundGradient } from "./ui/background-gradient";
import Reveal from "./Reveal";

const Services = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const data = isEnglish ? englishData : turkishhData;

  return (
    <div
      id="services"
      className="lg:p-40 sm:p-10 lg:text-sm sm:text-xsm items-ceter justify-center gap-10 flex flex-col"
    >
      <Reveal className="text-aquaMarina  lg:text-lg font-black sm:text-md">
        •Services•
      </Reveal>
      <Reveal >
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 ">

        {data.services.map((item, index) => (
          <BackgroundGradient
            key={index}
            className=" bg-secondary rounded-[22px] w-full h-[320px] lg:p-10 sm:p-5 flex items-center justify-center text-blue font-medium text-center"
          >
            <div>{item}</div>
          </BackgroundGradient>
        ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Services;
