import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  @Input() title: string;
  @Input() filters: any[];
  @Input() max: number = 0;
  projects: any[];
  currentFilter: string = '*';
  private _album: any[] = [];

  constructor(private portfolioService: PortfolioService, private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
    this._lightboxConfig.showImageNumberLabel = true;
    this._lightboxConfig.centerVertically = true;
  }

  ngOnInit() {
    this.projects = this.portfolioService.projects;
    let _self = this;

    // Splice projects array if a max value is provided
    if (this.max) {
      this.projects.splice(this.max, this.projects.length - this.max);
    }

    // Generate filters when not provided
    if (!this.filters) {
      this.filters = [];
      this.portfolioService.categories.forEach((category) => {
        this.filters.push(category);
      });
    }

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

  applyFilter(filter: string) {
    this.currentFilter = filter;
    return false;
  }

  showItem(item: any) {
    return this.currentFilter === '*' || this.checkFilter(item);
  }

  private checkFilter(item: any) {
    let show = false;
    item.category.forEach((cat) => {
      if (cat.toLowerCase() === this.currentFilter.toLowerCase()) {
        show = true;
        return;
      }
    });
    return show;
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
