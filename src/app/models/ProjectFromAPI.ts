export interface ProjectFromAPI {
  id: string | null;
  title: { text: string };
  text: string;
  techs: { tech: string; image: string }[];
  image: { url: string };
  src: { url: string };
  github: { url: string };
  type: string;
  order: number;
}

