export interface Experience {
  company: string;
  employ: string;
  description: string;
  techs: { text: string; image: string }[];
  start_date: string;
  end_date: string | null;
}
