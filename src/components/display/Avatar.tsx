import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  className?: string;
}

export function Avatar({ src, alt, fallback, size = "md", className = "" }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={`smngs-avatar smngs-avatar-${size} ${className}`.trim()}
    >
      <AvatarPrimitive.Image className="smngs-avatar-img" src={src} alt={alt} />
      <AvatarPrimitive.Fallback className="smngs-avatar-fallback" delayMs={300}>
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
