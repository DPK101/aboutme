import { useEffect, useState } from 'react';
import Lightbox from '../components/Lightbox';
import SketchGallery from '../components/SketchGallery';
import { loadArtworks, type Artwork } from '../lib/artworks';

export default function SketchesPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchArtworks() {
      const items = await loadArtworks();

      if (!cancelled) {
        setArtworks(items);
        setIsLoading(false);
      }
    }

    fetchArtworks();

    return () => {
      cancelled = true;
    };
  }, []);

  const currentArtwork = selectedIndex !== null ? artworks[selectedIndex] : null;

  return (
    <div className="page page--sketches">
      <section className="portfolio-panel portfolio-panel--art">
        <header className="gallery-headline" aria-label="Sketches introduction">
          <h1>
            Art
            <span className="sr-only">
              {isLoading ? ' Loading the collection.' : ` ${artworks.length} pieces in view.`}
            </span>
          </h1>
        </header>

        <section className="gallery-stage">
          {isLoading ? (
            <div className="loading-grid" aria-label="Loading artwork">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="loading-card" />
              ))}
            </div>
          ) : (
            <SketchGallery artworks={artworks} onSelect={setSelectedIndex} />
          )}
        </section>
      </section>

      {currentArtwork ? (
        <Lightbox
          artwork={currentArtwork}
          currentIndex={selectedIndex ?? 0}
          total={artworks.length}
          onClose={() => setSelectedIndex(null)}
          onPrevious={() =>
            setSelectedIndex((value) => {
              if (value === null) {
                return value;
              }

              return value === 0 ? artworks.length - 1 : value - 1;
            })
          }
          onNext={() =>
            setSelectedIndex((value) => {
              if (value === null) {
                return value;
              }

              return value === artworks.length - 1 ? 0 : value + 1;
            })
          }
        />
      ) : null}
    </div>
  );
}