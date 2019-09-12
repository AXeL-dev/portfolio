import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit {

  @Input() id: number;
  post: any;
  postsLength: number = 0;
  disqusIdentifier: string;

  constructor(private blogService: BlogService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.post = this.blogService.getPostById(this.id) || {};

    // Redirect to 404 error page when post is empty
    if (Object.keys(this.post).length === 0) {
      this.router.navigate(['404']);
    } else {
      this.titleService.setTitle(this.post.title);
      this.postsLength = this.blogService.getPosts().length;
      this.disqusIdentifier = '/blog/post/' + this.post.id; //'/post.html?id=' + this.post.id;
    }
  }

}
