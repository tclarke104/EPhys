import { Experiment } from "../interfaces/experiment";

export const EXPERIMENTS: Experiment[] = [
  {
    name: 'Meth Rat',
    created: new Date(2021, 3, 2),
    data: [1,1,1,11,1,1,1,1,1,22,2],
    projectId: 1,
    id: 1,
    samplingRate: 1
  },
  {
    name: 'Cocaine Mouse',
    created: new Date(2021, 3, 2),
    data: [1,12,1,11,1,3,1,4,1,22,2],
    projectId: 2,
    id: 2,
    samplingRate: 1
  }
]
