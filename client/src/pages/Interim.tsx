import React from "react";
import NftAgentImage from "@/assets/nftAgent.svg";
import { useNavigate } from "react-router-dom";

interface Column {
  header: string;
  key: string;
}

interface RowData {
  [key: string]: string | number | JSX.Element;
}

const columns: Column[] = [
  { header: "NFT Agent", key: "nftAgent" },
  { header: "Collection Size", key: "collectionSize" },
  { header: "Minted NFTs", key: "mintedNfts" },
  { header: "Total Intents Submitted", key: "totalIntents" },
  { header: "Pricing Model", key: "pricingModel" },
  { header: "Cost", key: "cost" },
  { header: "Agent Swam Count", key: "agentSwamCount" },
  { header: "Theme", key: "theme" },
];

const sampleRowData: RowData = {
  nftAgent: (
    <div className="flex items-center space-x-2">
      <img
        src={NftAgentImage}
        alt="NFT Agent"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span>Genesis</span>
    </div>
  ),
  collectionSize: 999,
  mintedNfts: 5,
  totalIntents: 15,
  pricingModel: "Per Intent",
  cost: "$10",
  agentSwamCount: "6PFPs",
  theme: "Bust portrait, Solo portrait, Non-cluster",
};

const rowData: RowData[] = Array.from({ length: 10 }, () => ({
  ...sampleRowData,
}));

const Interim: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-hero-pattern bg-no-repeat bg-cover py-10 md:pt-[150px] md:pb-10">
      <div className="w-full flex flex-col gap-10 justify-center items-center h-full text-center px-4 max-w-7xl m-auto">
        <h1 className="text-2xl sm:text-4xl font-semibold text-white">
          Interim NFT Agents Market
        </h1>
        <div className="flex flex-col gap-6 p-5 text-left rounded-lg backdrop-blur-[25.39px] border border-[#FFFFFF1A] bg-architecture-bg-gradient w-full relative">
          <div className="overflow-x-auto w-full relative">
            <table className="min-w-full table-auto text-left border-collapse">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="border-b py-3 px-6 text-white font-medium"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rowData.map((row, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="border-b py-3 px-6 cursor-pointer"
                        onClick={() => {
                          if (index == 0) navigate("/collection");
                        }}
                      >
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              className="absolute bottom-0 w-full h-[80%] bg-white bg-opacity-20 backdrop-blur-[25px] flex justify-center items-center rounded-lg text-6xl font-bold text-white z-10 border border-white/10 shadow-x blur_container "
              style={{
                backdropFilter: "blur(25px)",
              }}
            >
              Coming Soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interim;
