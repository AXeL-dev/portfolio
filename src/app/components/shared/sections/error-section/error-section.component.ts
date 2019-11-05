import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-section',
  templateUrl: './error-section.component.html',
  styleUrls: ['./error-section.component.css']
})
export class ErrorSectionComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
