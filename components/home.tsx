"use client";
import { englishData, turkishhData } from "@/data";
import { selectIsEnglish } from "@/redux/language";
import { useSelector } from "react-redux";
import { GlobeDemo } from "./earthDemo";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Home = () => {
    
    const isEnglish = useSelector(selectIsEnglish);
    const data = isEnglish ? englishData : turkishhData;
    const words = data.home.sentence1.split(" ").map((word, index) => ({
        text: word,
        className: index === data.home.sentence1.split(" ").length - 1&&data.home.sentence1.split(" ").length - 2&&data.home.sentence1.split(" ").length - 1 ? "text-aquaMarina" : "",
      }));

  return (
    <div className="flex justify-center items-center w-[100%] ">
      <div className="flex flex-col">
        <div className="h-screen flex justify-center items-center text-md">
        <TypewriterEffectSmooth words={words} className="  flex "/>

        </div>
        <GlobeDemo />
      </div>
    </div>
  );
};

export default Home;
