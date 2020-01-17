import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

declare var WOW: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {

  currentPage: number = 1;
  tagFilter: string = '';

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private appComponent: AppComponent) {
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.titleService.setTitle('Blog');
    const page = this.route.snapshot.params['page'] || this.route.snapshot.queryParams['page'];
    if (page) {
      this.currentPage = +page; // + is used to convert string to number
    }
    const tag = this.route.snapshot.params['tag'] || this.route.snapshot.queryParams['tag'];
    if (tag) {
      this.tagFilter = tag;
    }
  }

  ngAfterViewInit() {
    this.appComponent.initTooltips();
    this.appComponent.disablePreloader(false, () => {
      new WOW().init();
    });
  }

}
