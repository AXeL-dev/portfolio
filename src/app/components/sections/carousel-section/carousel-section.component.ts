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
    autoplaySpeed: 500
  };

  constructor() { }

  ngOnInit() {
  }

}
