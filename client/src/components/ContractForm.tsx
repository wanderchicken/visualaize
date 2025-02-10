import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { TransactionDialog } from "@/components/TransactionDialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  CONTRACT_ADDRESS,
  MESSAGE_COST,
  CONTRACT_ABI,
  BASE_CHAIN_ID,
  BASE_NETWORK_PARAMS,
} from "@/lib/constants";

const formSchema = z.object({
  text: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

interface Props {
  setAccount: (account: string | null) => void;
  setUserCount: (account: number) => void;
}

export function ContractForm({ setAccount, setUserCount }: Props) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [txId, setTxId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getContract = async () => {
    if (!window.ethereum) throw new Error("Ethereum wallet not found");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };

  const onCloseDialog = () => {
    setIsModalOpen((prev) => !prev);
    setTxId("");
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function switchToBaseNetwork() {
    const ethereum = (window as any).ethereum;

    if (!ethereum?.request) {
      ({
        title: "MetaMask Required",
        description: "Please install MetaMask to continue",
        variant: "destructive",
      });
      return false;
    }

    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: BASE_CHAIN_ID }],
      });
      setIsCorrectNetwork(true);
      return true;
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [BASE_NETWORK_PARAMS],
          });
          setIsCorrectNetwork(true);
          return true;
        } catch (addError) {
          toast({
            title: "Network Error",
            description: "Failed to add Base network to MetaMask",
            variant: "destructive",
          });
          return false;
        }
      } else if (error.code === 4001) {
        toast({
          title: "Network Switch Rejected",
          description: "Please switch to Base network to continue",
          variant: "destructive",
        });
      }
      return false;
    }
  }

  useEffect(() => {
    const ethereum = (window as any).ethereum;

    const handleChainChange = (chainId: string) => {
      const isBase = chainId === BASE_CHAIN_ID;
      setIsCorrectNetwork(isBase);

      if (!isBase) {
        toast({
          title: "Wrong Network",
          description: "Please switch to Base network",
          variant: "destructive",
        });
        switchToBaseNetwork();
      }
    };

    if (ethereum) {
      ethereum.on("chainChanged", handleChainChange);

      ethereum
        .request({ method: "eth_chainId" })
        .then((chainId: string) => {
          setIsCorrectNetwork(chainId === BASE_CHAIN_ID);
        })
        .catch(console.error);

      return () => {
        ethereum.removeListener("chainChanged", handleChainChange);
      };
    }
    switchToBaseNetwork();
  }, [toast]);

  async function onSubmit(data: FormData) {
    submitTransactionHandler(data.text);
  }

  async function submitTransactionHandler(text: string) {
    const ethereum = (window as any).ethereum;

    if (!ethereum) {
      toast({
        title: "MetaMask Required",
        description: "Please install MetaMask to submit messages",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const switched = await switchToBaseNetwork();
      if (!switched) return;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      const contract = await getContract();
      const value = ethers.parseEther(MESSAGE_COST);

      toast({
        title: "Confirming Transaction",
        description: "Please confirm the transaction in MetaMask",
      });

      const tx = await contract.submitMessage(text, { value });

      const txId = tx.hash;
      toast({
        title: "Transaction Submitted",
        description: `Transaction ID: ${txId}`,
      });

      await tx.wait();

      setIsModalOpen(true);
      setTxId(txId);
    } catch (error: any) {
      setIsModalOpen(false);
      console.error("Transaction error:", error);
      toast({
        title: "Transaction Failed",
        description: error?.message || "Failed to submit message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const fetchMessageCount = async () => {
      try {
        if (typeof window.ethereum !== "undefined") {
          const contract = await getContract();
          const count = await contract.getTotalMessages();
          setUserCount(Number(count));
        } else {
        }
      } catch (error) {
        console.error("Error fetching message count:", error);
      } finally {
      }
    };

    fetchMessageCount();
  }, []);

  return (
    <>
      <Card className="p-6 shadow-lg border border-primary-300 bg-black/40 backdrop-blur-sm">
        <div className="space-y-8">
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-100 to-primary-300 bg-clip-text text-transparent">
                  Start Synchronizing and VisualAIzing
                </h2>
                <p className="text-sm text-muted-foreground mt-2 flex justify-center gap-8">
                  <span>Cost per synchro - 10$</span>
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 max-w-md mx-auto"
                >
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Enter your message"
                            className="min-h-[140px] border-primary-400 bg-black/40 backdrop-blur-sm focus:border-primary/40 focus:ring-primary/40"
                            maxLength={500}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive" />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center w-full">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !isCorrectNetwork}
                      className={
                        "rounded-3xl text-white !px-4 !py-2 !text-sm !bg-primary_gradient"
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Message"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </Card>

      {isModalOpen && (
        <TransactionDialog
          isOpen={isModalOpen}
          txId={txId}
          onClose={onCloseDialog}
        />
      )}
    </>
  );
}
