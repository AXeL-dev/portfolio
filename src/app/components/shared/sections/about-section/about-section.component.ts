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
  image: {
    path: string;
    index: number;
  };
  socials: SocialLink[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.author = this.homeService.author;
    this.image = this.author.image instanceof Array ? {
      path: this.author.image[0],
      index: 0,
    } : {
      path: this.author.image as string,
      index: null,
    };
    this.socials = this.homeService.socials;
  }

  nextImage() {
    if (this.image.index === null) {
      return;
    }
    let nextIndex = this.image.index + 1;
    if (nextIndex >= this.author.image.length) {
      nextIndex = 0;
    } 
    this.image = {
      path: this.author.image[nextIndex],
      index: nextIndex,
    };
  }

}
