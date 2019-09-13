import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from '../../services/home.service';
import { AppComponent } from 'src/app/app.component';

declare var M: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  services: any[];
  skills: any[];
  technologies: any[];
  education: any[];
  experience: any[];
  portfolioFilters: any[];

  constructor(private titleService: Title, private homeService: HomeService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.titleService.setTitle('Home');
    this.services = this.homeService.services;
    this.skills = this.homeService.skills;
    this.technologies = this.homeService.technologies;
    this.education = this.homeService.education;
    this.experience = this.homeService.experience;
    this.portfolioFilters = [
      { name: 'Python', filter: 'python' },
      { name: 'PHP', filter: 'php' },
      { name: 'Javascript', filter: 'js' },
      { name: 'ASP.Net', filter: 'asp' }
    ];
  }

  ngAfterViewInit() {
    this.appComponent.initTooltips();
    this.appComponent.disablePreloader(true);
  }

  initTooltips() {
    // Initialize Materialize tooltips
    const tooltips = document.querySelectorAll('.tooltipped');
    console.log(tooltips);
    console.log(document.querySelectorAll('.image-bg'));
    let instances = M.Tooltip.init(tooltips);
  }

  initImagesLoaded(_self) {
    // Wait for background images to load before removing the preloader
    imagesLoaded('.image-bg', { background: true }, function () {
      //console.log('all images are loaded');
      _self.isLoading = false;
    });
  }

}
