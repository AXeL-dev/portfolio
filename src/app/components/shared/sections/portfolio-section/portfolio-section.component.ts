import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../../../services/portfolio.service';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import Shuffle from 'shufflejs';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() filters: any[];
  @Input() max: number = 0;
  projects: Project[];
  currentFilter: string = 'all';
  private _album: any[] = [];
  private shuffle: any;

  constructor(private portfolioService: PortfolioService, private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    this._lightboxConfig.showImageNumberLabel = true;
    this._lightboxConfig.centerVertically = true;
  }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
    let _self = this;

    // Splice projects array if a max value is provided
    if (this.max) {
      this.projects.splice(this.max, this.projects.length - this.max);
    }

    // Generate filters when not provided
    if (!this.filters) {
      this.filters = [];
      Object.keys(this.portfolioService.categories).forEach(function (category) {
        _self.filters.push({ name: category, filter: _self.portfolioService.categories[category] });
      });
    }

    // Generate projects groups
    this.projects.forEach(function (project) {
      project.groups = [];
      project.category.forEach(function (category) {
        if (_self.portfolioService.categories[category]) {
          project.groups.push(_self.portfolioService.categories[category]);
        }
      });
    });

    // Generate album (for lightbox gallery)
    this.projects.forEach((project) => {
      let album = {
        src: project.image,
        caption: project.name,
        thumb: project.image
      };
      this._album.push(album);
    });
  }

  ngAfterViewInit() {
    // Intialize Shuffle
    this.shuffle = new Shuffle(document.querySelector('.portfolio-items'), {
      itemSelector: '.portfolio-content',
      delimiter: ','
    });
  }

  applyFilter(filter: string) {
    this.currentFilter = filter;
    if (this.shuffle) {
      this.shuffle.filter(this.currentFilter);
    }
    return false;
  }

  openImageGallery(index: number) {
    // open lightbox
    this._lightbox.open(this._album, index);
    return false;
  }

  closeImageGallery() {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
