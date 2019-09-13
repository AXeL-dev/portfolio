import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  @Input() title: string;
  @Input() skills: any[];

  constructor() { }

  ngOnInit() {
  }

}
