import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WalletConnect } from "../components/WalletConnect";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/assets/Logo.svg";
import Twitter from "@/assets/Twitter.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PrimaryButton from "./PrimaryButton";

interface Props {
  account: string | null;
  setAccount: (account: string | null) => void;
}

const Links = [
  { title: "Home", link: "/" },
  { title: "Foundry", link: "/about" },
  { title: "Codex", link: "/guide" },
  { title: "Agent Hub (Beta)", link: "/deploy" },
  { title: "Manifest", link: "/search-txn-id" },
];

export default function Header({ account, setAccount }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(window.location.pathname);
  const [codexDropdownOpen, setCodexDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const codexDropdownRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the header dynamically
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      // Update isScrolled based on scroll position
      setIsScrolled(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        codexDropdownRef.current &&
        !codexDropdownRef.current.contains(event.target as Node)
      ) {
        setCodexDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabClick = (link: string) => {
    setSelectedTab(link);
    setCodexDropdownOpen(false);
    setMobileMenuOpen(false);
  };
  const shouldShowStickyBanner = location.pathname.includes("/deploy");

  return (
    <header
      className={`text-white fixed top-0 z-10 w-full ${
        isScrolled ? "bg-[#0B061A]" : "bg-transparent "
      }`}
      style={{ paddingTop: shouldShowStickyBanner ? "32px" : "16px" }}
    >
      <div className="mx-auto p-2 sm:px-4 sm:py-3 lg:px-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold flex gap-2 items-center font-VT323"
          onClick={() => setSelectedTab("/")}
        >
          <img src={Logo} alt="Logo" />
          <span>Visual(AI)ze</span>
          <span className="bg-primary_gradient rounded-full text-xs md:text-sm py-1 px-2">
            BETA
          </span>
        </Link>

        <div className="lg:hidden flex items-center gap-3">
          <WalletConnect account={account} setAccount={setAccount} />
          <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>

        <div className="hidden   lg:flex gap-3 text-sm items-center font-medium border border-solid border-[#FFFFFF14] bg-[#FFFFFF14] rounded-3xl">
          {Links.map((ele) => {
            const isSelected = selectedTab === ele.link;
            return (
              <div
                key={ele.title}
                className="relative"
                onMouseEnter={() =>
                  ele.title === "Codex" && setCodexDropdownOpen(true)
                }
                onMouseLeave={() =>
                  ele.title === "Codex" && setCodexDropdownOpen(false)
                }
              >
                {ele.title === "Codex" ? (
                  <div
                    onClick={() => setCodexDropdownOpen(!codexDropdownOpen)}
                    className={`h-12 flex items-center px-4 cursor-pointer ${
                      isSelected ? "bg-[#46172F]" : ""
                    }`}
                  >
                    <span
                      className={
                        isSelected
                          ? "text-transparent bg-text-gradient bg-clip-text"
                          : "text-white"
                      }
                    >
                      {ele.title}
                    </span>
                    <ArrowDropDownIcon
                      className={`ml-2 transition-transform ${
                        codexDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <Link
                    to={ele.link}
                    onClick={() => handleTabClick(ele.link)}
                    className={`h-12 flex items-center  px-4 ${
                      isSelected ? "bg-[#46172F]" : ""
                    }`}
                    style={{
                      borderRadius:
                        selectedTab === "/"
                          ? "24px 0px 0px 24px"
                          : selectedTab === "/search-txn-id"
                          ? "0px 24px 24px 0px"
                          : "0px",
                    }}
                  >
                    <span
                      className={
                        isSelected
                          ? "text-transparent bg-text-gradient bg-clip-text"
                          : "text-white"
                      }
                    >
                      {ele.title}
                    </span>
                  </Link>
                )}
                {ele.title === "Codex" && codexDropdownOpen && (
                  <div
                    className="absolute"
                    onMouseEnter={() => setCodexDropdownOpen(true)}
                    onMouseLeave={() => setCodexDropdownOpen(false)}
                  >
                    <div
                      ref={codexDropdownRef}
                      className=" left-0 mt-2 w-48 text-white rounded-lg shadow-lg border border-solid border-[#FFFFFF14] bg-[#0b061a]"
                    >
                      <Link
                        to="/co-creators"
                        onClick={() => handleTabClick("/guide")}
                        className="block py-2 px-4 text-sm hover:bg-primary_gradient"
                      >
                        Co Creators
                      </Link>
                      <Link
                        to="/guide"
                        onClick={() => handleTabClick("/guide")}
                        className="block py-2 px-4 text-sm hover:bg-primary_gradient"
                      >
                        Collection Leaders
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <a
            href="https://twitter.com/visualaizefun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/visualaize.fun/profilecard/?igsh=MTR4N2pzZnJqYWE0dw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <PrimaryButton
            text="Start Visual(AI)zing"
            onClick={() => navigate("/collection")}
            classname="!text-sm !px-3 !py-1"
          />
          <WalletConnect account={account} setAccount={setAccount} />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/80 text-white p-4">
          {Links.map((ele) => (
            <Link
              key={ele.title}
              to={ele.link}
              className="block py-2 text-lg"
              onClick={() => handleTabClick(ele.link)}
            >
              {ele.title}
            </Link>
          ))}
          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://twitter.com/visualaizefun"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-lg"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/visualaize.fun/profilecard/?igsh=MTR4N2pzZnJqYWE0dw=="
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-lg"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
