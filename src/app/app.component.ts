import { Component, OnInit } from '@angular/core';
import { fadeOutAnimation } from './animations/fade-out.animation';
import { Router, UrlTree } from '@angular/router';

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
  isHomePage: boolean = false;
  private route: UrlTree = null;

  constructor(private router: Router) { }

  ngOnInit() {
    // let _self = this;
    // document.addEventListener('DOMContentLoaded', function () {
    //   _self.initTooltips();
    //   _self.disablePreloader(true);
    // });
  }

  initTooltips() {
    //console.log('Init tooltips');
    // Initialize Materialize tooltips
    const tooltips = document.querySelectorAll('.tooltipped');
    let instances = M.Tooltip.init(tooltips);
  }

  disablePreloader(scroll: boolean = false) {
    //console.log('Disable preloader');
    let _self = this;
    // Wait for background images to load before removing the preloader
    imagesLoaded('.image-bg', { background: true }, function () {
      //console.log('all images are loaded');
      _self.isLoading = false;
      if (scroll) {
        _self.scrollToRouteFragment();
      }
    });
  }

  private scrollToRouteFragment() {
    //console.log('Scroll to route fragment');
    const element = this.route && this.route.fragment ? document.getElementById(this.route.fragment) : null;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onRouteChange() {
    this.isLoading = true;
    this.route = this.router.parseUrl(this.router.url);
    this.isHomePage = !this.route.root.hasChildren() || this.route.root.children.primary.segments[0].path === 'home';
  }
}
