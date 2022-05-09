import { TFile } from './file';

export type TTask = {
  id: string;
  title: string;
  order: number;
  done: boolean;
  description: string;
  userId: string;
  files: TFile[];
};