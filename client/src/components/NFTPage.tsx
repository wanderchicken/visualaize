import React, { useState } from "react";
import { ChevronLeft, ChevronDown, ArrowRight } from "lucide-react";

import PrimaryButton from "./PrimaryButton";
import NFTSidebar from "./NFTSidebar";

// Define the type for the Slider component props
interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void; // Explicitly define the onChange type
}

const NFTConfig = () => {
  const [rarityValues, setRarityValues] = useState({
    common: 50,
    rare: 30,
    veryRare: 20,
  });

  // Slider component with explicitly defined prop types
  const Slider = ({ label, value, onChange }: SliderProps) => (
    <div className="flex flex-col w-full">
      <span className="text-gray-300 mb-1 text-md font-medium">{label}</span>
      <div className="relative w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: " #DA4F79 ",
            background: `linear-gradient(to right, #C1477A ${value}%, #A13B7A ${
              value + 1
            }%, #DA4F79 ${value + 2}%, #ffffff ${value + 2}%)`,
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-hero-pattern max-h-full  pt-20 text-white bg-cover bg-no-repeat">
      {/* Header */}
      <div
        className="  p-4  "
        style={{
          backdropFilter: "blur(29.14373207092285px)",
          border: "1.08px solid #FFFFFF1A",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.072) 3.25%, rgba(255, 255, 255, 0.0288) 96.75%)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          {/* Centered Title */}
          <h1 className="text-xl font-semibold text-center flex-1">
            NFT Collection Configuration
          </h1>

          {/* Spacer to maintain alignment */}
          <div className="w-12" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row sticky">
        {/* Sidebar */}
        {/* <NFTSidebar /> */}

        {/* Main Content */}
        <div className="flex-1    p-4 md:p-8 ">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold mb-8">NFT</h2>

            <div className="grid gap-8">
              {/* Description */}
              <div>
                <p className="text-gray-300 mb-2 font-semibold text-lg">
                  NFT characters in the collection can be:
                </p>
                <textarea
                  className="w-full h-32 bg-transparent rounded-lg p-4 text-gray-300 hover:border-primary-100
                           border border-gray-700 focus:border-primary-100 focus:ring-1
                           focus:ring-primary-100 focus:outline-none"
                  placeholder="Enter the NFT Description..."
                />
              </div>

              {/* Blockchain Selection */}
              <div>
                <p className="text-gray-300 mb-2 font-semibold text-lg">
                  Choose Chain for NFT Launch
                </p>
                <button
                  className="w-full flex items-center justify-between bg-transparent hover:border-primary-100
                                 text-gray-400 p-4 rounded-lg border border-gray-700"
                >
                  <span>Select Blockchain</span>
                  <ChevronDown className="w-5 h-5 text-primary-200" />
                </button>
              </div>

              {/* Collection Size */}
              <div>
                <p className="text-gray-300 mb-2 font-semibold text-lg">
                  Choose Size of Collection
                </p>
                <input
                  type="text"
                  className="w-full bg-transparent rounded-lg p-4 text-gray-300 hover:border-primary-100
                           border border-gray-700 focus:border-primary-100
                           focus:ring-1 focus:ring-primary-100 focus:outline-none"
                  placeholder="Enter collection size"
                />
              </div>

              {/* Rarity Split */}
              <div>
                <p className="text-gray-300 mb-4 font-semibold text-lg">
                  Rarity Split
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Slider
                    label="Common"
                    value={rarityValues.common}
                    onChange={(value) =>
                      setRarityValues({ ...rarityValues, common: value })
                    }
                  />
                  <Slider
                    label="Rare"
                    value={rarityValues.rare}
                    onChange={(value) =>
                      setRarityValues({ ...rarityValues, rare: value })
                    }
                  />
                  <Slider
                    label="Very Rare"
                    value={rarityValues.veryRare}
                    onChange={(value) =>
                      setRarityValues({ ...rarityValues, veryRare: value })
                    }
                  />
                </div>
              </div>

              {/* Background */}
              <div>
                <p className="text-gray-300 mb-2 font-semibold text-lg">
                  Background
                </p>
                <button
                  className="w-full flex items-center justify-between bg-transparent hover:border-primary-100
                                 text-gray-400 p-4 rounded-lg border border-gray-700"
                >
                  <span>Select Background Style</span>
                  <ChevronDown className="w-5 h-5 text-primary-200" />
                </button>
              </div>
            </div>

            {/* Launch Button */}
            <div className="flex justify-end  py-10  ">
              <PrimaryButton text="Launch NFT Collection" showIcon={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTConfig;
