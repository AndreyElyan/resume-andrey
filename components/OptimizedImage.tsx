import { forwardRef, useMemo, useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  [key: string]: any;
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      className,
      priority = false,
      unoptimized = true,
      onError,
      ...props
    },
    ref,
  ) => {
    const [isClient, setIsClient] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    const cleanProps = useMemo(() => {
      const filtered = { ...props };

      const propsToRemove = [
        "fetchPriority",
        "fetchpriority",
        "loading",
        "decoding",
        "sizes",
        "placeholder",
        "blurDataURL",
      ];

      propsToRemove.forEach((prop) => {
        delete (filtered as any)[prop];
      });

      return filtered;
    }, [props]);

    if (!isClient) {
      return (
        <div
          className={className}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="animate-pulse bg-gray-300 rounded w-full h-full"></div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          className={`${className} ${
            !imageLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            if (onError) onError(e);
          }}
          loading={priority ? "eager" : "lazy"}
          {...cleanProps}
        />
      </div>
    );
  },
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
