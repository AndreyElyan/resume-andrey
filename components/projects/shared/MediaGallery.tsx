import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import OptimizedImage from "../../OptimizedImage";

interface MediaItem {
  src: string;
  alt: string;
  type: string;
}

interface MediaGalleryProps {
  media: MediaItem[];
  isMobile: boolean;
}

interface MediaItemProps {
  item: MediaItem;
  itemClasses: string;
  mediaContainerClasses: string;
  onSelect: (item: MediaItem) => void;
  isMobile: boolean;
}

const MediaItem: React.FC<MediaItemProps> = ({
  item,
  itemClasses,
  mediaContainerClasses,
  onSelect,
  isMobile,
}) => (
  <button
    type="button"
    className={itemClasses}
    onClick={() => onSelect(item)}
    aria-label={`Open ${item.alt} in full screen`}
  >
    <div className={mediaContainerClasses}>
      {item.type === "video" ? (
        <video
          src={item.src}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          onClick={(e) => e.stopPropagation()}
          onError={(e) => {
            console.error("Video failed to load:", item.src);
            e.currentTarget.style.display = "none";
          }}
        >
          <track kind="captions" />
        </video>
      ) : (
        <OptimizedImage
          src={item.src}
          alt={item.alt}
          width={300}
          height={200}
          priority={false}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            console.error("Image failed to load:", item.src);
            e.currentTarget.style.display = "none";
          }}
        />
      )}

      <div className="absolute top-1 left-1 bg-black/70 text-white text-xs p-1 rounded">
        {item.type}
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {isMobile ? (
      <>
        <p className="text-xs text-gray-400 mt-2">{item.alt}</p>
        <p className="text-xs text-gray-500 mt-1">{item.src}</p>
      </>
    ) : (
      <>
        <p className="text-gray-400 mt-3 text-center">{item.alt}</p>
        <p className="text-gray-500 mt-1 text-center text-xs">{item.src}</p>
      </>
    )}
  </button>
);

const MediaGallery: React.FC<MediaGalleryProps> = ({ media, isMobile }) => {
  const { t } = useTranslation("common");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedMedia) {
        setSelectedMedia(null);
      }
    };

    if (selectedMedia) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedMedia]);

  const titleClasses = isMobile
    ? "text-xl font-bold mb-4"
    : "text-3xl font-bold mb-8";

  const gridClasses = isMobile
    ? "flex space-x-4 overflow-x-auto pb-4"
    : "grid grid-cols-3 gap-6";

  const itemClasses = isMobile
    ? "flex-shrink-0 w-48 cursor-pointer"
    : "group cursor-pointer w-full";

  const mediaContainerClasses = isMobile
    ? "relative h-32 rounded-xl overflow-hidden bg-gray-700 group"
    : "relative h-48 rounded-xl overflow-hidden bg-gray-700 w-full";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={isMobile ? "mt-6" : "mb-16"}
      >
        <h2 className={titleClasses}>{t("projects.navigation.gallery")}</h2>
        <div className={gridClasses}>
          {media.map((item) => (
            <MediaItem
              key={item.alt}
              item={item}
              itemClasses={itemClasses}
              mediaContainerClasses={mediaContainerClasses}
              onSelect={setSelectedMedia}
              isMobile={isMobile}
            />
          ))}
        </div>
      </motion.div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl max-h-full w-full h-full flex flex-col">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-gray-900 rounded-xl overflow-hidden flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-2">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    className="w-full h-auto max-h-[70vh] sm:max-h-[80vh]"
                    controls
                    autoPlay
                  >
                    <track kind="captions" />
                  </video>
                ) : (
                  <OptimizedImage
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    width={800}
                    height={600}
                    priority={false}
                    className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
                  />
                )}
              </div>

              <div className="p-4 border-t border-gray-700">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {selectedMedia.alt}
                </h3>
                <p className="text-gray-400 text-sm">{selectedMedia.src}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGallery;
