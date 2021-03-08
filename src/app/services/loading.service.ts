import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  loading: BehaviorSubject<any> = new BehaviorSubject(false);

  finishPageLoad() {
    this.loading.next(false)
  }

  startPageLoad() {
    this.loading.next(true)
  }
}
