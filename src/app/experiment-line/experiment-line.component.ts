import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Experiment } from '../interfaces/experiment';
import { range } from 'lodash';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-experiment-line',
  templateUrl: './experiment-line.component.html',
  styleUrls: ['./experiment-line.component.scss']
})
export class ExperimentLineComponent implements OnInit {
  @Input() experiment: Experiment;

  public lineChartData: ChartDataSets[] = []
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    maintainAspectRatio:false,
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: '4',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'spike'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'transparent',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    let series: ChartDataSets = { data: this.experiment.data, label: 'data', lineTension: 0 }
    this.lineChartData = [series];
    console.log(series.data.length)
    this.lineChartLabels = range(1, series.data.length).map(n => n.toString())
    console.log(this.lineChartLabels.length)
  }

}
