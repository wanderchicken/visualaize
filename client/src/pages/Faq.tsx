import React, { useState } from "react";
import { Card } from "@/components/ui/card";

export default function Faq() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenQuestions(
      (prev) =>
        prev.includes(index)
          ? prev.filter((item) => item !== index) // Remove the index if it's already open
          : [...prev, index] // Add the index if it's not open
    );
  };

  return (
    <div className="mt-10 w-full max-w-[800px]">
      <div
        className="flex flex-col gap-5 faq-container overflow-y-auto"
        style={{
          maxHeight: "calc(8 * 70px)", // Approx height for 6 rows
          scrollbarWidth: "thin", // For Firefox
        }}
      >
        {[
          {
            question: "What is VisualAIze, and how does it work?",
            answer:
              "VisualAIze is an NFT platform where humans collaborate with AI to create one-of-a-kind, emotion-driven art. Simply describe your vision, and the AI brings it to life as a unique NFT.",
          },
          {
            question: "How do I start creating my NFT?",
            answer:
              "Connect your wallet, answer three questions describing your vision, and let the AI synchronize. If it meets the uniqueness criteria, you can generate and mint.",
          },
          {
            question:
              "What are the qualification criteria for my description to qualify for a mint?",
            answer: (
              <>
                To qualify, your description must be:
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>
                    <strong>Unique:</strong> It must not replicate or closely
                    resemble a previously minted NFT.
                  </li>
                  <li>
                    <strong>Vivid and Detailed:</strong> The AI must understand
                    your creative intent to sync successfully.
                  </li>
                </ul>
              </>
            ),
          },
          {
            question: "What happens if my description doesn’t qualify?",
            answer:
              "You can retry as many times as you like, refining your vision until it meets the criteria. Each attempt costs $10, but there are no limits to trying.",
          },
          {
            question: "What is the cost of minting an NFT?",
            answer: "Each mint costs $50, payable in ETH on Base chain.",
          },
          {
            question: "Can I trade my NFT later?",
            answer:
              "Absolutely. All NFTs are listed on Blur for trading immediately after minting.",
          },
          {
            question: "How many NFTs will exist in total?",
            answer:
              "There will only ever be 999 NFTs, ensuring exclusivity and value.",
          },
          {
            question: "Why are there only 999 NFTs?",
            answer:
              "This limited supply ensures that each NFT remains a special artifact, historic, rare, and truly unique.",
          },
          {
            question:
              "Does it get harder to qualify and mint as more NFTs are created?",
            answer:
              "Yes. Early on, most ideas will be unique, but as the collection grows, it will become harder to create visions that haven’t already been minted. This makes each successful attempt rarer and more valuable over time.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-[8px]  bg-architecture-bg-gradient  hover:bg-hover_arc_gradient"
            style={{
              backdropFilter: "blur(29.14373207092285px)",
              border: "1.08px solid #FFFFFF1A",
            }}
          >
            <div
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between cursor-pointer  hover:text-primary transition-all duration-300 gap-4"
            >
              <h3 className="text-base sm:text-xl  font-semibold text-white">
                {faq.question}
              </h3>
              <div className="text-primary-100 text-2xl">
                {openQuestions.includes(index) ? "-" : "+"}
              </div>
            </div>

            {openQuestions.includes(index) && (
              <div className="text-muted-foreground mt-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
