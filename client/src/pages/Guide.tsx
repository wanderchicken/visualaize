import React from "react";
import Faq from "./Faq";
import AiImage1 from "@/assets/AiImage1.svg";
import AiImage2 from "@/assets/AiImage2.svg";
import AiImage3 from "@/assets/AiImage3.svg";
import AiImage4 from "@/assets/AiImage4.svg";
import AiImage5 from "@/assets/AiImage5.svg";
import AiImage6 from "@/assets/AiImage6.svg";

import MistakeCard from "./MistakeCard";
import FeatureCard from "./FeatureCard";
import { useNavigate } from "react-router-dom";
import ValueProposition from "./ValuePropositionCard";
import PrimaryButtonTwo from "@/components/PrimaryButtonTwo";

const features = [
  {
    image: AiImage1,
    title: "Defining Your Collection's Vision",
    description:
      "Begin by defining your collection's overall theme and creative direction. What's the story behind your collection? What emotions or themes do you want to explore? This is the foundation for everything that follows. Example: A sci-fi adventure, a tribute to nature's elements, or a whimsical character series.",
  },
  {
    image: AiImage2,

    title: "Configure Parameters and Guardrails",
    description:
      "Create your collection's DNA with distinct traits, themes, and combinations. Set custom limitations like medieval-only or tech-free designs. AI adapts freely and embrace creative freedom. Leverage AI and LLM tools to maximize your creative.",
  },
  {
    image: AiImage3,

    title: "Defining Your Collection's Vision",
    description:
      "Begin by defining your collection's overall theme and creative direction. What's the story behind your collection? What emotions or themes do you want to explore? This is the foundation for everything that follows. Example: A sci-fi adventure, a tribute to nature's elements, or a whimsical character series.",
  },
  {
    image: AiImage4,

    title: "Configure Parameters and Guardrails",
    description:
      "Create your collection's DNA with distinct traits, themes, and combinations. Set custom limitations like medieval-only or tech-free designs. AI adapts freely and embrace creative freedom. Leverage AI and LLM tools to maximize your creative.",
  },
  {
    image: AiImage5,

    title: "Defining Your Collection's Vision",
    description:
      "Begin by defining your collection's overall theme and creative direction. What's the story behind your collection? What emotions or themes do you want to explore? This is the foundation for everything that follows. Example: A sci-fi adventure, a tribute to nature's elements, or a whimsical character series.",
  },
  {
    image: AiImage6,

    title: "Configure Parameters and Guardrails",
    description:
      "Create your collection's DNA with distinct traits, themes, and combinations. Set custom limitations like medieval-only or tech-free designs. AI adapts freely and embrace creative freedom. Leverage AI and LLM tools to maximize your creative.",
  },
];

const mistakes = [
  {
    title: "Lack of Clear Parameters & Overloading with Traits",
    mistake:
      "Allowing unrestricted traits or setting too many traits dilutes the collection's uniqueness, leads to disjointed off-brand submissions and creates inconsistencies.",
    solution:
      "Clearly define your collection's scope and limitations, ensuring coherence and quality. Focus on a smaller set of meaningful traits that enhance your collection's identity.",
  },
  {
    title: "Inconsistent Collection Vision",
    mistake:
      "Mixing styles like surrealism, photorealism, and pixel art in the same collection.",
    solution:
      "Stick to a unified artistic direction that reflects the core theme of your collection.",
  },
  {
    title: "Poor Pricing Strategies",
    mistake:
      "Setting overly high minting or intent fees discourages participation.",
    solution:
      "Research market trends and adjust pricing to balance accessibility and profitability.",
  },
  {
    title: "Ignoring Feedback",
    mistake:
      "Not refining translation parameters after seeing initial submissions leads to repeated issues, discouraging participation.",
    solution:
      "Continuously refine internal translation based on early outcomes to improve synchronity with co-creators' intents.",
  },
];

export default function Guide() {
  const navigate = useNavigate();

  return (
    <>
      <main className="min-h-screen">
        <section className="pt-24 text-white min-h-[400px] w-full flex flex-col justify-center gap-4 items-center px-4 md:px-10 bg-hero-pattern bg-cover">
          <h1 className="font-bold text-center text-3xl lg:text-5xl font-VT323">
            Collection Leaders. Craft. Customize. Conquer.
          </h1>
          <h3 className="font-normal text-base max-w-4xl text-center text-grey">
            Collection Leaders are pioneers creating custom NFT agents for their
            collections, shaping a legacy with AI-powered swarms. Design,
            control, and launch your NFT ecosystem with cutting-edge tools to
            realize your vision.
          </h3>
        </section>
        <section className="py-8 md:py-20 px-4 bg-[#170D21] text-white">
          <div className="flex flex-col gap-4 justify-center items-center max-w-[1600px] mx-auto">
            <h1 className="text-3xl lg:text-5xl font-semibold font-VT323 text-center">
              How It Works
            </h1>

            {/* Description */}
            <p className="w-full sm:w-3/4 pb-5 md:w-1/2 text-md sm:text-base font-medium text-gray-400 text-center">
              SixSense Architecture powers Visualaize with an intelligent swarm
              of autonomous agents, each specializing in distinct aspects of NFT
              creation. This seamless coordination ensures precision, speed, and
              personalization, bringing your vision to life as a true reflection
              of YOU.
            </p>

            {/* Features Section */}
            <div className="w-full py-5 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    imageSrc={feature.image}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20 px-4 bg-[#FEFEFE] text-[#0B061A]">
          <div className="flex flex-col gap-4 justify-center items-center max-w-[1600px] mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-VT323 text-center sm:text-start leading-8">
              Common Pitfalls and How to Avoid Them{" "}
            </h1>
            <p className="w-full sm:w-3/4 md:w-1/2 text-sm sm:text-base font-medium text-center">
              While our SixSense Architecture is designed to help guide your
              creativity, there are common mistakes that can affect the outcome
              of your NFTs. Let’s look at some of these pitfalls and how to
              avoid them.
            </p>
          </div>
          <div className="max-w-5xl mx-auto py-5 mt-2 md:mt-6">
            <div className="grid gap-6">
              {mistakes.map((item, index) => (
                <MistakeCard
                  key={index}
                  title={item.title}
                  mistake={item.mistake}
                  solution={item.solution}
                  // outcome={item?.outcome}
                />
              ))}
            </div>
          </div>
        </section>
        <section>
          <ValueProposition />
        </section>

        <section className="py-8 md:py-20 px-4 bg-[#0B061A] text-white">
          <div className="flex flex-col gap-4 justify-center items-center max-w-[1600px] mx-auto w-3/4 lg:w-1/2">
            <h1 className="text-2xl sm:text-4xl font-semibold font-VT323">
              FAQ’S
            </h1>
            <p className="w-full text-base text-grey font-medium text-center leading-6 sm:leading-10">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </p>
          </div>
          <div className="flex justify-center ">
            <Faq />
          </div>
        </section>

        {/* Shape Your Legacy */}

        <section className=" bg-hero-pattern transform scale-y-[-1] py-10 ">
          <div className="w-full flex flex-col gap-6 justify-center transform scale-y-[-1]  items-center  py-5   px-4 text-white relative">
            {/* Background Pattern */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold px-4  font-VT323 text-center">
              Shape Your Legacy{" "}
            </h1>
            <p className="w-full sm:w-3/4 text-base max-w-2xl sm:text-lg text-grey text-center">
              It’s a conundrum worth having! Will you be a co-creator or a
              collection leader? The future of NFT creation is yours to command.{" "}
            </p>
            <div className=" sm:flex-row gap-5">
              <PrimaryButtonTwo
                text="Launch Your Collection"
                showIcon={true}
                onClick={() => navigate("/deploy")}
                classname="bg-[#D1D5D8] hover:bg-[#D1D5D8]"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
