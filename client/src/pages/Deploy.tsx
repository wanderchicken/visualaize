import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import AftermathImage from "@/assets/aftermath.svg";
import TimeLineImage from "@/assets/Timeline.svg";
import { useNavigate } from "react-router-dom";

const Deploy = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-hero-pattern bg-cover h-[500px] min-h-[500px]">
        <div className="w-full flex flex-col justify-center gap-4 items-center px-4 md:px-10 text-white max-w-7xl h-full m-auto text-center pt-14 lg:pt-[90px]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl  font-VT323">
            Agent Hub (Beta)
          </h1>
          <h3 className="font-medium text-x sm:text-base text-grey w-full sm:w-3/4 mx-auto">
            Step into the future of NFT creation with Visualaize's Agent Hub.
            Here, collection leaders can explore, launch, and fully customize
            their NFT agents to bring their creative visions to life.
          </h3>
          <PrimaryButton
            text="Build your NFT Agent"
            classname="mt-4"
            showIcon={true}
            onClick={() => navigate("/nft-cofiguration")}
          />
        </div>
      </section>

      <section className="py-10 md:py-20 px-4 md:px-12 bg-[#170D21] text-left flex flex-col gap-8 md:gap-16">
        <h1 className="font-VT323 font-bold text-2xl md:text-3xl  lg:text-5xl text-center">
          Short-Term Roadmap
        </h1>
        <div className="max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="w-full">
            <img src={AftermathImage} alt="Roadmap" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={TimeLineImage} alt="Roadmap" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Deploy;
