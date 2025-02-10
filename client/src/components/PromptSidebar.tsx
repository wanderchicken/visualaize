import AgentA from "@/assets/AgentA.svg";
import AgentB from "@/assets/AgentB.svg";
import AgentC from "@/assets/AgentC.svg";
import AgentD from "@/assets/AgentD.svg";

interface Props {
  selectedItems: string[];
}

export const nftAgentSideBarData = [
  {
    title: "Agent A",
    img: AgentA,
  },
  {
    title: "Agent B",
    img: AgentB,
  },
  {
    title: "Agent C",
    img: AgentC,
  },
  {
    title: "Agent D",
    img: AgentD,
  },
];

const SidebarItem = ({ Image, text }: { Image: string; text: string }) => (
  <div className="flex items-center text-sm space-x-2 py-1 text-gray-400">
    <img src={Image} />
    <span>{text}</span>
  </div>
);

function PromptSidebar({ mintCount, totalMessages }: any) {
  return (
    <>
      <div className="hidden md:block w-[200px] border-b border-b-0 border-r border-gray-800 p-4 pt-8 h-[100vh] bg-[#060214] mt-[67px]">
        <div className="text-sm text-gray-500 mb-4">Agents Working</div>
        <div className="space-y-2">
          {nftAgentSideBarData.map((ele, index) => (
            <div key={ele.title}>
              <SidebarItem text={ele.title} Image={ele.img} />
            </div>
          ))}
        </div>
        <div
          className="bg-[#27272A38] p-4 rounded-lg mt-6"
          style={{ border: "0.88px solid #FFFFFF14" }}
        >
          <p className="text-[#FAFAFA] text-base">{mintCount}</p>
          <p className="font-normal text-[#A1A1AA] text-xs mt-1">
            Minted Count
          </p>
        </div>
        <div
          className="bg-[#27272A38] p-4 rounded-lg mt-6"
          style={{ border: "0.88px solid #FFFFFF14" }}
        >
          <p className="text-[#FAFAFA] text-base">{totalMessages}</p>
          <p className="font-normal text-[#A1A1AA] text-xs mt-1">
            Intent count
          </p>
        </div>
      </div>
      <div className="absolute md:hidden p-4 pt-20 w-full">
        <div className="text-sm text-gray-500 mb-2">Agents Working</div>
        <div className="flex gap-2 items-center">
          {nftAgentSideBarData.map((ele) => (
            <div key={ele.title}>
              <SidebarItem text={ele.title} Image={ele.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PromptSidebar;
