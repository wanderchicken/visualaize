import ArtSpecificationImage from "@/assets/ArtSpecificationImage";
import BasicConfigIcon from "@/assets/Basic";
import AgentSwarmImage from "@/assets/AgentSwarmImage";
import KnowledgeReserveImage from "@/assets/KnowledgeReserveImage";
import NftDefinerImage from "@/assets/NftDefinerImage";
import OverviewImage from "@/assets/OverviewImage";

interface Props {
  selectedItems: string[];
}

export const nftAgentSideBarData = [
  {
    title: "Basics",
    img: BasicConfigIcon,
  },
  {
    title: "Art Specifications",
    img: ArtSpecificationImage,
  },
  {
    title: "Agent Swarm",
    img: AgentSwarmImage,
  },
  {
    title: "Knowledge Reserve",
    img: KnowledgeReserveImage,
  },
  {
    title: "NFT Definer",
    img: NftDefinerImage,
  },
  {
    title: "Review your NFT",
    img: OverviewImage,
  },
];

const SidebarItem = ({
  Image,
  text,
  isSelected = false,
}: {
  Image: React.FC<{ isSelected: boolean }>;
  text: string;
  isSelected?: boolean;
}) => (
  <div className="flex items-center text-sm space-x-2 py-1 text-gray-400">
    <Image isSelected={isSelected} />
    <span>{text}</span>
  </div>
);

function NFTSidebar({ selectedItems }: Props) {
  return (
    <div className="w-full md:w-72 bg-[#060214] border-b md:border-b-0 md:border-r border-gray-800 p-4 pt-8 md:h-[100vh]">
      <div className="text-sm text-gray-500 mb-4">Questionnaire</div>
      <div className="space-y-2">
        {nftAgentSideBarData.map((ele, index) => (
          <div key={ele.title}>
            <SidebarItem
              text={ele.title}
              Image={ele.img}
              isSelected={selectedItems.includes(ele.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NFTSidebar;
