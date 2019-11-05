import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { Router } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { SlugifyPipe } from 'src/app/pipes/slugify.pipe';

declare var DISQUSWIDGETS: any;

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() title: string;
  @Input() maxPosts: number = 0;
  @Input() postsPerPage: number = 6;
  @Input() currentPage: number = 1;
  @Input() tagFilter: string = '';
  posts: Post[];
  pages: number[] = [];
  paginationRoute: string = '/blog/';
  private subscriptions: Subscription[] = [];

  constructor(private blogService: BlogService, private router: Router, private markdownService: MarkdownService, private slugifyPipe: SlugifyPipe) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();

    if (this.posts.length === 0) {
      return;
    }

    // Filter by tag
    if (this.tagFilter.length) {
      this.posts = this.posts.filter((post) => {
        return post.tags.some((tag) => this.slugifyPipe.transform(tag) === this.tagFilter)
      });
      //console.log(this.posts);
      this.paginationRoute = '/blog/tag/' + this.tagFilter + '/';
    }

    // Splice posts array if a max value is provided
    if (this.maxPosts > 0) {
      this.posts.splice(this.maxPosts, this.posts.length - this.maxPosts);
    }

    // Generate posts links + clean and cut long posts text
    this.posts.forEach((post) => {
      post.link = '/blog/post/' + post.slug;
      post.text = 'Loading...';
      post.disqusIdentifier = '/blog/post/' + post.id;
      const content = this.markdownService.getSource(post.content);
      const subscription = content.subscribe((text) => {
        post.text = this.markdownService.compile(text);
        post.text = post.text.replace(/(<[^>]*>)|(\s\s+)/g, '').trim(); // remove all html tags and outer/double spaces
        if (post.text.length > 200) {
          post.text = post.text.substr(0, 200);
        }
        post.text += '...';
      });
      this.subscriptions.push(subscription);
    });

    // Set pages
    if (this.currentPage > 0) {
      this.pages = [];
      let pageNumber = 1;
      for (let num = 1; num <= this.posts.length; num += this.postsPerPage) {
        this.pages.push(pageNumber++);
      }
      // Redirect to error page when page does not exist
      if (this.pages.indexOf(this.currentPage) < 0) {
        this.router.navigate(['page-not-found']);
      } else {
        // Splice posts to show on the current page
        let start = (this.currentPage - 1) * this.postsPerPage;
        this.posts.splice(0, start);
        let end = this.posts.length - this.postsPerPage;
        this.posts.splice(this.postsPerPage, end);
      }
    } else {
      // Redirect to error page when index <= 0
      this.router.navigate(['page-not-found']);
    }
  }

  ngAfterViewInit() {
    // source: https://help.disqus.com/en/articles/1717274-adding-comment-count-links-to-your-home-page#updating-counts
    if (typeof DISQUSWIDGETS !== 'undefined') {
      DISQUSWIDGETS.getCount({ reset: true });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
