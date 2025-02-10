import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  pollForResultTxnId,
  PollForFetchNftByTxnId,
} from "@/utils/pollingUtils";

interface TransactionDialogProps {
  isOpen: boolean;
  txId: string; // Transaction ID
  onClose: () => void; // Callback for closing the dialog
}

export function TransactionDialog({
  isOpen,
  txId,
  onClose,
}: TransactionDialogProps) {
  const [pollingTransactionResult, setPollingTransactionResult] = useState<
    null | boolean
  >(null);
  const [nftLink, setNftLink] = useState("");
  const [reasoning, setReasoning] = useState("");
  const hasPolled = useRef(false); // Track if polling has already occurred

  useEffect(() => {
    if (!isOpen || !txId || hasPolled.current) return;

    const pollTransaction = async () => {
      try {
        const resultOfTxnId = await pollForResultTxnId(txId);
        setPollingTransactionResult(resultOfTxnId.is_unique);

        if (resultOfTxnId.reasoning) {
          setReasoning(resultOfTxnId.reasoning);
        }

        if (resultOfTxnId === true) {
          // const NftLink = await PollForFetchNftByTxnId(txId);
          // setNftLink(NftLink);
        }
      } catch (error) {
        console.error("Error polling transaction:", error);
      }
    };

    pollTransaction();
    hasPolled.current = true; // Mark as executed
  }, [isOpen, txId]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[600px] !w-2/3">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {pollingTransactionResult === null ? (
              "Please wait while your response is YES/NO for Transaction"
            ) : pollingTransactionResult === false ? (
              <>
                <p>Sorry You didn't win.</p>
                <p className="text-base">{reasoning}</p>
              </>
            ) : pollingTransactionResult === true && !nftLink ? (
              <>
                <p>WOW you win.</p>
                <p className="mt-4">
                  Please wait again for getting AI response.
                </p>
              </>
            ) : (
              <>
                <p>
                  <p>Your AI Image</p>
                  <p className="flex gap-2 items-center justify-center text-base mt-5">
                    <p>Here is the link:</p>
                    <a
                      href={nftLink}
                      target="_blank"
                      className="text-[#0000EE]"
                    >
                      Visual(AI)ze
                    </a>
                  </p>
                </p>
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="!justify-center ">
          {pollingTransactionResult !== false && !nftLink ? (
            <Button
              className={`border !text-white !px-8 bg-primary_gradient hover:bg-primary_gradient rounded-full`}
            >
              Loading...
            </Button>
          ) : (
            <Button
              className={`border !text-white !px-8 bg-primary_gradient hover:bg-primary_gradient rounded-full`}
              onClick={() => {
                onClose();
                hasPolled.current = false; // Reset the flag when dialog closes
              }}
            >
              Ok
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
