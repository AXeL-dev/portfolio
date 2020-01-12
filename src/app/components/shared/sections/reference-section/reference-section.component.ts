import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reference-section',
  templateUrl: './reference-section.component.html',
  styleUrls: ['./reference-section.component.css']
})
export class ReferenceSectionComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() items: any[];
  options: OwlOptions = {
    items: 1,
    dots: true,
    autoplay: true,
    loop: true,
    navSpeed: 3000,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 1
      },
      1400: {
        items: 1
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
