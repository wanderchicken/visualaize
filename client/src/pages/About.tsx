import React from "react";
import PurposeIcon from "@/assets/purpose.svg";
import VisionIcon from "@/assets/vision.svg";
import Arc1Image from "@/assets/Tony.jpg";
import Arc2Image from "@/assets/Raul.jpg";
import Arc3Image from "@/assets/Jjenny.jpg";
import Arc4Image from "@/assets/Lorenzo.jpg";
import Arc5Image from "@/assets/Atlas.jpg";

import PrimaryButton from "@/components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const PurposeVisionData = [
  {
    title: "Purpose",
    img: VisionIcon,
    firstDescription:
      "Art has always been humanity’s deepest form of expression. Visualaize bridges human emotion with AI-driven intelligence. As a Meta Mint Studio, Visualaize allows creators to translate feelings and visions into unique, tradeable digital assets. The future of AI is not just about algorithms and frameworks, but about understanding human nuances and turning them into tangible art.",
  },
  {
    title: "Vision",
    img: PurposeIcon,
    firstDescription:
      "Visualaize is pioneering the next wave of NFTs with AI. A new breed of AI agents, NFT agents. The platform empowers creators to launch personalized, intent-driven NFT collections. These collections are seamlessly crafted and minted by AI agents based on your unique vision. With full customization, creators shape distinctive digital assets while redefining digital co-ownership, blending creativity with cutting-edge technology.",
  },
];

const ArchitectureData = [
  {
    title: "Tony",
    role: "The Guardian",
    img: Arc1Image,
    description:
      "Checks every user intent, preventing duplicates and ensuring originality. Ensuring the integrity of the collection by cross-referencing existing intents submitted and outputs",
  },
  {
    title: "Raul",
    role: "The Sentinel",
    img: Arc2Image,
    description:
      "Verifies that prompts adhere to the creator-defined parameters and guardrails. Whether it’s limiting styles to PFPs, orientations, or specific themes, this agent ensures the collection stays true to the creator’s vision.",
  },
  {
    title: "Jenny",
    role: "The Alchemist",
    img: Arc3Image,
    description:
      "izualAIze isn’t just about creating art or building an NFT collection. It’s about creating history. Each NFT minted is a testament to humanity’s ability to push AI beyond logic. Each NFT minted is a testament to humanity’s ability to push AI beyond logic",
  },
  {
    title: "Lorenzo",
    role: "The Sculptor",
    img: Arc4Image,
    description:
      "Lorenzo crafts the defining traits and attributes that give each NFT its unique personality. With precision and artistry, he shapes layers of individuality and authenticity, ensuring every creation in the collection is distinctive, rich in depth, rarity, and character.",
  },
  {
    title: "Atlas",
    role: "The Oracle",
    img: Arc5Image,
    description:
      "Atlas, the NER (Name Entity Recognition) agent, crafts personalized names and generates polished metadata for each NFT. With a deep understanding of the collection’s essence, she ensures the name and attributes reflect the creator’s vision, while seamlessly preparing the NFT for marketplace integration. Atlas combines foresight and technical expertise, giving each NFT its perfect identity, resonating with its creator's story.",
  },
  {
    title: "Dante",
    role: "The Artist",
    img: Arc5Image,
    description:
      "Dante, the Artist, brings refined user intents to life, turning them into stunning visual expressions. With an intuitive understanding of each creator’s vision, he translates emotions and imaginations into a unique piece of art that feels personal and deeply connected to the creator’s identity. His work transmutates your thoughts and dreams into a vivid reality, capturing the essence of you in every brushstroke.",
  },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="min-h-screen w-full flex flex-col gap-4 justify-center items-center bg-hero-pattern bg-no-repeat text-center px-4 pt-20 pb-10 sm:py-20 md:pt-[170px] md:pb-[60px]"
          style={{ backgroundSize: "100% 100%" }}
        >
          <h1 className=" font-bold text-2xl md:text-3xl lg:text-5xl  font-VT323  text-white">
            FOUNDRY
          </h1>
          <h4 className="text-base font-medium text-grey  max-w-xl md:w-3/4 lg:w-1/2 leading-6">
            We're forging the future of art. Empowering artists to transcend
            their imagination. AI-powered, human inspired. Welcome to the
            future.
          </h4>

          {/* Purpose Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-4">
            {PurposeVisionData?.map((ele, index) => (
              <div
                key={index}
                className="flex flex-col  gap-6 p-6  hover:bg-white/10 transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect  sm:text-left rounded-[8px] text-grey-100 max-w-[350px] bg-architecture-bg-gradient hover:bg-hover_arc_gradient"
                style={{
                  backdropFilter: "blur(29.14373207092285px)",
                  borderTop: "1.08px solid #FFFFFF1A",
                }}
              >
                <div className=" w-full ">
                  <img src={ele.img} alt={ele.title} className="w-10 h-10 " />
                </div>
                <p className="text-2xl md:text-4xl text-start font-VT323  font-semibold font-VT323">
                  {ele.title}
                </p>
                <p className="text-sm text-start md:text-sm">
                  {ele.firstDescription}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="w-full flex flex-col gap-4 justify-center items-center py-5 sm:py-20 px-4 md:px-12 bg-[#170D21] text-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-white font-VT323">
            <span className="bg-gradient-to-r from-[#E1704F] via-[#CF617E] to-[#6B84BC] bg-clip-text text-transparent">
              SixSense
            </span>{" "}
            Architecture
          </h1>
          <h4 className="text-base md:text-base font-medium text-grey max-w-4xl md:w-3/4 leading-7 md:leading-6">
            SixSense Architecture powers Visualaize with an intelligent swarm of
            autonomous agents, each specializing in distinct aspects of NFT
            creation. This seamless coordination ensures precision, speed, and
            personalization, bringing your vision to life as a true reflection
            of YOU.
          </h4>

          {/* Top Row Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10  w-full max-w-6xl">
            {ArchitectureData?.map((ele, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 p-5 text-left rounded-[10px]  text-grey-100 bg-architecture-bg-gradient hover:bg-hover_arc_gradient relative transition-transform duration-300 ease-out transform  shadow-lg hover:shadow-2xl  hover:bg-white/10  flex-shrink-0 hover:scale-105 hover:animate-auraEffect"
                style={{
                  backdropFilter: "blur(25.4px)",
                  borderTop: "0.94px solid #FFFFFF1A",
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-[10px] pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.15),_transparent)] opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

                <img
                  src={ele.img}
                  alt={ele.title}
                  className="w-full rounded-[10px]"
                />

                <p className="text-2xl font-semibold font-VT323">
                  {ele.title} <span className="font-normal"> - {ele.role}</span>
                </p>

                <p className="text-xs md:text-sm font-medium leading-7">
                  {ele.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Choice Section */}
        <section className="w-full  bg-[#0B061A] text-white">
          <div className="max-w-7xl flex flex-col gap-4 justify-center items-center text-center py-10  px-4 md:px-12 w-full m-auto">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl font-VT323">
              The Choice
            </h1>
            <h4 className="text-base  font-medium text-grey max-w-7xl  md:w-3/4 leading-7">
              Visualaize is more than just a platform for creating art, it's a
              transformative studio and launchpad tailored for two distinct
              types of creators. Independent NFT creators and those launching
              fully customized NFT agents to launch their collection. Both
              audiences enjoy complete creative freedom and can harness our
              advanced AI tools, but each group has a unique set of requirements
              and, consequently, tailored customization options.
            </h4>

            {/* <div className="p-10 text-left rounded-[8px] text-grey-100 w-full grid grid-cols-3 gap-10 mt-10 border border-[#FFFFFF1A] bg-architecture-bg-gradient backdrop-blur-[29px] items-center">
              <div className="col-span-2 ">
                <p className="text-2xl sm:text-3xl font-semibold">
                  Independent NFT Co-Creators
                </p>
                <p className="mt-4 text-xs md:text-sm !leading-6">
                  Visualaize offers independent co-creators full creative
                  freedom, turning your vivid, detailed imagination into unique,
                  one-of-one NFTs. You provide the vivid, unique descriptions of
                  your vision, and our SixSenseAI architecture ensures that your
                  intents are processed into refined, personalized digital art.
                  Every NFT is authentically crafted, with no duplicates,
                  ensuring each piece is a true representation of your vision.
                  Upon minting, your NFTs are automatically listed on OpenSea,
                  ready for discovery and trade. Royalties are integrated,
                  allowing you to share in the value generated from future
                  sales.
                </p>
              </div>
              <img src={Arc3Image} className="col-span-1 w-full h-full" />
            </div> */}
            <div className="p-10 text-left rounded-[8px] text-grey-100 w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-4 bg-architecture-bg-gradient hover:bg-hover_arc_gradient   hover:bg-white/10 transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect  backdrop-blur-[29px] items-center">
              <div className="col-span-1 md:col-span-2 text-center sm:text-start">
                <h2 className="text-2xl sm:text-3xl font-semibold font-VT323">
                  Collection Leaders Launching Custom NFT Agent Swarms
                </h2>
                <p className="mt-4 text-xs md:text-sm !leading-6">
                  For creators looking to launch an entire NFT collection,
                  Visualaize offers a powerful suite of tools to bring your
                  collection vision to life. Define the vision of your
                  collection, set custom parameters, limitations, and artistic
                  direction. Choose from a variety of LLM integrations and AI
                  agents to match your creative and technical goals. Whether
                  you're focused on PFPs, generative art, or other concepts, you
                  have complete control over the style, size, and features of
                  your collection.
                </p>
                <p className="mt-4 text-xs md:text-sm !leading-6">
                  You can select the agents and LLMs that best serve your
                  creative needs, whether it's refining user intents, generating
                  unique traits, or ensuring smooth metadata handling. Once your
                  NFT agent is live, users can begin submitting their intents,
                  and your custom collection will take shape. NFTs are minted
                  and automatically listed on OpenSea, ready for market
                  exposure. You control everything! From pricing models (based
                  on per intent or per mint) to collection size, minting rules,
                  and traits. Royalties are integrated, so you and your
                  synchronizers can share in the long-term value generated by
                  the success of your collection.
                </p>
              </div>
              <img
                src={Arc3Image}
                alt="Architecture illustration"
                className="col-span-1 w-full h-full"
              />
            </div>
            <div className="p-10 text-left rounded-[8px] text-grey-100 w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-4 bg-architecture-bg-gradient hover:bg-hover_arc_gradient border border-[#FFFFFF1A] backdrop-blur-[29px] items-center  hover:bg-white/10 transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect">
              <div className="col-span-1 md:col-span-2  text-center sm:text-start">
                <h2 className="text-2xl sm:text-3xl font-VT323  font-semibold">
                  Independent NFT Co-Creators
                </h2>
                <p className="mt-4 text-xs md:text-sm !leading-6">
                  Visualaize offers independent co-creators full creative
                  freedom, turning your vivid, detailed imagination into unique,
                  one-of-one NFTs. You provide the vivid, unique descriptions of
                  your vision, and our SixSenseAI architecture ensures that your
                  intents are processed into refined, personalized digital art.
                  Every NFT is authentically crafted, with no duplicates,
                  ensuring each piece is a true representation of your vision.
                  Upon minting, your NFTs are automatically listed on OpenSea,
                  ready for discovery and trade. Royalties are integrated,
                  allowing you to share in the value generated from future
                  sales.
                </p>
              </div>
              <img
                src={Arc3Image}
                alt="Architecture illustration"
                className="col-span-1 w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Aftermath Section */}
        {/* <section className="py-20 px-4 md:px-12 bg-[#08061A] text-left">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full lg:w-3/4 m-auto gap-6 lg:max-w-[900px]">
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl leading-normal text-grey font-semibold">
                The Aftermath
              </h1>
              <p className="text-base md:text-lg leading-7 md:leading-8">
                VisualAIze isn't just about creating art or building an NFT
                collection. It's about creating history. Each NFT minted is a
                testament to humanity's ability to push AI beyond logic and data
                crunching into truly connecting and relating to human emotion
                and expression of it.
              </p>
              <div className="flex gap-2 items-center">
                <div className="rounded-full p-[2px] bg-[#7ad8a0] h-fit">
                  <Check className="text-white text-sm" />
                </div>
                <p className="text-sm md:text-base leading-5">
                  A first-of-its-kind collection,{" "}
                  <br className="hidden md:block" />
                  representing human-AI collaboration.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full p-[2px] bg-[#7ad8a0] h-fit">
                  <Check className="text-white text-sm" />
                </div>
                <p className="text-sm md:text-base leading-5">
                  Unique 1/1s, unmatched in their
                  <br className="hidden md:block" />
                  authenticity with no duplicates.
                </p>
              </div>
            </div>
            <img
              src={AftermathImage}
              className="w-full lg:w-1/2"
              alt="Aftermath"
            />
          </div>
        </section> */}

        {/* Business Section */}
        {/* <section className="py-8 md:py-20 px-4 bg-[#fbf0fc] text-[#082F12]">
          <div className="flex flex-col gap-4 justify-center items-center max-w-[1600px] mx-auto">
            <h1 className="text-2xl sm:text-4xl font-semibold">Business</h1>
            <p className="w-full sm:w-3/4 md:w-1/2 text-sm sm:text-base text-[#082F12CC] font-medium text-center">
              Built on the Base Chain and automatically listed on Blur right
              after minting, these NFTs are ready for trading. Plus, royalties
              are integrated, ensuring that both creators and synchronizers
              share in the value generated from future trades. It's not just
              art, it's a revolutionary way to share and sustain value.
            </p>
            <img
              src={BusinessImage}
              className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] h-auto mt-6"
              alt="How it works"
            />
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full bg-hero-pattern transform scale-y-[-1]">
          <div className="flex flex-col gap-4 justify-center items-center py-10 sm:py-20 px-4 md:px-10 text-white relative transform scale-y-[-1]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold px-4 text-center font-VT323">
              Shape Your Legacy
            </h1>
            <p className="w-full md:w-3/4 text-base sm:text-base max-w-2xl text-grey text-center">
              It’s a conundrum worth having! Will you be a co-creator or a
              collection leader? The future of NFT creation is yours to command.
            </p>
            <div className=" gap-4 mt-4">
              <PrimaryButton
                text="Launch Your Collection"
                showIcon={true}
                classname="bg-[#D1D5D8] hover:bg-[#ffffff] text-primary-100"
                iconClassName="bg-primary_gradient !text-[white]"
                onClick={() => navigate("/deploy")}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
