import React from "react";
import chatGPTImage from "@/assets/chatGPT.png";
import Focuus from "@/assets/Focuus.png";
import Akool from "@/assets/Akool.png";
import Llama from "@/assets/meta.png";
import Gemini from "@/assets/Gemini.png";
import Claude from "@/assets/Claude.png";
import vector from "@/assets/Vector.png";

interface LLMButtonProps {
  name: string;
  image: string;
  type: string;
}

const LLMsPage = ({ formData, setFormData }: any) => {
  const knowledgeBaseLLMs = [
    { name: "ChatGPT", image: chatGPTImage },
    { name: "Gemini", image: Gemini },
    { name: "Claude", image: Claude },
    { name: "Llama", image: Llama },
  ];

  const mediaLLMs = [
    { name: "ChatGPT", image: chatGPTImage },
    { name: "Focuus", image: Focuus },
    { name: "Lenoardo", image: vector },
    { name: "Akool", image: Akool },
  ];

  const LLMButton = ({ name, image, type }: LLMButtonProps) => (
    <button
      style={{
        backdropFilter: "blur(29.14373207092285px)",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.072) 3.25%, rgba(255, 255, 255, 0.0288) 96.75%)",
      }}
      className={`flex items-center space-x-6 px-4 py-2 rounded-lg transition-colors duration-200 text-lg border border-solid hover:border-primary-200 w-max ${
        formData["Knowledge Reserve"][type] === name
          ? "border border-solid border-primary-200"
          : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        setFormData((prev: any) => ({
          ...prev,
          "Knowledge Reserve": {
            ...prev["Knowledge Reserve"],
            [type]: name,
          },
        }));
      }}
    >
      <span>{name}</span>
      <img
        src={image}
        alt={name}
        className="w-8 h-8 flex items-center justify-center rounded-lg"
      />
    </button>
  );

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="text-lg mb-4">Choose knowledge base LLM</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {knowledgeBaseLLMs.map((llm, index) => (
            <LLMButton
              key={index}
              name={llm.name}
              image={llm.image}
              type="knowledgeBaseLLM"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg mb-4">Choose media LLM</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaLLMs.map((llm, index) => (
            <LLMButton
              key={index}
              name={llm.name}
              image={llm.image}
              type="mediaLLM"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LLMsPage;
