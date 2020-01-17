import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

declare var WOW: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title, private appComponent: AppComponent) { }

  ngOnInit() {
    this.titleService.setTitle('Portfolio');
  }

  ngAfterViewInit() {
    this.appComponent.initTooltips();
    this.appComponent.disablePreloader(false, () => {
      new WOW().init();
    });
  }

}
