"use client";
import { englishData, turkishhData } from "@/data";
import { selectIsEnglish } from "@/redux/language";
import { useSelector } from "react-redux";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Reveal from "./Reveal";

const About = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const data = isEnglish ? englishData : turkishhData;
  return (
    <div className="h-screen w-full  flex flex-col gap-10 lg:px-40 sm:p-5" id="about-us">
      <Reveal className="text-aquaMarina  lg:text-lg font-black sm:text-md">
        •About•
      </Reveal>
      <Reveal>

      <div className="flex sm:flex-col lg:flex-row items-center justify-center  lg:gap-10 sm:gap-5">
        <span className="lg:text-lg sm:text-md font-black">
          {data.about.sentence1}
        </span>
        <BackgroundGradient className="rounded-[22px] lg:w-[500px] sm:w-[300px] p-10 flex flex-col text-md text-blue font-medium justify-center items-center text-center gap-5  ">
          <Image
            src={"/return-goods.png"}
            alt={""}
            width={150}
            height={150}
            className="lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px]"
          />
          <div className="lg:text-sm sm:text-xsm">{data.about.sentence2}</div>
        </BackgroundGradient>
      </div>
      </Reveal>
    </div>
  );
};

export default About;
