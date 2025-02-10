import React, { useEffect } from "react";
import { VisualaizeFeatures } from "@/lib/mockData";
import CrouselShowcase from "@/components/CrouselShowcase";
import workImage from "@/assets/workImage.svg";
import HeroSection from "@/components/HeroSecetion";
import PrimaryButton from "@/components/PrimaryButton";
import BenefitIcon from "@/assets/benefitsIcon.svg";
import { useNavigate } from "react-router-dom";
import { fetchResultByTxnId } from "@/fetcher";

interface Props {
  account: string | null;
}

const benefits1 = [
  "Generative AI Precision",
  "SixSense architecture",
  "Autonomous Coordination",
  "Supports ERC-721 and ERC-1155 standards",
  "Decentralized Storage",
  "Hyper-Synchronicity",
  "Customizable launch parameters and guardrails",
];
const benefits2 = [
  "NFT Intents Market",
  "Multimodal AI Integration",
  "On-Chain Wallet Integration",
  "Hyper-Personalised NFTs",
  "Creative automation",
  "Cost-Efficient & Fast",
  "Real-Time Collaboration with AI",
  "Scalable NFT Collections",
];

const MarqueeGroup = ({ items, direction }: any) => {
  const itemsForScroll = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden md:py-4">
      <div
        className={`flex items-center  gap-4 md:gap-16 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {itemsForScroll.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect"
          >
            <img src={BenefitIcon} />
            <p className="text-xl font-VT323 md:text-3xl  font-medium text-white/90 whitespace-nowrap">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LandingPage({ account }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    fetchResultByTxnId(
      "0xb0aa9832ee700f4e611245e6e1702f42a4b87cfc7090edba4bf1cec2fbd24b3a",
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <main className="flex-grow flex justify-center items-center flex-col text-center">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="bg-[#FEFEFE] w-full flex flex-col justify-center items-center py-8 sm:py-10 lg:py-20 px-4 md:px-10 relative">
          <h1 className="text-black font-VT323 font-semibold text-2xl md:text-3xl lg:text-5xl mb-6 md:mb-0">
            Visual(AI)ze Features
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 justify-center lg:mt-10 mt-6 text-left w-full max-w-7xl">
            {VisualaizeFeatures?.map((ele) => (
              <div
                key={ele.title}
                className="text-black bg-white rounded-3xl transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect  flex flex-col items-start gap-4 p-4 sm:p-6 mx-auto w-full max-w-[300px] lg:max-w-[270px]"
                style={{
                  boxShadow: "0px 91.13px 75.94px 0px rgba(0, 0, 0, 0.07)",
                  border: "0.76px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <img
                  src={ele.img}
                  className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]"
                  alt={ele.title}
                />
                <h2 className="font-bold text-base sm:text-xl w-full font-VT323">
                  {ele.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i !== ele.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <h4 className="opacity-80 text-sm sm:text-base">
                  {ele.description}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full flex flex-col justify-center items-center py-10 sm:py-20 bg-cover bg-center bg-hero-pattern px-4 md:px-10">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl font-VT323 text-white mb-2">
            Explore the Visualaize Genesis Collection
          </h1>
          <p className="text-lg font-medium text-grey mb-4">
            Art created by AI, inspired by human imagination, and minted
            on-chain.
          </p>
          <CrouselShowcase />
          <PrimaryButton
            text="Launch Your Collection"
            showIcon={true}
            classname="bg-[#D1D5D8] hover:bg-[#ffffff] text-primary-100"
            iconClassName="bg-primary_gradient !text-[white]"
            onClick={() => navigate("/deploy")}
          />
        </section>

        {/* How It Works Section */}
        <section className="w-full flex flex-col gap-4 justify-center items-center py-10 lg:py-20 px-4 md:px-10 bg-how-it-work text-[#082F12]">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl font-VT323 text-[#0B061A]">
            How it works
          </h1>
          <p className="w-full md:w-3/4 text-sm sm:text-base text-black font-medium">
            Visualaize brings your imagination to life through a powerful and
            intuitive AI agent swarm. Start by inputting a vivid and unique
            description of your vision, and our agents take over. The Uniqueness
            Validator ensures originality, the Prompt Refiner sharpens your
            vision, the NER Agent codes and crafts the perfect name, and the
            Image Generator breathes life to your intent. The result? A
            one-of-a-kind NFT, instantly minted, listed and ready for market. No
            coding or artistic skills required. Effortlessly create, mint,
            launch and own the future of NFTs.
          </p>
          <img
            src={workImage}
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] h-auto mt-6"
            alt="How it works"
          />
        </section>

        {/* Benefits Section */}
        <section className="w-full flex flex-col gap-8 justify-center items-center py-10 lg:py-20 px-4 md:px-10 relative bg-gradient-to-b from-[#170D21] to-[#2D1B3D]">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#170D21] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#170D21] to-transparent z-10" />

          {/* Content */}
          <div className="w-full  flex flex-col gap-4 md:gap-8 z-0">
            <MarqueeGroup items={benefits1} direction="left" />
            <MarqueeGroup items={benefits2} direction="right" />
          </div>
        </section>

        {/* Create NFT Section */}
        <section className="w-full flex flex-col gap-4 justify-center items-center py-10 md:py-20 px-4 md:px-10 text-white relative">
          <div className="absolute bg-hero-pattern transform rotate-180 h-full w-full z-[-1]"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold px-4 text-center font-VT323">
            Craft Your NFT Identity
          </h1>
          <p className="w-full md:w-3/4 text-base sm:text-base text-grey text-center">
            Bring your vision to life with emotionally-driven NFT agents. Emote
            your vibe, create, mint, and launch your NFT collection in a
            heartbeat.
          </p>
          <p className="w-full md:w-3/4 text-base sm:text-lg text-grey text-center font-bold">
            The future of personalized NFTs starts now.
          </p>
          <PrimaryButton
            text="Start Visual(AI)zing"
            showIcon={true}
            classname="mt-8"
            onClick={() => navigate("/collection")}
          />
        </section>
      </main>
    </>
  );
}
