import React from "react";
import { Button } from "./ui/button";

interface Props {
  text: string;
  onClick?: any;
  showIcon?: boolean;
  classname?: string;
  textClassName?: string;
}

export default function PrimaryButtonTwo({
  text = "",
  onClick,
  showIcon = false,
  classname = "",
  textClassName = "",
  ...props
}: Props) {
  return (
    <Button
      className={` text-primary-100 rounded-full font-bold bg-[#FAF0FC] py-4 pl-6 pr-2 sm:p-6 sm:pr-2 text-lg ${classname}`}
      onClick={onClick}
      {...props}
    >
      <span className={`${textClassName}`}>{text}</span>
      {showIcon && (
        <span className="text-white bg-primary-100 rounded-[74px] ml-2 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center font-normal">
          &rarr;
        </span>
      )}
    </Button>
  );
}
