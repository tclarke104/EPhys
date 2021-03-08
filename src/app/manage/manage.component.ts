import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { ExperimentService } from '../services/experiment.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  projects: Project[];

  constructor(private loadingService: LoadingService, private experimentService: ExperimentService) { }

  ngOnInit(): void {
    this.experimentService.getProjects().subscribe(p => {
      this.projects = p;
      this.loadingService.finishPageLoad()
    })
  }

}
