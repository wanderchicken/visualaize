import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Loader from "@/components/ui/Loader";
import PrimaryButton from "@/components/PrimaryButton";
import Logo from "@/assets/Logo.svg";
import {
  PollForFetchNftByTxnId,
  pollForResultTxnId,
} from "@/utils/pollingUtils";
import { useToast } from "@/hooks/use-toast";
import isValidTxnId from "@/utils/lib";

interface TextMessageProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const TextMessage = ({
  message = "",
  className,
  children,
}: TextMessageProps) => (
  <div
    className={`rounded-[32px] px-4 py-3 bg-[#240D25] border border-solid border-[#FFFFFF14] text-[#ECECEC] text-xs w-max max-w-[75%] text-ellipsis	whitespace-nowrap	overflow-hidden ${className}`}
  >
    {message}
    {children}
  </div>
);

export default function CollectionsChat({
  formTitle,
  formDescription,
  formPlaceHolder,
  isSearchTxn = false,
  onClick,
  text,
  setText,
  account,
}: any) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  const [isConversationEnded, setIsConversationEnded] = useState(false);
  const [pollingTransactionResult, setPollingTransactionResult] =
    useState(false);
  const [aiMessageHistory, setAiMessageHistory] = useState<string[]>([]);
  const [chatData, setChatData] = useState<any>([]);

  const pollTransaction = async (id: string) => {
    setIsLoading(true);
    try {
      const resultOfTxnId = await pollForResultTxnId(id);
      setPollingTransactionResult(resultOfTxnId.is_unique);
      setIsConversationStarted(true);
      if (resultOfTxnId.is_unique) {
        const MAX_DURATION = 3 * 60 * 1000;
        const startTime = Date.now();
        while (Date.now() - startTime < MAX_DURATION) {
          const result = await PollForFetchNftByTxnId({
            txnId: id,
            aiMessage: aiMessageHistory,
          });
          if (result.aimessage) {
            setChatData((prev: any) => [...prev, result.aimessage]);
            setAiMessageHistory((prev) => [...prev, result.aimessage]);
          }
          if (result.nft_url) {
            setChatData((prev: any) => [
              ...prev,
              `Here is Your Link: `,
              <a
                href={result.nft_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary_gradient"
                style={{ color: "#1876d1" }}
              >
                {result.nft_url}
              </a>,
            ]);
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      } else {
        setChatData((prev: any) => [
          ...prev,
          "You Lost",
          resultOfTxnId?.reason || "",
        ]);
      }
    } catch (err: any) {
      toast({
        description: err?.message || "Error while polling.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setIsConversationEnded(true);
    }
  };

  const handleSubmit = async () => {
    if (!text) {
      toast({
        description: "Please enter some message",
        variant: "destructive",
      });
      return;
    }
    if (isSearchTxn) {
      if (isValidTxnId(text)) {
        pollTransaction(text);
      } else {
        toast({
          description: "Please enter valid txn id.",
          variant: "destructive",
        });
      }
    } else {
      try {
        setIsLoading(true);
        const id = await onClick();
        pollTransaction(id);
      } catch (error: any) {
        setIsLoading(false);
        console.error("Transaction error:", error);
      } finally {
      }
    }
  };

  const handleRetry = () => {
    setIsConversationStarted(false);
    setPollingTransactionResult(false);
    setChatData([]);
    setText("");
    setAiMessageHistory([]);
  };

  const renderConversation = () => (
    <div className="w-full overflow-y-scroll overflow-x-hidden">
      <div className="flex w-full justify-end gap-2">
        <div className="rounded-[32px]   px-4 py-3 bg-[#FFFFFF14] border border-solid border-[#FFFFFF14] text-[#ECECEC] text-xs text-ellipsis 	whitespace-nowrap	overflow-hidden">
          {text}
        </div>
        <div
          style={{
            background:
              "linear-gradient(162.64deg, #D9D9D9 11.91%, #737373 145.67%)",
          }}
          className="rounded-full flex justify-center items-center p-2 text-xs text-black font-bold"
        >
          {account?.slice(0, 2)}..{account?.slice(-1)}
        </div>
      </div>
      <div className="flex items-start mt-8 gap-2 w-full">
        <img src={Logo} className="mt-2" />
        <div className="flex justify-start flex-col gap-4 w-full">
          {chatData?.map((message: any, index: number) => (
            <TextMessage key={index} message={message} />
          ))}
          {!isConversationEnded && (
            <TextMessage>
              <Loader />
            </TextMessage>
          )}
        </div>
      </div>
      {isConversationEnded && (
        <div className="flex justify-center w-full mt-6">
          <PrimaryButton
            text={
              pollingTransactionResult
                ? "Mint another NFT"
                : "Click here to retry"
            }
            showIcon={false}
            classname="!w-max !px-4 !text-sm !py-2 hover:!bg-hover_primary_gradient"
            onClick={handleRetry}
          />
        </div>
      )}
    </div>
  );

  const renderSearchForm = () => (
    <div className="w-full max-w-2xl flex flex-col gap-4 items-center h-full justify-center">
      <img src={Logo} width={50} height={50} className="block sm:hidden" />
      <h2 className="text-3xl md:text-5xl font-bold text-center font-VT323">
        {formTitle}
      </h2>
      <div
        className={`absolute w-[90%] sm:relative sm:w-full ${
          isSearchTxn ? "bottom-5 sm:bottom-0" : "bottom-24 sm:bottom-0"
        }`}
      >
        <input
          type="text"
          disabled={isConversationStarted}
          placeholder={formPlaceHolder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-14 pl-6 rounded-full bg-white text-black shadow-lg pr-[120px]"
        />
        <Button
          onClick={handleSubmit}
          disabled={isConversationStarted}
          className="rounded-full text-white !px-4 !py-1 !text-sm !bg-primary_gradient absolute top-2 right-2 hover:!bg-hover_primary_gradient"
        >
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              <Search />
              Search
            </>
          )}
        </Button>
      </div>
      <p className="text-sm text-gray-400 text-left w-full text-center">
        {formDescription}
      </p>
    </div>
  );

  return (
    <main className="h-full flex items-center justify-center px-4 w-full">
      <div
        className={`w-full max-w-3xl pb-8 flex flex-col gap-14 items-center h-full justify-${
          isConversationStarted ? "between pt-[170px]" : "center"
        }`}
      >
        {isConversationStarted ? renderConversation() : renderSearchForm()}
      </div>
    </main>
  );
}
