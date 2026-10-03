import React from "react";
import {
  ShieldCheck,
  Home,
  Trees,
  MapPin,
  MessageSquareText,
  LucideIcon,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Home,
  Trees,
  MapPin,
  MessageSquareText,
};

export function FeatureCard({ title, description, iconName }: FeatureCardProps) {
  const IconComponent = iconMap[iconName] || Home;

  return (
    <div className="flex flex-col items-start p-6 rounded-3xl bg-[#F5EFE6] border border-[#E8DFD5] hover:border-[#D5C6B7] card-hover-elevate transition-luxury group">
      {/* Icon Box matching Figma */}
      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#221C18] shadow-xs group-hover:bg-[#221C18] group-hover:text-white transition-colors duration-300 mb-5">
        <IconComponent className="w-6 h-6 transition-colors" />
      </div>

      <h3 className="text-lg font-bold text-[#221C18] mb-2 tracking-tight group-hover:text-[#382E28] transition-colors">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-[#6C635B] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
