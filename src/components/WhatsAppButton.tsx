import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
}

export function WhatsAppButton({
  message,
  children = "Pedir por WhatsApp",
  size = "md",
  variant = "solid",
  className,
}: WhatsAppButtonProps) {
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-7 text-base",
  };
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2";
  const variants = {
    solid:
      "bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-whatsapp)] hover:bg-whatsapp-hover",
    outline:
      "border-2 border-whatsapp text-whatsapp bg-background hover:bg-whatsapp hover:text-whatsapp-foreground",
  };
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}
