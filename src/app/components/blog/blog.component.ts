import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  currentPage: number = 1;

  constructor(private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle('Blog');
    const page = this.route.snapshot.params['page'] || this.route.snapshot.queryParams['page'];
    if (page) {
      this.currentPage = +page; // + is used to convert string to number
    }
  }

}
