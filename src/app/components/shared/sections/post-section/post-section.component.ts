import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
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

  @Input() slug: string;
  post: Post;
  recentPosts: Post[];
  prevPost: Post;
  nextPost: Post;

  constructor(private blogService: BlogService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.post = this.blogService.getPostBySlug(this.slug) || this.blogService.getPostById(+this.slug) || null;

    // Redirect to error page when post is null
    if (!this.post) {
      this.router.navigate(['page-not-found']);
    } else {
      this.titleService.setTitle(this.post.title);
      let posts = this.blogService.getPosts();
      this.post.link = '/blog/post/' + this.post.slug;
      this.post.disqusIdentifier = '/blog/post/' + this.post.id; //'/post.html?id=' + this.post.id;
      // Get recent posts
      this.recentPosts = posts.slice(0, 5);
      this.recentPosts.forEach((post) => {
        post.link = '/blog/post/' + post.slug;
      });
      // Get previous & next posts
      this.prevPost = this.blogService.getPostById(this.post.id - 1);
      this.nextPost = this.blogService.getPostById(this.post.id + 1);
    }
  }

  ngAfterViewInit() {
    // source: https://help.disqus.com/en/articles/1717274-adding-comment-count-links-to-your-home-page#updating-counts
    if (this.post && typeof DISQUSWIDGETS !== 'undefined') {
      DISQUSWIDGETS.getCount({ reset: true });
    }
  }

}
