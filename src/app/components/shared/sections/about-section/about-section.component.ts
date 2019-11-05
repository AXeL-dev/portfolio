import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../../services/home.service';
import { Author } from 'src/app/models/author.model';
import { SocialLink } from 'src/app/models/social-link.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  author: Author;
  socials: SocialLink[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.author = this.homeService.author;
    this.socials = this.homeService.socials;
  }

}
