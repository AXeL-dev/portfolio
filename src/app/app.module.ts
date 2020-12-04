import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutSectionComponent } from './components/shared/sections/about-section/about-section.component';
import { HeaderService } from './services/header.service';
import { HomeService } from './services/home.service';
import { PortfolioService } from './services/portfolio.service';
import { BlogService } from './services/blog.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { TopSectionComponent } from './components/shared/sections/top-section/top-section.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SkillSectionComponent } from './components/shared/sections/skill-section/skill-section.component';
import { CarouselSectionComponent } from './components/shared/sections/carousel-section/carousel-section.component';
import { TimelineSectionComponent } from './components/shared/sections/timeline-section/timeline-section.component';
import { ErrorSectionComponent } from './components/shared/sections/error-section/error-section.component';
import { PortfolioSectionComponent } from './components/shared/sections/portfolio-section/portfolio-section.component';
import { BlogSectionComponent } from './components/shared/sections/blog-section/blog-section.component';
import { PostComponent } from './components/post/post.component';
import { PostSectionComponent } from './components/shared/sections/post-section/post-section.component';
import { DisqusModule } from 'ngx-disqus';
import { DisqusConfig } from './services/blog.service';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightboxModule } from 'ngx-lightbox';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceSectionComponent } from './components/shared/sections/service-section/service-section.component';
import { ReferenceSectionComponent } from './components/shared/sections/reference-section/reference-section.component';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  const linkRenderer = renderer.link;
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    BlogComponent,
    PageNotFoundComponent,
    AboutSectionComponent,
    HeaderComponent,
    TopSectionComponent,
    FooterComponent,
    SkillSectionComponent,
    CarouselSectionComponent,
    TimelineSectionComponent,
    ErrorSectionComponent,
    PortfolioSectionComponent,
    BlogSectionComponent,
    PostComponent,
    PostSectionComponent,
    EscapeHtmlPipe,
    ServiceSectionComponent,
    ReferenceSectionComponent,
    SlugifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot(DisqusConfig.shortname),
    BrowserAnimationsModule,
    CarouselModule,
    LightboxModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    })
  ],
  providers: [
    HeaderService,
    HomeService,
    PortfolioService,
    BlogService,
    SlugifyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
