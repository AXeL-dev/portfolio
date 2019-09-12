import { Component, OnInit, HostListener, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';

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

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.title = this.globalService.title;
    this.menu = this.globalService.menu;
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
