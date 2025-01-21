type SongSection = SongChord[];
type SongChord = string | [number, string, lyrics?: string, strokes?: string];

export type SongType = {
  title: string;
  youtubeId: string;
  duration: number;
  defaultTranspose: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sections: SongSection[];
};
