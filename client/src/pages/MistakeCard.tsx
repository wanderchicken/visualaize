import React from "react";

interface MistakeCardProps {
  title?: string;
  mistake?: string;
  solution?: string;
  outcome?: string;
  fix?: string;
}

function MistakeCard({
  title,
  mistake,
  solution,
  outcome,
  fix,
}: MistakeCardProps) {
  return (
    <div className="backdrop-blur-sm rounded-lg p-6 space-y-4 border border-gray-300 bg-[white] hover:shadow-custom">
      <h3 className="text-lg font-semibold text-black font-VT323 ">{title}</h3>

      <div className="space-y-4">
        {mistake && (
          <div className="flex gap-3">
            <p className="text-black font-bold  text-sm  sm:text-base">
              {mistake}
            </p>
          </div>
        )}
        {outcome && (
          <div className="flex gap-3">
            <p className="text-black   text-sm  sm:text-base">
              {" "}
              <span className="font-bold">OutComes:</span> {outcome}
            </p>
          </div>
        )}
        {solution && (
          <div className="flex gap-3">
            <p className="text-black   text-sm  sm:text-base">
              {" "}
              <span className="font-bold">Fix:</span> {solution}
            </p>
          </div>
        )}
        {fix && (
          <div className="flex gap-3">
            <p className="text-black text-sm  sm:text-base">
              {" "}
              <span className="font-bold">Fix:</span> {fix}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MistakeCard;
