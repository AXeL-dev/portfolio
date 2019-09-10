import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  technologies: any[];
  education: any[];
  experience: any[];
  portfolioFilters: any[];

  constructor(private titleService: Title, private homeService: HomeService) { }

  ngOnInit() {
    this.titleService.setTitle('Home');
    this.technologies = this.homeService.technologies;
    this.education = this.homeService.education;
    this.experience = this.homeService.experience;
    this.portfolioFilters = [
      'Python',
      'PHP',
      'Javascript',
      'ASP.Net'
    ];
  }

}
