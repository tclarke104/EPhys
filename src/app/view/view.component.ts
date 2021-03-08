import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'canvasjs';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Experiment } from '../interfaces/experiment';
import { ExperimentService } from '../services/experiment.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  data = [];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  experiment$: Observable<Experiment> = this.route.paramMap.pipe(
    switchMap(p => {
      return this.experimentService.getExperiment(+p['params']['id'])
    }),
    map(e => {
      this.loadingService.finishPageLoad()
      return e;
    })
  );

  constructor(private route: ActivatedRoute,
              private experimentService: ExperimentService,
              private loadingService: LoadingService) {
  }

  ngOnInit(): void {
  }

}
