export interface Experiment {
  data: any[]
  samplingRate: number;
  name: string;
  created: Date;
  id?: number;
  projectId: number;
}
