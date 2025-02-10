import React from "react";
import { useNavigate } from "react-router-dom";

interface AgentCardProps {
  traits: string[]; // Array of strings
  spamCount: number;
  cost: string;
  pricingModel: string;
  totalIntents: number;
  mintedNFTs: string;
  collectionSize: number;
  name: string;
  image: string;
  index: number;
}

function AgentCard({
  traits,
  spamCount,
  cost,
  pricingModel,
  totalIntents,
  mintedNFTs,
  collectionSize,
  name,
  image,
  index,
}: AgentCardProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`rounded-lg w-full cursor-pointer ${
          index === 0 ? "hover:scale-105 hover:animate-auraEffect" : ""
        }`}
        style={{
          backdropFilter: "blur(29.14373207092285px)",
          border: "1.08px solid #FFFFFF1A",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.072) 3.25%, rgba(255, 255, 255, 0.0288) 96.75%)",
        }}
        onClick={() => {
          if (index === 0) navigate("/collection/1");
        }}
      >
        {/* Header Section */}
        <div className="flex items-center px-1 sm:px-10 mt-1 sm:mt-5 gap-4">
          <div className="flex items-center  gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary-100 rounded-full overflow-hidden">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full  object-cover"
              />
            </div>
            <div className="">
              {" "}
              <div className="flex  items-center gap-2 ">
                <div className="flex items-center  ">
                  <h2 className="text-white font-semibold text-2xl">{name}</h2>
                </div>
                <p className="text-gray-400 text-sm pt-1">
                  ({mintedNFTs}/{collectionSize} Minted)
                </p>
              </div>
              <div className="mt-1">
                <ul className="list-disc list-inside flex text-gray-300 text-sm ">
                  {traits.map((trait, index) => (
                    <p className=" px-1 font-normal	" key={index}>
                      {trait}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="sm:px-10  my-3  px-5 ">
          <div className="flex justify-between   text-xs   sm:text-base  text-center  py-4 border-t-2   ">
            <div className="text-white sm:w-1/3  ">
              <span className="font-semibold	">${cost}</span> {pricingModel}
            </div>
            <div className="text-white sm:w-1/3 border-x-2">
              <span className="font-semibold	">{spamCount}</span> Agent Swarms
            </div>
            <div className="text-white sm:w-1/3 ">
              <span className="font-semibold	">{totalIntents}</span> Intents
              submitted
            </div>
          </div>
        </div>

        {/* Traits Section */}
      </div>
      {index == 0 && (
        <div className="flex items-center gap-10 py-10">
          <hr className="border flex-1 " />
          <div className="text-[#9CA3AF] ">UPCOMING AGENTS</div>
          <hr className="border flex-1" />
        </div>
      )}
    </>
  );
}

export default AgentCard;
