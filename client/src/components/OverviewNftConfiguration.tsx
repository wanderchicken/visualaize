import React from "react";
import { Card } from "./ui/card";

type ConfigJSONType = {
  [sectionKey: string]: any;
};

interface OverViewNftAgentConfigurationProps {
  formData: any;
  ConfigJSON: ConfigJSONType;
}

const nftAgentSideBarData = [
  "Basics",
  "Art Specifications",
  "Agent Swarm",
  "Knowledge Reserve",
  "NFT Definer",
];

export default function OverViewNftAgentConfiguration({
  formData,
  ConfigJSON,
}: OverViewNftAgentConfigurationProps) {
  const renderValue = (
    field: { type: string; options?: string[] },
    value: any
  ) => {
    if (!value) return "";

    switch (field.type) {
      case "checkbox":
        return Array.isArray(value) ? value.join(", ") : value;
      default:
        return value;
    }
  };

  return (
    <Card
      className="bg-transparent p-4 lg:max-w-[75%] backdrop-blur-[29.14373207092285px]"
      style={{
        border: "1.08px solid #FFFFFF1A",
      }}
    >
      <div className="space-y-8">
        {nftAgentSideBarData?.map((ele) => {
          return (
            <div key={ele} className="space-y-4">
              <h3 className="font-semibold text-2xl">{ele}</h3>

              <div className="grid gap-4 border-b border-[#272331] pb-6">
                {ConfigJSON[ele]?.fields?.map((field: any) => (
                  <div
                    key={field.title}
                    className="flex items-start gap-2 flex-col"
                  >
                    <span className="text-[white] text-base">
                      {field.title}
                    </span>
                    <div className="text-[#FFFFFF99] text-sm">
                      {renderValue(
                        field,
                        formData[ConfigJSON[ele].label]?.[field.key]
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
