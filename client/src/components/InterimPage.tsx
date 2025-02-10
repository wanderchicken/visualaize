import React from "react";
import AgentCard from "@/pages/AgentCard";
import AiImage from "../Images/aiImage.jpg";
import CatSkylineImage from "@/assets/Cat_syline.jpeg";
import FlyingJohnDoeImage from "@/assets/Flying_john_doe.jpeg";
import HeroHorseImage from "@/assets/Hero_horse.jpeg";
import TimeTravellingImage from "@/assets/Time_travelling.jpeg";

const marketData = [
  {
    image: AiImage,
    id: 1,
    name: "Genesis",
    collectionSize: 999,
    mintedNFTs: "05",
    totalIntents: 15,
    pricingModel: "Per intent",
    cost: "10",
    spamCount: 6,
    traits: ["PFPs", "Base Portrait", "Solo portrait", "Non Gaiter"],
  },
  {
    id: 6,
    image: CatSkylineImage,
    name: "Cat Skyline",
    collectionSize: 234,
    mintedNFTs: "05",
    totalIntents: 15,
    pricingModel: "Per intent",
    cost: "10",
    spamCount: 6,
    traits: ["PFPs", "Base Portrait", "Solo portrait", "Non Gaiter"],
  },
  {
    id: 6,
    image: FlyingJohnDoeImage,
    name: "Flying John Doe",
    collectionSize: 123,
    mintedNFTs: "05",
    totalIntents: 15,
    pricingModel: "Per intent",
    cost: "$10",
    spamCount: 6,
    traits: ["PFPs", "Base Portrait", "Solo portrait", "Non Gaiter"],
  },
  {
    id: 6,
    image: HeroHorseImage,
    name: "Hero horse",
    collectionSize: 660,
    mintedNFTs: "05",
    totalIntents: 15,
    pricingModel: "Per intent",
    cost: "10",
    spamCount: 6,
    traits: ["PFPs", "Base Portrait", "Solo portrait", "Non Gaiter"],
  },
  {
    id: 6,
    image: TimeTravellingImage,
    name: "Time Travelling",
    collectionSize: 900,
    mintedNFTs: "05",
    totalIntents: 15,
    pricingModel: "Per intent",
    cost: "10",
    spamCount: 6,
    traits: ["PFPs", "Base Portrait", "Solo portrait", "Non Gaiter"],
  },
  // Additional entries...
];

const NFTAgentsMarket = () => {
  return (
    <div
      className="min-h-screen bg-hero-pattern pt-20 md:pt-[150px] text-white bg-no-repeat"
      style={{ backgroundSize: "100% 100%" }}
    >
      {/* Main Content */}
      <div className=" mx-auto px-4 flex flex-col items-center py-8">
        <h1 className="text-2xl font-VT323 md:text-3xl lg:text-5xl text-center font-bold mb-8">
          NFT Agents Market
        </h1>

        <div className="flex flex-col justify-center w-full gap-3 sm:gap-5 max-w-5xl">
          {marketData.map((entry, index) => (
            <div
              key={entry.id || index} // Ensure unique key
              className={`transition-all w-full duration-300 ${
                index === 0 ? "opacity-100" : "opacity-50 blur-sm  "
              }`}
            >
              <AgentCard
                index={index}
                name={entry.name}
                image={entry?.image}
                collectionSize={entry.collectionSize}
                mintedNFTs={entry.mintedNFTs}
                totalIntents={entry.totalIntents}
                pricingModel={entry.pricingModel}
                cost={entry.cost}
                spamCount={entry.spamCount}
                traits={entry.traits} // Pass the traits array
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTAgentsMarket;
