import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center gap-2">
      {new Array(3).fill(0).map((ele) => (
        <span className="inline-block w-1 h-1 rounded-full bg-current animate-pulse opacity-0 delay-0"></span>
      ))}
    </div>
  );
}
