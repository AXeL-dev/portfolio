import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {

  @Input() title: string;
  @Input() skills: Skill[];

  constructor() { }

  ngOnInit() {
  }

}
