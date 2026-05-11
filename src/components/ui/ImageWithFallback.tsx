import { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * ImageWithFallback component
 *
 * Displays an image and provides a styled fallback when the file is missing.
 * This is useful during development because many route images may not be ready yet.
 */
export function ImageWithFallback({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1F3A2E] to-[#2B2118] text-[#C9A24D] ${className}`}
      >
        <div className="text-center">
          <ImageOff className="mx-auto mb-2" size={30} />
          <p className="text-xs font-bold text-[#E8D8B8]">Imagen pendiente</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}