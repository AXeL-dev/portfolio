import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { Error404Component } from './error404/error404.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { GlobalService } from './services/global.service';
import { HomeService } from './services/home.service';
import { PortfolioService } from './services/portfolio.service';
import { BlogService } from './services/blog.service';
import { HeaderComponent } from './header/header.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { CarouselSectionComponent } from './carousel-section/carousel-section.component';
import { TimelineSectionComponent } from './timeline-section/timeline-section.component';
import { ErrorSectionComponent } from './error-section/error-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { PostComponent } from './post/post.component';
import { PostSectionComponent } from './post-section/post-section.component';
import { DisqusModule } from 'ngx-disqus';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    BlogComponent,
    Error404Component,
    AboutSectionComponent,
    HeaderComponent,
    TopSectionComponent,
    FooterComponent,
    SkillsSectionComponent,
    CarouselSectionComponent,
    TimelineSectionComponent,
    ErrorSectionComponent,
    PortfolioSectionComponent,
    BlogSectionComponent,
    PostComponent,
    PostSectionComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot('axel-dev'),
    BrowserAnimationsModule,
    CarouselModule,
    LightboxModule
  ],
  providers: [
    GlobalService,
    HomeService,
    PortfolioService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
