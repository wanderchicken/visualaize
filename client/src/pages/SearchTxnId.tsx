import React, { useState } from "react";
import CollectionsChat from "@/components/CollectionsChat";

interface Props {
  account: string | null;
}

export default function SearchTxnId({ account }: Props) {
  const [text, setText] = useState<string>("");
  return (
    <div
      className="bg-hero-pattern bg-no-repeat bg-cover h-[100vh] min-h-screen"
      style={{ backgroundSize: "100% 100%" }}
    >
      <CollectionsChat
        formTitle="Search Transaction"
        formDescription="Enter the transaction ID below to retrieve the NFT link associated with
        your transaction"
        formPlaceHolder="Enter transaction ID"
        isSearchTxn={true}
        text={text}
        setText={setText}
        account={account}
      />
    </div>
  );
}
