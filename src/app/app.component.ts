import { Component, OnInit } from '@angular/core';
import { fadeOutAnimation } from './animations/fade-out.animation';

declare var M: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOutAnimation]
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit() {
    let _self = this;
    document.addEventListener('DOMContentLoaded', function () {
      // Initialize Materialize tooltips
      const tooltips = document.querySelectorAll('.tooltipped');
      let instances = M.Tooltip.init(tooltips);
      // Wait for background images to load before removing the preloader
      imagesLoaded('.image-bg', { background: true }, function () {
        //console.log('all images are loaded');
        _self.isLoading = false;
      });
    });
  }
}
