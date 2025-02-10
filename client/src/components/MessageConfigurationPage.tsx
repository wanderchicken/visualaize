import React from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

import PrimaryButton from "./PrimaryButton";
import NFTSidebar from "./NFTSidebar";

const MessageConfig = () => {
  return (
    <div className="  bg-hero-pattern pt-20 text-white">
      {/* Header */}
      <div
        className="border-b border-gray-800 p-4"
        style={{
          backdropFilter: "blur(29.14373207092285px)",
          border: "1.08px solid #FFFFFF1A",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.072) 3.25%, rgba(255, 255, 255, 0.0288) 96.75%)",
        }}
      >
        <div className="flex items-center justify-between ">
          {/* Back Button */}
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          {/* Centered Title */}
          <h1 className="text-lg md:text-xl font-semibold text-center flex-1">
            NFT Collection Configuration
          </h1>

          {/* Spacer to maintain alignment */}
          <div className="w-12" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 min-h-screen ">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-8">Message</h2>

            <div className="space-y-8">
              {/* Uniqueness Dropdown */}
              <div>
                <p className="text-gray-300 mb-2 font-semibold text-base sm:text-lg">
                  Uniqueness of each image
                </p>
                <button
                  className="w-full flex items-center justify-between bg-transparent hover:border-primary-100
                    text-gray-400 p-3 sm:p-4 rounded-lg border border-gray-700"
                >
                  <span>Select Uniqueness of each image</span>
                  <ChevronDown className="w-5 h-5 text-primary-200" />
                </button>
              </div>

              {/* Pricing Fields */}
              <div>
                <p className="text-gray-300 mb-2 font-semibold text-base sm:text-lg">
                  Pricing Per Attempt
                </p>
                <input
                  type="text"
                  className="w-full bg-transparent rounded-lg p-3 sm:p-4 text-gray-300 hover:border-primary-100
                    border border-gray-700 focus:border-primary-100
                    focus:ring-1 focus:ring-primary-100 focus:outline-none"
                  placeholder="Enter pricing per attempt ..."
                />
              </div>

              <div>
                <p className="text-gray-300 mb-2 font-semibold text-base sm:text-lg">
                  Message Prompt Limit
                </p>
                <input
                  type="text"
                  className="w-full bg-transparent rounded-lg p-3 sm:p-4 text-gray-300 hover:border-primary-100
                    border border-gray-700 focus:border-primary-100
                    focus:ring-1 focus:ring-primary-100 focus:outline-none"
                  placeholder="Enter limit of message prompt ..."
                />
              </div>

              <div>
                <p className="text-gray-300 mb-2 font-semibold text-base sm:text-lg">
                  Cost Per Message
                </p>
                <input
                  type="text"
                  className="w-full bg-transparent rounded-lg p-3 sm:p-4 text-gray-300 hover:border-primary-100
                    border border-gray-700 focus:border-primary-100
                    focus:ring-1 focus:ring-primary-100 focus:outline-none"
                  placeholder="$"
                />
              </div>

              {/* Launch Button */}
              <div className="flex justify-end mt-8">
                <PrimaryButton text="Launch NFT Collection" showIcon={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageConfig;
