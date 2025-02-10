import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import LLMsPage from "./LLMsPage";
import { Checkbox } from "./ui/checkbox";

export default function NftAgentForm({
  data,
  selectedTab,
  formData,
  setFormData,
}: any) {
  const handleInputChange = (
    section: keyof FormData,
    field: string,
    value: any
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      ["Agent Swarm"]: {
        ...prev["Agent Swarm"],
        traits: prev["Agent Swarm"].traits.includes(value)
          ? prev["Agent Swarm"].traits.filter((item: any) => item !== value)
          : [...prev["Agent Swarm"].traits, value],
      },
    }));
  };

  return (
    <div className="w-full lg:max-w-[75%] space-y-4">
      {selectedTab !== "Knowledge Reserve" &&
        selectedTab !== "Review your NFT" &&
        data?.fields?.map((ele: any) => (
          <div className="w-full">
            <p className="text-gray-300 mb-2 font-semibold text-base sm:text-lg">
              {ele.title}
            </p>
            {ele?.type === "input" && (
              <Input
                className="w-full bg-transparent rounded-lg p-3 sm:p-4 text-gray-300 focus:!ring-primary-100 w-full"
                placeholder={ele?.placeholder || ""}
                onChange={(e) =>
                  handleInputChange(selectedTab, ele.key, e.target.value)
                }
                value={formData[selectedTab]?.[ele.key] || ""}
              />
            )}
            {ele?.type === "textarea" && (
              <Textarea
                placeholder={ele?.placeholder || ""}
                className="w-full bg-transparent rounded-lg p-3 sm:p-4 text-gray-300 focus:!ring-primary-100 w-full"
                rows={3}
                onChange={(e) =>
                  handleInputChange(selectedTab, ele.key, e.target.value)
                }
                value={formData[selectedTab]?.[ele.key] || ""}
              />
            )}
            {ele?.type === "select" && (
              <Select
                onValueChange={(e: any) =>
                  handleInputChange(selectedTab, ele.key, e)
                }
                value={formData[selectedTab]?.[ele.key] || ""}
              >
                <SelectTrigger className="w-full bg-transparent focus:!ring-primary-100">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {(ele?.options || []).map((elem: any, index: number) => (
                    <SelectItem key={index} value={String(elem)}>
                      {elem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {ele?.type === "checkbox" && (
              <div className="flex gap-10 items-center">
                {ele?.options?.map((elem: string) => {
                  return (
                    <div className="flex gap-3 items-center">
                      <Checkbox
                        className="!border-[#2F2C34] data-[state=checked]:bg-[#42162E] data-[state=checked]:text-[white] w-5 h-5"
                        checked={formData["Agent Swarm"].traits.includes(elem)}
                        onCheckedChange={() =>
                          handleCheckboxChange(ele.key, elem)
                        }
                      />
                      <p>{elem}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      {selectedTab === "Knowledge Reserve" && (
        <LLMsPage formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
}
