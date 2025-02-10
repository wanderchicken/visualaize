import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import NftAgentForm from "@/components/NFTAgentForm";
import NFTSidebar from "@/components/NFTSidebar";
import { NFTAGENTDATA } from "@/nftAgent";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/PrimaryButton";
import OverViewNftAgentConfiguration from "@/components/OverviewNftConfiguration";
import { useToast } from "@/hooks/use-toast";

const nftAgentSideBarData = [
  "Basics",
  "Art Specifications",
  "Agent Swarm",
  "Knowledge Reserve",
  "NFT Definer",
  "Review your NFT",
];

export default function NFTConfiguration() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedItems, setSelectedItems] = useState<string[]>(["Basics"]);
  const [selectedTab, setSelectedTab] = useState<string>("Basics");
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const [ConfigJSON, setConfigJSON] = useState<any>(NFTAGENTDATA);

  const [formData, setFormData] = useState<any>({
    Basics: {
      agentName: "",
      agentDescription: "",
    },
    "Art Specifications": {
      theme: "",
      guardrails: "",
      additionalElements: "",
      constraints: "",
    },
    "Agent Swarm": {
      uniquenessFilter: "",
      traits: [],
      nftDescription: "",
      promptRefiner: "",
      nerRecognition: "",
      pioneerAgent: "",
    },
    "NFT Definer": { ticker: "", name: "", supply: "", pricePerMessage: "" },
    "Knowledge Reserve": { knowledgeBaseLLM: "", mediaLLM: "" },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedTabIndex === nftAgentSideBarData.length - 1) {
      toast({ description: "Coming Soon..." });
    } else {
      handleNextTab();
    }
  };

  const handleNextTab = () => {
    const currentTabData = ConfigJSON[selectedTab];
    const missingFields = currentTabData?.fields?.filter((field: any) => {
      const fieldValue = formData[selectedTab][field.key];
      return (
        (Array.isArray(fieldValue) && fieldValue?.length === 0) || !fieldValue
      );
    });

    if (missingFields.length > 0) {
      toast({
        title: "All fields are mandatory",
        variant: "destructive",
      });
      return;
    }

    setSelectedTab(nftAgentSideBarData[selectedTabIndex + 1]);
    setSelectedItems((prev) => [
      ...prev,
      nftAgentSideBarData[selectedTabIndex + 1],
    ]);
    setSelectedTabIndex((prev) => prev + 1);
  };

  return (
    <>
      <div
        className="bg-hero-pattern text-white bg-no-repeat md:min-h-screen"
        style={{ backgroundSize: "100% 100%" }}
      >
        <div className="border-b border-gray-800 px-4 py-5 backdrop-blur-[29px] border border-b-solid border-[#FFFFFF1A]">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center space-x-2 text-gray-400 hover:text-white"
              onClick={() => navigate("/deploy")}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <h1 className="text-base md:text-xl font-semibold text-center flex-1">
              NFT Collection Configuration
            </h1>

            <div className="w-12" />
          </div>
        </div>
        <form
          className="h-full flex flex-col md:flex-row relative"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="absolute md:hidden top-0 left-0 w-full bg-[#D9D9D966] text-center text-sm">
            This is for demonstration purpose. this feature is coming soon
          </div>
          <NFTSidebar selectedItems={selectedItems} />
          <div className="w-full relative">
            <div className="hidden md:absolute top-0 left-0 w-full bg-[#D9D9D966] text-center text-sm">
              This is for demonstration purpose. this feature is coming soon
            </div>
            <div className="w-full p-4 pt-8 md:p-10 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold mb-8">
                {selectedTab.toUpperCase()}
              </h2>
              {selectedTab !== "Review your NFT" ? (
                <NftAgentForm
                  data={ConfigJSON[selectedTab]}
                  selectedTab={selectedTab}
                  formData={formData}
                  setFormData={setFormData}
                />
              ) : (
                <OverViewNftAgentConfiguration
                  formData={formData}
                  ConfigJSON={ConfigJSON}
                />
              )}

              <div className="flex justify-center md:justify-end w-full lg:max-w-[75%] mt-6">
                <PrimaryButton
                  type="submit"
                  text={
                    selectedTabIndex === nftAgentSideBarData.length - 1
                      ? "Launch Your Collection"
                      : `Next: ${nftAgentSideBarData[selectedTabIndex + 1]}`
                  }
                  showIcon={true}
                  classname="!pl-3 font-medium items-center"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
