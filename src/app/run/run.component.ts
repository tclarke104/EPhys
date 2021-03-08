import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.finishPageLoad()
  }

}
