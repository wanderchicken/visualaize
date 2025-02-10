import { useEffect, memo, useState } from "react";
import { ethers } from "ethers";
import { DETAILS_ADDRESS, DETAILS_ABI } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

function CrouselShowcase() {
  const [imgUrl, setImgUrl] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getContract = async () => {
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

  const fetchMintedURL = async () => {
    try {
      setIsLoading(true);
      const contract = await getContract();
      const result = await contract.getLastMintedTokenURIs();
      const ImageURLs = await Promise.all(
        result
          ?.slice(0, 10)
          ?.map((ele: string) => fetchJsonFromIPFS(ele.replace("ipfs://", "")))
      );
      setImgUrl(ImageURLs);
    } catch (err) {
      console.error("Error fetching minted URLs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchJsonFromIPFS = async (url: string) => {
    try {
      const ipfsUrl = `https://ipfs.io/ipfs/${url}`;
      const response = await fetch(ipfsUrl);

      if (!response.ok)
        throw new Error(`Failed to fetch: ${response.statusText}`);
      const { image, name } = await response.json();
      return {
        img: `https://ipfs.io/ipfs/${image.replace("ipfs://", "")}`,
        title: name,
      };
    } catch (err) {
      console.error("Error fetching JSON from IPFS:", err);
    }
  };

  useEffect(() => {
    fetchMintedURL();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      {imgUrl?.length > 0 && (
        <div className="max-w-[1600px] mx-auto px-4 md:px-0 py-6 md:py-12 overflow-hidden">
          <div className="max-w-full mx-auto relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 flex">
                {imgUrl?.map((ele: any, idx: number) => (
                  <CarouselItem
                    key={ele + idx}
                    className="pl-2 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div
                      className="rounded-3xl  p-2 md:p-4 bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02] cursor-pointer"
                      style={{
                        border: "0.94px solid rgba(255, 255, 255, 0.22)",
                        backdropFilter: "blur(25.48px)",
                      }}
                    >
                      <a
                        className="relative overflow-hidden rounded-xl shadow-lg"
                        href={ele?.img}
                        target="_blank"
                      >
                        <div className="relative overflow-hidden rounded-t-xl">
                          <img
                            src={ele?.img}
                            alt={`Image ${idx + 1}`}
                            className="h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover"
                          />
                        </div>
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -top-10 right-0 hidden md:flex space-x-2">
                <CarouselPrevious className="relative static transform-none" />
                <CarouselNext className="relative static transform-none" />
              </div>
              <div className="flex justify-center mt-4 space-x-2 md:hidden">
                <CarouselPrevious className="relative static transform-none" />
                <CarouselNext className="relative static transform-none" />
              </div>
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(CrouselShowcase);
