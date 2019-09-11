import { Component, OnInit } from '@angular/core';
import { fadeOutAnimation } from './animations/fade-out.animation';

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
    // Wait for background images to load before removing the preloader
    const images = document.querySelectorAll('.image-bg');
    imagesLoaded(images, { background: true }, function () {
      //console.log('all images are loaded');
      _self.isLoading = false;
    });
  }
}
