import React from "react";
import { Button } from "./ui/button";

interface Props {
  text: string;
  onClick?: any;
  showIcon?: boolean;
  classname?: string;
  textClassName?: string;
  iconClassName?: string;
}

export default function PrimaryButton({
  text = "",
  onClick,
  showIcon = false,
  classname = "",
  textClassName = "",
  iconClassName = "",
  ...props
}: any) {
  return (
    <Button
      className={`group text-white rounded-full font-bold bg-primary_gradient py-4 pl-6 pr-2 sm:p-6 sm:pr-2 text-lg hover:bg-hover_primary_gradient hover:scale-[1.02] transform transition-all duration-500 ease-in-out ${classname}`}
      onClick={onClick}
      {...props}
    >
      <span className={`${textClassName}`}>{text}</span>
      {showIcon && (
        <span
          className={`text-primary-100 text-xl font-normal pb-[2px] bg-[#D1D5DB] rounded-[74px] ml-2 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center 
        transform transition-transform duration-300 ease-in-out group-hover:-rotate-45 ${iconClassName}`}
        >
          &rarr;
        </span>
      )}
    </Button>
  );
}
