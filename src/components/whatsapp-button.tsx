import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "secondary" | "outline" | "sand";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  fullWidth?: boolean;
  id?: string;
}

export function WhatsAppButton({
  message,
  variant = "primary",
  size = "md",
  children = "Chat Marketing",
  className = "",
  showIcon = true,
  fullWidth = false,
  id,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#221C18] text-white hover:bg-[#382E28] shadow-xs hover:shadow-md",
    secondary:
      "bg-[#FAF7F2] text-[#221C18] border border-[#E0D5C9] hover:bg-[#F2ECE3] shadow-xs",
    outline:
      "bg-transparent text-[#221C18] border border-[#221C18] hover:bg-[#221C18] hover:text-white",
    sand: "bg-[#EBDBCF] text-[#221C18] hover:bg-[#DFCDBF] border border-[#DFCDBF]",
  };

  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {showIcon && <MessageCircle className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}
