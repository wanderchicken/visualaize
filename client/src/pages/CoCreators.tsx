import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import CoCreatorsVideo from "../Images/CocreatorsVideoTwo.mp4";
import aiImage from "@/assets/aiImage.jpg";
import FeatureCardTwo from "./FeatureCardTwo";
import MistakeCard from "./MistakeCard";
import Originality from "../Icons/Group (4).png";
import RespectIP from "../Icons/Group (5).png";
import ExtremeHybridConcepts from "../Icons/Group (7).png";
import NSFWContent from "../Icons/Group (6).png";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icons: Originality,
    title: "Originality",
    description: "Your intents must be unique.",
  },
  {
    icons: ExtremeHybridConcepts,
    title: "Extreme Hybrid Concepts",
    description:
      "Avoid combining unrelated ideas, such as animals, machines, people and fantasy elements all in one NFT. Intents with too many conflicting elements. Imagine and exp",
  },
  {
    icons: RespectIP,
    title: "Respect IP",
    description:
      "Do not reference or attempt to create NFTs based on famous brands, logos, or publicfigures and famous fictional characters.",
  },
  {
    icons: NSFWContent,
    title: "NSFW Content",
    description:
      "Content of a graphic or explicit nature is strictly prohibited.",
  },
];

const mistakes = [
  {
    title: "Vagueness",
    description:
      "The result is generic, uninspired art, as it lacks emotional depth.",
    outcome: "",
    fix: " Add sensory and emotional details and emotional elements. Don't just describe what something looks like, but describe how it feels. ",
  },
  {
    title: "Over-Simplification",
    description: "The output is bland and lacks uniqueness.",
    outcome: "",
    fix: " Include specific details like expressions, surroundings, or actions to create a vivid narrative. Make your descriptions unique and personal.",
  },
  {
    title: "Not Following Collection Parameters",
    description:
      "The intent clashes with the theme and is rejected. If you're submitting to a specific collection, remember that there are guidelines.",
    outcome: "",

    fix: " Align your intent with the collection’s theme and guidelines.",
  },
  {
    title: "Overly Complex Intents",
    description:
      "A bustling futuristic city with flying cars, giant robots, trees growing in space, and a rocket ship launching in the background.",
    outcome:
      "  The AI struggles to balance all elements, over-complicating your intent by combining too many elements or objectives can confuse the AI, resulting in a chaotic or unfocused output.",
    fix: " Simplify your intent by focusing on one central idea, rather than mixing too many concepts at once and gradually building on it.",
  },
  {
    title: "Extreme Hybrid Concepts",
    description:
      "A dog with the body of a car and the face of a woman, submerged in water",
    outcome:
      " The result is distorted and impractical, as the AI struggles to merge conflicting ideas. Too much mixing can compromise the artistic quality.",
    fix: "Focus on cohesive, singular concepts. While creativity is encouraged, ensure your ideas remain logical and harmonious.",
  },
];

export default function CoCreators() {
  const navigate = useNavigate();
  return (
    <>
      <main className="min-h-screen ">
        <section className="pt-24 text-white min-h-[400px] w-full flex flex-col justify-center gap-4 items-center px-4 md:px-10 bg-hero-pattern bg-cover">
          <h1 className="font-bold text-2xl text-center md:text-3xl lg:text-[42px] font-VT323">
            Co-Creators. A Personalized Journey.
          </h1>
          <h3 className="font-normal text-base max-w-4xl text-center text-grey">
            Your imagination, our AI. At Visualaize, we translate your creative
            intent and expression into authentic, personalized NFTs. Experience
            the power of SixSense and create art that's uniquely yours.
          </h3>
        </section>
        <section className="py-8 md:py-20  px-4 sm:px-8 md:px-16 lg:px-32  bg-[#170D21] text-[#FFFFFF] ">
          {/* Text Content */}
          <div className="flex flex-col sm:flex-row gap-10 max-w-7xl m-auto">
            <div className="w-full sm:w-5/12 flex flex-col gap-4 justify-center items-center sm:items-start">
              <div className="w-full flex justify-center sm:justify-start">
                <h1 className="text-2xl md:text-4xl tracking-widest font-semibold font-VT323 leading-snug text-center sm:text-start">
                  How It Works
                </h1>
              </div>
              <p className="text-sm sm:text-base lg:text-lg leading-5  sm:leading-relaxed  tracking-wider text-[#D1D5DB] text-center sm:text-start">
                The process starts when you provide a{" "}
                <span className="font-bold">vivid, detailed</span>, and{" "}
                <span className="font-bold">unique</span>
                description to the NFT agent. Your input is key to ensuring that
                the AI understands your vision and can craft something that
                truly represents your ideas. The clearer and more detailed your
                intent, the closer the result will be to what you imagine. But,
                not every intent will result in a perfect outcome. Let's walk
                through some scenarios to help you understand how the process
                works.
              </p>
            </div>

            {/* Video Content */}
            <div className="w-full sm:w-7/12 flex items-center justify-center relative max-w-7xl">
              <video
                className="w-full max-w-md h-[225px] sm:max-w-[670px] sm:h-[420px] rounded-3xl object-contain "
                controls
                poster={aiImage}
              >
                <source src={CoCreatorsVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20 px-4 bg-[#0B061A] text-white">
          <div className="flex flex-col gap-4 justify-center items-center  ">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-VT323">
              The Story Behind Every NFT{" "}
            </h1>
            <p className="   text-sm sm:text-base max-w-5xl text-grey font-normal text-center leading-5 sm:leading-relaxed tracking-wider">
              Every NFT you create with Visualaize is a digital fingerprint of
              your imagination. Each piece carries the essence of your intent,
              shaped by the emotions and creativity you put into it. Whether
              it’s a vivid dream, a cherished memory, or a bold new idea, your
              NFT preserves that vision, giving it a timeless presence in the
              digital world.
            </p>
          </div>
        </section>
        <section className="py-8 md:py-20 px-4 bg-[#FEFEFE] text-black">
          <div className="flex flex-col gap-4 justify-center items-center  mx-auto w-full ">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-VT323 px-10 font-semibold text-center">
              Common Pitfalls and How to Avoid Them
            </h1>
            <p className="text-sm sm:text-base max-w-4xl text-black font-medium text-center leading-6">
              While our SixSense Architecture is designed to help guide your
              creativity, there are common mistakes that can affect the outcome
              of your NFTs. Let’s look at some of these pitfalls and how to
              avoid them.
            </p>
          </div>

          <div className=" py-12 flex justify-center">
            <div className="flex flex-col  gap-6 max-w-[700px]">
              {mistakes.map((item, index) => (
                <MistakeCard
                  key={index}
                  title={item.title}
                  mistake={item.description}
                  outcome={item.outcome}
                  fix={item.fix}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20 px-4 bg-[#0B061A]  text-white">
          <div className="flex flex-col gap-4 justify-center items-center   ">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center font-VT323 font-semibold">
              Standard Limitations Across All Collections
            </h1>
            <p className="w-full text-sm sm:text-base max-w-4xl py-2 text-grey font-normal tracking-widest text-center">
              The following guidelines apply universally across all collections
              and are essential for maintaining a healthy, creative, and
              respectful community on Visualaize. All co-creators must adhere to
              these rules
            </p>
          </div>
          <div className=" ">
            {features.map((feature, index) => (
              <FeatureCardTwo
                className=" my-5 sm:px-10 max-w-[800px]   border-red-500 "
                key={index}
                icons={feature.icons}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
        <section className="transform scale-y-[-1] bg-hero-pattern py-5 ">
          <div className="w-full flex flex-col gap-4 justify-center items-center   py-8 sm:py-10 transform scale-y-[-1]  px-4 text-white relative">
            <h1 className="text-3xl sm:text-3xl lg:text-5xl font-semibold px-4 font-VT323 text-center">
              Shape Your Legacy{" "}
            </h1>
            <p className="w-full sm:w-3/4 max-w-2xl text-sm sm:text-base text-grey text-center">
              It’s a conundrum worth having! Will you be a co-creator or a
              collection leader? The future of NFT creation is yours to command.{" "}
            </p>
            <PrimaryButton
              text="Start Visual(AI)zing"
              showIcon={true}
              onClick={() => navigate("/collection")}
            />
          </div>
        </section>
      </main>
    </>
  );
}
