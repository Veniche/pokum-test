// client/components/PopupBanner.tsx
import { useEffect, useState } from 'react';

interface BannerProps {
  imageUrl: string;
  altText: string;
  autoCloseDelay?: number;
  onClose?: () => void;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export const PopupBanner = ({
  imageUrl,
  altText,
  autoCloseDelay = 5000,
  onClose,
  whatsappNumber = '+6282283863111',
  whatsappMessage = ''
}: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [autoCloseDelay]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-2 sm:p-3 md:p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-auto max-w-[95vw] sm:max-w-[90vw]">
        <div className="relative">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
            onClick={(e) => {
              // Prevent the click from bubbling up to parent elements
              e.stopPropagation();
              // Call onClose if provided when the image is clicked
              onClose?.();
            }}
          >
            <img
              src={imageUrl}
              alt={altText}
              className="w-auto h-auto max-h-[90vh] max-w-[95vw] object-contain"
            />
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-3 right-3 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/50 z-10"
            aria-label="Close banner"
          >
            <span className="relative -mt-0.5">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
