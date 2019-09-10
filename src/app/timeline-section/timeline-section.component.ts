import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-section',
  templateUrl: './timeline-section.component.html',
  styleUrls: ['./timeline-section.component.css']
})
export class TimelineSectionComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() items: any[];

  constructor() { }

  ngOnInit() {
  }

}
