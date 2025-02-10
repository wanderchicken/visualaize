import React from "react";
import Logo from "@/assets/Logo.svg";
import Twitter from "@/assets/Twitter.svg";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";

const pageLinks = [
  { title: "Home", path: "/" },
  { title: "Foundry", path: "/about" },
  { title: "Codex", path: "/guide" },
  { title: "Agent Hub (Beta)", path: "/deploy" },
  { title: "Manifest", path: "/search-txn-id " },
] as const;

export default function Footer() {
  return (
    <section className="w-full flex flex-col gap-4 sm:gap-6 justify-center items-center px-4 pt-8 sm:pt-14 pb-4 text-white bg-[#070314]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold flex gap-4 items-center">
        <img src={Logo} className="w-5 h-5 md:w-8 md:h-8" />
        <span className="font-VT323">Visual(AI)ze</span>
      </h1>
      <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-[#AFABB6] text-sm sm:text-base text-center leading-[24px] sm:leading-[30px] px-4 sm:px-0">
        Join the revolution at Visual(AI)ze Protocol and create one-of-a-kind
        NFTs powered by cutting-edge AI co-agents! Don't miss out—own, trade,
        and profit from exclusive digital assets in a decentralized ecosystem.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://twitter.com/visualaizefun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} className="cursor-pointer w-4 h-4" alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/visualaize.fun/profilecard/?igsh=MTR4N2pzZnJqYWE0dw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 px-4">
        {pageLinks?.map((ele) => (
          <Link
            key={ele.path}
            to={ele.path}
            className="text-sm sm:text-base hover:text-gray-300 transition-colors"
          >
            {ele.title}
          </Link>
        ))}
      </div>
      <p className="text-[#676D79] text-xs sm:text-sm md:text-base font-normal text-center px-4">
        © 2024 – 2025 Visual(AI)ze. All rights reserved.
      </p>
    </section>
  );
}
