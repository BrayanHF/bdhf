import { Tech } from './tech.interface';

export interface ProjectEntry {
  title: string;
  category: string;
  description: string;
  techs: Tech[];
  route: string;
}
