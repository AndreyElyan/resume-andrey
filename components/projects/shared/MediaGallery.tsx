import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { GalleryThumbnails, X, ZoomIn, Play } from "lucide-react";
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

interface MediaItemComponentProps {
  item: MediaItem;
  index: number;
  onSelect: (item: MediaItem) => void;
  isMobile: boolean;
}

const MediaItemComponent: React.FC<MediaItemComponentProps> = ({
  item,
  index,
  onSelect,
  isMobile,
}) => (
  <motion.button
    type="button"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.9 + index * 0.05 }}
    className={`${isMobile ? "flex-shrink-0 w-48" : "w-full"} group cursor-pointer`}
    onClick={() => onSelect(item)}
    aria-label={`Open ${item.alt} in full screen`}
  >
    <div className={`relative ${isMobile ? "h-32" : "h-48"} rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all duration-300`}>
      {item.type === "video" ? (
        <>
          <video
            src={item.src}
            className="w-full h-full object-cover"
            preload="metadata"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              console.error("Video failed to load:", item.src);
              e.currentTarget.style.display = "none";
            }}
          >
            <track kind="captions" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        </>
      ) : (
        <>
          <OptimizedImage
            src={item.src}
            alt={item.alt}
            width={300}
            height={200}
            priority={false}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              console.error("Image failed to load:", item.src);
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </div>
        </>
      )}

      {/* Type badge */}
      <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/10">
        {item.type}
      </div>
    </div>

    <p className={`text-white/50 ${isMobile ? "text-xs mt-2" : "text-sm mt-3"} text-center truncate`}>
      {item.alt}
    </p>
  </motion.button>
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className={isMobile ? "mt-6" : "mb-16"}
      >
        <div className="flex items-center mb-6 gap-3">
          <div className={`${isMobile ? "w-10 h-10" : "w-12 h-12"} backdrop-blur-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center border border-white/10`}>
            <GalleryThumbnails className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-indigo-400`} />
          </div>
          <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-bold text-white`}>
            {t("projects.navigation.gallery")}
          </h2>
        </div>

        <div className={isMobile ? "flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" : "grid grid-cols-3 gap-6"}>
          {media.map((item, index) => (
            <MediaItemComponent
              key={item.alt}
              item={item}
              index={index}
              onSelect={setSelectedMedia}
              isMobile={isMobile}
            />
          ))}
        </div>
      </motion.div>

      {/* Media Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl max-h-full w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden flex-1 flex flex-col border border-white/10">
              <div className="flex-1 flex items-center justify-center p-4">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.src}
                    className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] rounded-lg"
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
                    className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
                  />
                )}
              </div>

              <div className="p-4 border-t border-white/10">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {selectedMedia.alt}
                </h3>
                <p className="text-white/50 text-sm">
                  {selectedMedia.src}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MediaGallery;
