import { Component, OnInit, HostListener, Input } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  menu: any[];
  isSticky: boolean = false;
  showMenu: boolean = false;
  @Input() isHomePage: boolean = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.title = this.headerService.title;
    this.menu = this.headerService.menu;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = scrollPosition >= 100;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
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
