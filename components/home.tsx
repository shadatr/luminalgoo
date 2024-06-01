"use client";
import { englishData, turkishhData } from "@/data";
import { selectIsEnglish } from "@/redux/language";
import { useSelector } from "react-redux";
import { GlobeDemo } from "./earthDemo";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Reveal from "./Reveal";

const Home = () => {
  const isEnglish = useSelector(selectIsEnglish);
  const data = isEnglish ? englishData : turkishhData;
  const sentence2Words = data.home.sentence2.split(" ");
  const totalWords = sentence2Words.length;

  const words = sentence2Words.map((word, index) => ({
    text: word,
    className:
      index >= totalWords - (isEnglish ? 5 : 4) ? "text-aquaMarina" : "",
  }));
  return (
    <div className="flex justify-center items-center w-[100%] text-secondary" id="home">
      <div className="flex flex-col">
        <BackgroundGradientAnimation className="p-5">
          <Reveal>

          <div className="h-screen flex flex-col justify-center items-center ">
            <div className="lg:text-xlg sm:text-md font-black text-center">{data.home.sentence1}</div>
            <TypewriterEffectSmooth words={words} className=" lg:text-md sm:text-[10px] " />
          </div>
          </Reveal>
        </BackgroundGradientAnimation>
        <GlobeDemo />
      </div>
    </div>
  );
};

export default Home;
