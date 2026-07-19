import type { Artwork } from '../lib/artworks';

interface SketchGalleryProps {
  artworks: Artwork[];
  onSelect: (index: number) => void;
}

export default function SketchGallery({ artworks, onSelect }: SketchGalleryProps) {
  return (
    <div className="masonry-grid" aria-label="Sketch gallery">
      {artworks.map((artwork, index) => (
        <button
          key={artwork.id}
          type="button"
          className="art-card"
          onClick={() => onSelect(index)}
          style={{ ['--aspect-ratio' as string]: `${artwork.width} / ${artwork.height}` }}
        >
          <div className="art-card__image-wrap">
            <img className="art-card__image" src={artwork.src} alt={artwork.title} loading="lazy" />
          </div>
          <div className="art-card__overlay">
            <p>{artwork.medium}</p>
            <div>
              <h3>{artwork.title}</h3>
              <span>{artwork.year}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}