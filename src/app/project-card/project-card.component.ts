import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiment } from '../interfaces/experiment';
import { Project } from '../interfaces/project';
import { ExperimentService } from '../services/experiment.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  experiments$: Observable<Experiment[]>
  expanded: boolean = true;
  constructor(private experimentService: ExperimentService) { }

  ngOnInit(): void {
    this.experiments$ = this.experimentService.getExperiments(this.project.id)
  }

}
