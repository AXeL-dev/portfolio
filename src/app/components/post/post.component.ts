import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

declare var WOW: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  slug: string;

  constructor(private route: ActivatedRoute, private router: Router, private appComponent: AppComponent) {
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.slug = this.route.snapshot.params['slug'] || this.route.snapshot.queryParams['slug'];
  }

  ngAfterViewInit() {
    this.appComponent.initTooltips();
    this.appComponent.disablePreloader(false, () => {
      new WOW().init();
    });
  }

}
