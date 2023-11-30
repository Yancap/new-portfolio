import { ProjectFromAPI } from './ProjectFromAPI';

export interface Project extends Omit<ProjectFromAPI, "github" | "src" | "title">{
  github: string | null;
  title: string | null;
  src: string  | null;
}
