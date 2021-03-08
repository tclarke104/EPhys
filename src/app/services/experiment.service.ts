import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { EXPERIMENTS } from '../mock/EXPERIMENTS';
import { PROJECTS } from '../mock/PROJECTS';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {

  constructor() { }

  getProjects() {
    return of(PROJECTS)
  }

  getExperiments(projectId: number) {
    let experiments = EXPERIMENTS.filter(e => e.projectId === projectId);
    return of(experiments)
  }

  getExperiment(id:number) {
    let experiment = EXPERIMENTS.find(e => e.id === id);
    return of(experiment)
  }
}
