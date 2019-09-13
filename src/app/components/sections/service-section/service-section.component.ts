import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  @Input() title: string;
  @Input() services: any[];

  constructor() { }

  ngOnInit() {
  }

}
