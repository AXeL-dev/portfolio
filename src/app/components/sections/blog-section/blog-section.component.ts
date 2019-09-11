import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {

  @Input() title: string;
  @Input() maxPosts: number = 0;
  @Input() postsPerPage: number = 6;
  @Input() currentPage: number = 1;
  posts: any[];
  pages: any[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.posts = this.blogService.posts;

    // Splice posts array if a max value is provided
    if (this.maxPosts > 0) {
      this.posts.splice(this.maxPosts, this.posts.length - this.maxPosts);
    }

    // Generate posts links + clean and cut long posts text
    this.posts.forEach((post) => {
      post.link = './post/' + post.id;
      post.text = post.text.replace(/(<[^>]*>)|(\s\s+)/g, '').trim(); // remove all html tags and outer/double spaces
      if (post.text.length > 200) {
        post.text = post.text.substr(0, 200);
      }
      post.text += '...';
    });

    // Set pages
    if (this.currentPage > 0) {
      this.pages = [];
      let pageNumber = 1;
      for (let num = 1; num <= this.posts.length; num += this.postsPerPage) {
        this.pages.push(pageNumber++);
      }
      // Redirect to 404 error page when page does not exist
      if (this.pages.indexOf(this.currentPage) < 0) {
        this.router.navigate(['404']);
      } else {
        // Splice posts to show on the current page
        let start = (this.currentPage - 1) * this.postsPerPage;
        this.posts.splice(0, start);
        let end = this.posts.length - this.postsPerPage;
        this.posts.splice(this.postsPerPage, end);
      }
    } else {
      // Redirect to 404 error page when index <= 0
      this.router.navigate(['404']);
    }
  }

}
