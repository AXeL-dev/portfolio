import { Component, OnInit, HostListener, Input, OnChanges } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  title: string;
  menu: Menu[];
  isSticky: boolean = false;
  showMenu: boolean = false;
  @Input() isHomePage: boolean = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.title = this.headerService.title;
    this.menu = this.headerService.menu;
  }

  ngOnChanges() {
    this.isSticky = false;
  }

  @HostListener('window:scroll') checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = scrollPosition >= 100;
  }

  @HostListener('document:click') clickout() {
    // Click outside of the menu was detected
    this.closeMenu();
  }

  toggleMenu(event: Event) {
    this.showMenu = !this.showMenu;
    this.stopPropagation(event);
  }

  stopPropagation(event: Event) {
    event.stopPropagation(); // Stop the propagation to prevent reaching document
  }

  closeMenu() {
    this.showMenu = false;
  }

  scroll(id: string) {
    let el = id ? document.getElementById(id) : document.body;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu();
      return false; // used to prevent default
    }
  }
}
