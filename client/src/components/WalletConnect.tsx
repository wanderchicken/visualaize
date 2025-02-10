import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BASE_CHAIN_ID, BASE_NETWORK_PARAMS } from "@/lib/constants";
import WalletIcon from "@/assets/walletIcon.svg";

interface Props {
  account: string | null;
  setAccount: (account: string | null) => void;
}

export function WalletConnect({ account, setAccount }: Props) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const switchToBaseNetwork = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask Required",
        description: "Please install MetaMask to use this feature",
        variant: "destructive",
      });
      return false;
    }

    try {
      // Try switching to Base network
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: BASE_CHAIN_ID }],
      });
      return true;
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [BASE_NETWORK_PARAMS],
          });
          toast({
            title: "Network Added",
            description: "Base network has been added to MetaMask",
          });
          return true;
        } catch (addError: any) {
          console.error("Error adding Base network:", addError);
          toast({
            title: "Network Error",
            description: "Failed to add Base network to MetaMask",
            variant: "destructive",
          });
          return false;
        }
      }
      if (switchError.code === 4001) {
        toast({
          title: "Network Switch Rejected",
          description: "Please switch to Base network to continue",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Network Error",
          description: "Failed to switch to Base network",
          variant: "destructive",
        });
      }
      console.error("Error switching to Base network:", switchError);
      return false;
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask to continue",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsConnecting(true);
      const switched = await switchToBaseNetwork();
      if (!switched) {
        toast({
          title: "Network Error",
          description: "Please switch to Base network to continue",
          variant: "destructive",
        });
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      setIsConnected(true);
      if (!isConnected) {
        toast({
          title: "Connected",
          description: "Successfully connected to MetaMask on Base network",
        });
      }

      // Store the account in localStorage for future sessions
      localStorage.setItem("walletAccount", accounts[0]);
    } catch (error: any) {
      console.error("Error connecting wallet:", error);
      toast({
        title: "Connection Error",
        description: error?.message || "Failed to connect wallet",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    if (account) {
      setIsConnected(true);
    }
  }, [account]);

  useEffect(() => {
    async function call() {
      try {
        if (!window.ethereum) {
          return;
        }

        // Check if the account is already in localStorage
        const storedAccount = localStorage.getItem("walletAccount");

        if (storedAccount) {
          setAccount(storedAccount);
          setIsConnected(true);
        } else {
        }

        window.ethereum.on("accountsChanged", (newAccounts: string[]) => {
          if (newAccounts.length === 0) {
            setIsConnected(false);
            setAccount(null);
            localStorage.removeItem("walletAccount");
            toast({
              title: "Disconnected",
              description: "Wallet disconnected",
              variant: "destructive",
            });
          } else {
            setAccount(newAccounts[0]);
            localStorage.setItem("walletAccount", newAccounts[0]);
          }
        });

        window.ethereum.on("chainChanged", async (newChainId: string) => {
          if (newChainId !== BASE_CHAIN_ID) {
            setIsConnected(false);
            setAccount(null);
            localStorage.removeItem("walletAccount");
            toast({
              title: "Wrong Network",
              description: "Please switch back to Base network",
              variant: "destructive",
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    }

    call();
  }, []);

  return (
    <Button
      onClick={() => {
        if (isConnecting || isConnected) {
        } else {
          connectWallet();
        }
      }}
      className="!rounded-[32px] text-primary-100 !px-2 !py-1 md:!px-4 md:!py-2 !text-sm !bg-[white] !text-xs lg:!text-sm"
    >
      {isConnecting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : isConnected ? (
        `${account?.slice(0, 6)}...${account?.slice(-4)}`
      ) : (
        <img src={WalletIcon} className="w-5 h-5 cursor-pointer" />
      )}
    </Button>
  );
}
