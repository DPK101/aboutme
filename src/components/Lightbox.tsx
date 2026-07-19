import { useEffect } from 'react';
import type { Artwork } from '../lib/artworks';

interface LightboxProps {
  artwork: Artwork;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  artwork,
  currentIndex,
  total,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        onPrevious();
      }

      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={artwork.title}>
      <button className="lightbox__scrim" type="button" onClick={onClose} aria-label="Close artwork" />
      <div className="lightbox__panel">
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close lightbox">
          Close
        </button>
        <div className="lightbox__content">
          <div className="lightbox__image-wrap">
            <img className="lightbox__image" src={artwork.src} alt={artwork.title} />
          </div>
          <div className="lightbox__meta">
            <p className="section-label">Selected study</p>
            <h2>{artwork.title}</h2>
            <p>{artwork.medium}</p>
            <p>{artwork.note}</p>
            <div className="lightbox__footer">
              <span>{artwork.year}</span>
              <span>
                {currentIndex + 1} / {total}
              </span>
            </div>
          </div>
        </div>
        <div className="lightbox__actions">
          <button type="button" onClick={onPrevious}>
            Previous
          </button>
          <button type="button" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}