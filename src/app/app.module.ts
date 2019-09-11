import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { Error404Component } from './components/error404/error404.component';
import { AboutSectionComponent } from './components/sections/about-section/about-section.component';
import { GlobalService } from './services/global.service';
import { HomeService } from './services/home.service';
import { PortfolioService } from './services/portfolio.service';
import { BlogService } from './services/blog.service';
import { HeaderComponent } from './components/header/header.component';
import { TopSectionComponent } from './components/sections/top-section/top-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsSectionComponent } from './components/sections/skills-section/skills-section.component';
import { CarouselSectionComponent } from './components/sections/carousel-section/carousel-section.component';
import { TimelineSectionComponent } from './components/sections/timeline-section/timeline-section.component';
import { ErrorSectionComponent } from './components/sections/error-section/error-section.component';
import { PortfolioSectionComponent } from './components/sections/portfolio-section/portfolio-section.component';
import { BlogSectionComponent } from './components/sections/blog-section/blog-section.component';
import { PostComponent } from './components/post/post.component';
import { PostSectionComponent } from './components/sections/post-section/post-section.component';
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
