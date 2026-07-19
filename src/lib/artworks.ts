export interface Artwork {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  medium: string;
  note: string;
  year: string;
}

interface GitHubAsset {
  name: string;
  download_url: string;
}

const fallbackMetadata = [
  {
    title: 'Figure Study No. 01',
    medium: 'Graphite and ink exploration',
    note: 'Loose line work focused on silhouette, tension, and rhythm.',
    year: '2026',
    width: 4,
    height: 5,
  },
  {
    title: 'Material Study No. 02',
    medium: 'Digital shading pass',
    note: 'A close study in contrast, edge control, and textured lighting.',
    year: '2026',
    width: 4,
    height: 3,
  },
  {
    title: 'Character Blockout',
    medium: 'Concept iteration',
    note: 'Testing posture, gesture, and proportion before rendering.',
    year: '2026',
    width: 3,
    height: 4,
  },
  {
    title: 'Environment Panel',
    medium: 'Perspective sketch',
    note: 'Framing atmospheric depth with a restrained monochrome palette.',
    year: '2026',
    width: 5,
    height: 4,
  },
  {
    title: 'Gesture Sequence',
    medium: 'Rapid ideation sheet',
    note: 'A sequence of quick marks used to search for motion and form.',
    year: '2026',
    width: 3,
    height: 5,
  },
  {
    title: 'Light Study',
    medium: 'Digital paintover',
    note: 'Focused on value grouping and directional light.',
    year: '2026',
    width: 4,
    height: 4,
  },
];

const fallbackArtworks: Artwork[] = [
  {
    id: 'placeholder-1',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    width: 4,
    height: 5,
    title: 'Studio Placeholder',
    medium: 'Gallery placeholder',
    note: 'Used only when remote artwork is unavailable.',
    year: '2026',
  },
  {
    id: 'placeholder-2',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    width: 4,
    height: 3,
    title: 'Desk Detail',
    medium: 'Gallery placeholder',
    note: 'Used only when remote artwork is unavailable.',
    year: '2026',
  },
  {
    id: 'placeholder-3',
    src: 'https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?auto=format&fit=crop&w=900&q=80',
    width: 3,
    height: 4,
    title: 'Pinned Studies',
    medium: 'Gallery placeholder',
    note: 'Used only when remote artwork is unavailable.',
    year: '2026',
  },
  {
    id: 'placeholder-4',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    width: 5,
    height: 4,
    title: 'Work Surface',
    medium: 'Gallery placeholder',
    note: 'Used only when remote artwork is unavailable.',
    year: '2026',
  },
];

const artApiUrl = 'https://api.github.com/repos/DPK101/my-static-assets/contents/ArtPhotos';

export async function loadArtworks(): Promise<Artwork[]> {
  try {
    const response = await fetch(artApiUrl);

    if (!response.ok) {
      throw new Error(`Unable to fetch artwork: ${response.status}`);
    }

    const files = (await response.json()) as GitHubAsset[];
    const imageFiles = files.filter((file) => /\.(jpe?g|png|webp)$/i.test(file.name));

    if (imageFiles.length === 0) {
      return fallbackArtworks;
    }

    return imageFiles.map((file, index) => {
      const meta = fallbackMetadata[index % fallbackMetadata.length];

      return {
        id: `${file.name}-${index}`,
        src: file.download_url,
        width: meta.width,
        height: meta.height,
        title: meta.title,
        medium: meta.medium,
        note: meta.note,
        year: meta.year,
      };
    });
  } catch (error) {
    console.error(error);
    return fallbackArtworks;
  }
}