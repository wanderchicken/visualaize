import React from "react";
interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  icons?: string;
}

function FeatureCardTwo({
  title,
  description,
  className,
  icons,
}: FeatureCardProps) {
  return (
    <div
      className={`backdrop-blur mx-auto rounded-lg p-4  hover:bg-white/10  flex-shrink-0 hover:scale-105 hover:animate-auraEffect flex gap-4 transition-colors bg-architecture-bg-gradient hover:bg-hover_arc_gradient ${className}`}
      style={{
        backdropFilter: "blur(29.14373207092285px)",
        border: "1.08px solid #FFFFFF1A",
      }}
    >
      <div className={`flex-shrink-0  flex items-center  `}>
        <img className="w-14 h-14" src={icons} />
      </div>
      <div>
        <h3 className="text-white  font-VT323 font-semibold mb-1 text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCardTwo;
