import React from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl text-left"
      } ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#221C18]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#6E645C] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
