import React from "react";
import Art from "@/assets/art.png";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F5FFF7] text-white w-full  bg-hero-pattern bg-cover">
      <div className="max-w-7xl w-full flex flex-col justify-end gap-4 items-center pt-[120px] lg:pt-[200px] px-6 md:px-10 m-auto">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl font-VT323">
          Where NFT Agents Come Alive
        </h1>
        <h2 className="font-medium text-lg sm:text-xl text-grey">
          No code. No artist. Just Your Intent.
        </h2>
        <h3 className="font-medium text-sm sm:text-base text-grey md:w-3/4">
          Visualaize is the world’s first Meta Mint Studio, a specialist
          launchpad to Create, Build, Mint, and Trade NFTs with AI-powered
          swarms. Craft collections, assemble NFT agents, and launch AAA NFTs
          with zero friction.
        </h3>
        <h2 className="text-xl  font-medium text-transparent bg-text-gradient bg-clip-text">
          Skip the tech, skip the brushes. Just bring your Intent.
        </h2>
        <div className="flex flex-col sm:flex-row  gap-4 mt-4">
          <PrimaryButton
            text="Start Visual(AI)zing"
            showIcon={true}
            onClick={() => navigate("/collection")}
          />
          <PrimaryButton
            text="Launch NFT Agent"
            showIcon={true}
            classname="bg-[#D1D5D8] hover:bg-[#ffffff] text-primary-100"
            iconClassName="bg-primary_gradient !text-[white]"
            onClick={() => navigate("/deploy")}
          />
        </div>
        <img src={Art} />
      </div>
    </section>
  );
}
