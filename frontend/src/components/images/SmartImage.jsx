import React from "react";

/**
 * SmartImage — lazy loads by default, prevents CLS by requiring width/height.
 * Usage:
 *   import SmartImage from "@/components/images/SmartImage";
 *   <SmartImage src={hero1200} width={1200} height={720} alt="..." priority />
 */
export default function SmartImage({ src, alt, width, height, className, priority = false }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
