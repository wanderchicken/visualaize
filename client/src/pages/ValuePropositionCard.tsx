import React from "react";
import EmpowerCoCreators from "../Icons/Group (1).png";
import MonetizeYourCreativity from "../Icons/Group (2).png";
import SimplifyComplexProcesses from "../Icons/Group (3).png";
import NoCodeNoArtistsNeeded from "../Icons/Vector (1).png";
import EvolvingAIPower from "../Icons/Vector (2).png";

const ValueProposition = () => {
  const propositions = [
    {
      image: EmpowerCoCreators,
      title: "Empower Co-Creators",
      description:
        "Inspire others to contribute and bring your vision to life in maintaining creative direction.",
    },
    {
      image: MonetizeYourCreativity,
      title: "Monetize Your Creativity",
      description:
        "Enjoy the flexibility to control pricing models and collection size.",
    },
    {
      image: SimplifyComplexProcesses,

      title: "Simplify Complex Processes",
      description:
        "Visualize's tools streamline everything from creation validation to on-chain minting and listing.",
    },
    {
      image: NoCodeNoArtistsNeeded,

      title: "No-Code, No Artists Needed",
      description:
        "Skip the complexity of traditional NFT creation processes and intuitive platform and AI agents handle it all.",
    },
    {
      image: EvolvingAIPower,

      title: "Evolving AI Power",
      description:
        "Tap into the dynamic potential of our scalable AI agent swarm, designed to adapt and expand with our creative meta-offering.",
    },
  ];

  return (
    <div className="bg-[#170D21] py-8 md:py-20 px-5 sm:px-10 ">
      <div className="max-w-6xl  mx-auto">
        <h1 className="text-white text-3xl sm:text-4xl font-VT323 md:text-5xl lg:text-6xl whitespace-nowrap font-bold text-center mb-4">
          Value Proposition
        </h1>
        <div className="flex  justify-center">
          {" "}
          <p className="text-gray-300 max-w-3xl  text-lg  sm:leading-10  text-center mb-8">
            As a Collection Leader, you're not just minting NFTs, you're
            building a community and shaping a narrative. With Visualize, you
            can
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-white    transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect rounded-2xl p-6 "
            >
              <div className="text-4xl mb-4 ">
                <img className="h-10 w-10" src={prop.image} />
              </div>
              <h3 className="text-black text-lg  font-bold mb-2">
                {prop.title}
              </h3>
              <p className="text-black  text-base	">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
