import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <div
      className="border backdrop-blur-sm  hover:bg-white/10 transition-colors flex-shrink-0 hover:scale-105 hover:animate-auraEffect rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 bg-architecture-bg-gradient hover:bg-hover_arc_gradient"
      style={{
        backdropFilter: "blur(29.14373207092285px)",
        border: "1.08px solid #FFFFFF1A",
      }}
    >
      {/* Image Section */}
      <div className="w-full md:w-52 h-auto flex-shrink-0 rounded-lg overflow-hidden flex justify-center items-center">
        <img
          src={imageSrc}
          alt={title}
          className="h-[250px] md:w-full md:h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl font-bold font-VT323 text-center sm:text-start text-white">
          {title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base text-center sm:text-start leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
