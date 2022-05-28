import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Post } from 'src/app/models/post.model';
import { environment } from 'src/environments/environment';
import { MarkdownService } from 'ngx-markdown';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

declare var DISQUSWIDGETS, twttr: any;

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
  isProdEnv: boolean;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private titleService: Title,
    private markdownService: MarkdownService,
    private _lightbox: Lightbox,
    private _lightboxConfig: LightboxConfig,
  ) {
    this.isProdEnv = environment.production;
    this._lightboxConfig.showImageNumberLabel = true;
    this._lightboxConfig.centerVertically = true;
  }

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

    // Override images renderer
    const imageRenderer = this.markdownService.renderer.image;
    this.markdownService.renderer.image = (href, title, text) => {
      const html = imageRenderer.call(this.markdownService.renderer, href, title, text);
      return html.replace(/^<img /, '<img class="open-in-popup" ');
    };
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (event.target instanceof HTMLImageElement && event.target.classList.contains('open-in-popup')) {
      this._lightbox.open([{
        src: event.target.src,
        caption: event.target.title || event.target.alt,
        thumb: event.target.src,
      }]);
    }
  }

  ngAfterViewInit() {
    // source: https://help.disqus.com/en/articles/1717274-adding-comment-count-links-to-your-home-page#updating-counts
    if (this.post && typeof DISQUSWIDGETS !== 'undefined') {
      DISQUSWIDGETS.getCount({ reset: true });
    }
  }

  onReady() {
    if (this.post && typeof twttr !== 'undefined') {
      const content = document.getElementById('post-content');
      twttr.widgets.load(content);
    }
  }

}
