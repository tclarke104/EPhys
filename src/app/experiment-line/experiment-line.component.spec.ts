import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentLineComponent } from './experiment-line.component';

describe('ExperimentLineComponent', () => {
  let component: ExperimentLineComponent;
  let fixture: ComponentFixture<ExperimentLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
