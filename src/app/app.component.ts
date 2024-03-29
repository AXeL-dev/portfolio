import { Component, OnInit } from '@angular/core';
import { fadeOutAnimation } from './animations/fade-out.animation';
import { Router, UrlTree } from '@angular/router';
import { DisqusConfig } from './services/blog.service';
import { DebugService } from './services/debug.service';
import { environment } from 'src/environments/environment';

declare var M: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOutAnimation],
})
export class AppComponent implements OnInit {

  isLoading: boolean = true;
  isHomePage: boolean = false;
  private route: UrlTree = null;

  constructor(private router: Router, private debug: DebugService) { }

  ngOnInit() {
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.initTooltips();
    //   this.disablePreloader(true);
    // });
    this.loadScripts();
  }

  initTooltips() {
    this.debug.log('Init tooltips');
    // Initialize Materialize tooltips
    const tooltips = document.querySelectorAll('.tooltipped');
    const instances = M.Tooltip.init(tooltips);
    // Cleanup tooltips styles on hide
    for (const tooltip of instances) {
      const { _animateOut } = tooltip;
      tooltip._animateOut = () => {
        _animateOut.apply(tooltip);
        setTimeout(() => {
          tooltip.tooltipEl.style.removeProperty('top');
          tooltip.tooltipEl.style.removeProperty('left');
        }, tooltip.options.outDuration);
      };
    }
  }

  disablePreloader(scroll: boolean = false, then: Function = () => {}) {
    this.debug.log('Disable preloader');
    // Wait for background images to load before removing the preloader
    imagesLoaded('.image-bg', { background: true }, () => {
      this.debug.log('all images are loaded');
      this.isLoading = false;
      then();
      if (scroll) {
        this.scrollToRouteFragment();
      }
    });
  }

  private scrollToRouteFragment() {
    this.debug.log('Scroll to route fragment');
    const element =
      this.route && this.route.fragment
        ? document.getElementById(this.route.fragment)
        : null;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // stolen from: https://stackoverflow.com/a/49981918
  private loadScripts() {
    const dynamicScripts = environment.production ? [
      {
        id: 'dsq-count-scr',
        src: '//' + DisqusConfig.shortname + '.disqus.com/count.js',
      },
    ] : [];
    for (let script of dynamicScripts) {
      const node = document.createElement('script');
      node.id = script.id;
      node.src = script.src;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  onRouteChange() {
    this.isLoading = true;
    this.route = this.router.parseUrl(this.router.url);
    this.isHomePage =
      !this.route.root.hasChildren() ||
      this.route.root.children.primary.segments[0].path === 'home';
  }
}
