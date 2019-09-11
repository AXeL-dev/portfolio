import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  skills: any[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.skills = this.homeService.skills;
  }

}
