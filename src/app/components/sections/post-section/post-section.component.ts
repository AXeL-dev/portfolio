import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Post } from 'src/app/models/post.model';

declare var DISQUSWIDGETS: any;

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit, AfterViewInit {

  @Input() id: number;
  post: Post;
  recentPosts: Post[];
  postsLength: number = 0;

  constructor(private blogService: BlogService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.post = this.blogService.getPostById(this.id) || null;

    // Redirect to error page when post is empty
    if (!this.post || Object.keys(this.post).length === 0) {
      this.router.navigate(['page-not-found']);
    } else {
      this.titleService.setTitle(this.post.title);
      let posts = this.blogService.getPosts();
      this.postsLength = posts.length;
      this.post.link = '/blog/post/' + this.post.id; //'/post.html?id=' + this.post.id;
      // Get recent posts
      this.recentPosts = posts.slice(0, 5);
      this.recentPosts.forEach((post) => {
        post.link = '/blog/post/' + post.id;
      });
    }
  }

  ngAfterViewInit() {
    // source: https://help.disqus.com/en/articles/1717274-adding-comment-count-links-to-your-home-page#updating-counts
    if (typeof DISQUSWIDGETS !== 'undefined') {
      DISQUSWIDGETS.getCount({ reset: true });
    }
  }

}
