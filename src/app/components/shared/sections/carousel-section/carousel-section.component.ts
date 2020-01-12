import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-section',
  templateUrl: './carousel-section.component.html',
  styleUrls: ['./carousel-section.component.css']
})
export class CarouselSectionComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() items: any[];
  options: OwlOptions = {
    items: 5,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      },
      768: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
