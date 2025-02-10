import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ethers } from "ethers";
import CollectionsChat from "@/components/CollectionsChat";
import CrouselShowcase from "@/components/CrouselShowcase";
import { DETAILS_ABI, DETAILS_ADDRESS } from "@/lib/constants";
import {
  CONTRACT_ADDRESS,
  MESSAGE_COST,
  CONTRACT_ABI,
  BASE_CHAIN_ID,
  BASE_NETWORK_PARAMS,
} from "@/lib/constants";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { WalletConnect } from "@/components/WalletConnect";
import PromptSidebar from "@/components/PromptSidebar";

interface Props {
  setAccount: (account: string | null) => void;
  account: string | null;
}

export default function Home({ account, setAccount }: Props) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [mintCount, setMintCount] = useState<string>("0000");
  const [totalMessages, setTotalMessages] = useState<string>("0000");

  const [text, setText] = useState<string>("");

  // Get contract instance
  const getContract = async () => {
    if (!window.ethereum) throw new Error("Ethereum wallet not found");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };

  const switchToBaseNetwork = async () => {
    const ethereum = (window as any).ethereum;

    if (!ethereum?.request) {
      toast({
        title: "MetaMask Required",
        description: "Please install MetaMask to continue.",
        variant: "destructive",
      });
      return false;
    }

    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: BASE_CHAIN_ID }],
      });
      return true;
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [BASE_NETWORK_PARAMS],
          });
          return true;
        } catch (addError) {
          toast({
            title: "Network Error",
            description: "Failed to add Base network to MetaMask.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Network Switch Failed",
          description: "Please switch to Base network manually.",
          variant: "destructive",
        });
      }
    }
    return false;
  };

  const submitTransactionHandler = async (text: string) => {
    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      toast({
        title: "MetaMask Required",
        description: "Please install MetaMask to submit messages.",
        variant: "destructive",
      });
      return;
    }

    try {
      const switched = await switchToBaseNetwork();
      if (!switched) return;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      const contract = await getContract();

      // Define a targetId (ensure it's a valid number)
      const targetId = 1; // Replace with the actual target ID value you want to use
      const value = ethers.parseEther(MESSAGE_COST);

      toast({
        title: "Confirming Transaction",
        description: "Please confirm the transaction in MetaMask.",
      });

      const tx = await contract.submitMessage(targetId, text, { value });
      const txId = tx.hash;

      toast({
        title: "Transaction Submitted",
        description: `Transaction ID: ${txId}`,
      });

      return txId;
    } catch (error: any) {
      toast({
        title: "Transaction Failed",
        description: error.message || "Transaction failed.",
        variant: "destructive",
      });
      throw new Error(error?.message);
    }
  };

  const nftDetailsContract = async () => {
    try {
      const network = {
        name: "Base Mainnet", // optional, for readability
        chainId: 8453,
      };

      // Initialize provider
      const infuraProvider = new ethers.JsonRpcProvider(
        "https://base-mainnet.infura.io/v3/49fa193088bb4ab492ca0954c886eab3",
        network
      );
      const contract = new ethers.Contract(
        DETAILS_ADDRESS,
        DETAILS_ABI,
        infuraProvider
      );

      return contract;
    } catch (error) {
      console.error("Error in getContract:", error);
      throw error;
    }
  };
  const totalMessageContract = async () => {
    try {
      const network = {
        name: "Base Mainnet", // optional, for readability
        chainId: 8453,
      };

      // Initialize provider
      const infuraProvider = new ethers.JsonRpcProvider(
        "https://base-mainnet.infura.io/v3/49fa193088bb4ab492ca0954c886eab3",
        network
      );
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        infuraProvider
      );

      return contract;
    } catch (error) {
      console.error("Error in getContract:", error);
      throw error;
    }
  };
  const fetchNFTsMintedCount = async () => {
    try {
      const contract = await nftDetailsContract();
      const result = await contract.currentSupply();
      setMintCount(Number(result).toString().padStart(4, "0"));
    } catch (err) {
      console.error("Error fetching minted count:", err);
    }
  };
  const fetchTotalMessages = async () => {
    try {
      const contract = await totalMessageContract();
      const result = await contract.totalMessages();
      setTotalMessages(Number(result).toString().padStart(4, "0"));
    } catch (err) {
      console.error("Error fetching total messages:", err);
    }
  };
  useEffect(() => {
    fetchNFTsMintedCount();
    fetchTotalMessages();
  }, []);

  return (
    <>
      <div className=" absolute top-0 left-0px-4 px-4 py-3 border border-b-solid border-[#FFFFFF1A] w-full">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center space-x-2 text-gray-400 hover:text-white z-[10]"
            onClick={() => navigate("/collection")}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <h1 className="text-base md:text-xl font-semibold text-center flex-1">
            Synchroniser
          </h1>

          <WalletConnect account={account} setAccount={setAccount} />
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row w-full h-[100vh] min-h-screen bg-hero-pattern bg-no-repeat bg-cover pb-4"
        style={{ backgroundSize: "100% 100%" }}
      >
        <PromptSidebar mintCount={mintCount} totalMessages={totalMessages} />
        <CollectionsChat
          formTitle="Start Synchronizing"
          formDescription="Cost per synchro - 10$. Designed for precision and unmatched reliability every time."
          formPlaceHolder="Describe your NFT concept"
          onClick={() => submitTransactionHandler(text)}
          text={text}
          setText={setText}
          account={account}
        />
        <div className="absolute md:hidden flex gap-6 items-center px-8 bottom-4 w-full">
          <div
            className="bg-[#241F388A] px-4 py-2 rounded-lg w-full"
            style={{ border: "0.88px solid #FFFFFF14" }}
          >
            <p className="text-[#FAFAFA] text-base">{mintCount}</p>
            <p className="font-normal text-[#A1A1AA] text-xs mt-1">
              Minted Count
            </p>
          </div>
          <div
            className="bg-[#241F388A] px-4 py-2 rounded-lg w-full"
            style={{ border: "0.88px solid #FFFFFF14" }}
          >
            <p className="text-[#FAFAFA] text-base">{totalMessages}</p>
            <p className="font-normal text-[#A1A1AA] text-xs mt-1">
              Intent count
            </p>
          </div>
        </div>
      </div>

      <section className="lg:min-h-screen w-full flex flex-col justify-center items-center py-8 bg-cover bg-center bg-hero-pattern">
        <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-2">
          Showcase Gallery
        </h1>
        <CrouselShowcase />
      </section>
    </>
  );
}
