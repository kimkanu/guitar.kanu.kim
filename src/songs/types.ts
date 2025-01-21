type SongSection = SongChord[];
type SongChord = string | [number, string, lyrics?: string, strokes?: string];

export type SongType = {
  title: string;
  youtubeId: string;
  duration: number;
  defaultTranspose: number;
  sections: SongSection[];
};
