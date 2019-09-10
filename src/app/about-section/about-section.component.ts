import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  author: object;
  socials: any[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.author = this.homeService.author;
    this.socials = this.homeService.socials;
  }

}
