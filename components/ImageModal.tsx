'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  altText?: string;
  // Optional: pass the full photos list + current index for prev/next navigation
  photos?: string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  altText = 'Gallery image',
  photos = [],
  currentIndex = 0,
  onNavigate,
}: ImageModalProps) {
  const hasPrev = photos.length > 1 && currentIndex > 0;
  const hasNext = photos.length > 1 && currentIndex < photos.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev && onNavigate) onNavigate(currentIndex - 1);
  }, [hasPrev, onNavigate, currentIndex]);

  const goNext = useCallback(() => {
    if (hasNext && onNavigate) onNavigate(currentIndex + 1);
  }, [hasNext, onNavigate, currentIndex]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Keyboard: Escape = close, Arrow keys = navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors"
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev button */}
          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 md:left-6 z-10 p-3 text-white/80 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-all hover:scale-110"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Next button */}
          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 md:right-6 z-10 p-3 text-white/80 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-all hover:scale-110"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          {/* Photo counter */}
          {photos.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 bg-black/50 rounded-full text-white/70 font-sans text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          )}

          {/* Image container */}
          <motion.div
            key={imageUrl}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center aspect-[4/3] md:aspect-auto md:h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
