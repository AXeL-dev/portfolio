import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeService } from '../../services/home.service';
import { AppComponent } from 'src/app/app.component';
import { Service } from 'src/app/models/service.model';
import { Skill } from 'src/app/models/skill.model';
import { Technology } from 'src/app/models/technology.model';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { Reference } from 'src/app/models/reference.model';
import { Tool } from 'src/app/models/tool.model';

declare var M: any;
declare var imagesLoaded: any;
declare var WOW: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  services: Service[];
  skills: Skill[];
  tools: Tool[];
  technologies: Technology[];
  education: Education[];
  experience: Experience[];
  funFact: Reference[];

  constructor(private titleService: Title, private homeService: HomeService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.titleService.setTitle('Home');
    this.services = this.homeService.services;
    this.skills = this.homeService.skills;
    this.tools = this.homeService.tools;
    this.technologies = this.homeService.technologies;
    this.education = this.homeService.education;
    this.experience = this.homeService.experience;
    this.funFact = this.homeService.funFact;
  }

  ngAfterViewInit() {
    this.appComponent.initTooltips();
    this.appComponent.disablePreloader(true);
    new WOW().init();
  }

}
