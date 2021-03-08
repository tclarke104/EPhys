import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingService } from './services/loading.service';

interface NavButton {
  route: string;
  display: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':leave', [
          style({ opacity: 1 }),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class AppComponent {
  title = 'EPhys';
  route;
  loading = false;

  buttons: NavButton[] = [
    {route: 'home', display: 'Home'},
    {route: 'manage', display: 'Projects'},
  ];
  ngOnInit() {
    this.loadingService.loading.pipe().subscribe(l => {
      this.loading = l;
      console.log('emitted');
      this.cd.detectChanges();
    })
  }

  constructor(private router: Router, private loadingService: LoadingService, private cd: ChangeDetectorRef) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.startPageLoad();
      } else if (event instanceof NavigationEnd) {
        this.route= this.router.routerState.snapshot.url;
        console.log (this.route)
      }
    });
  }
}
