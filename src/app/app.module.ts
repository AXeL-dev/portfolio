import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutSectionComponent } from './components/sections/about-section/about-section.component';
import { HeaderService } from './services/header.service';
import { HomeService } from './services/home.service';
import { PortfolioService } from './services/portfolio.service';
import { BlogService } from './services/blog.service';
import { HeaderComponent } from './components/header/header.component';
import { TopSectionComponent } from './components/sections/top-section/top-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillSectionComponent } from './components/sections/skill-section/skill-section.component';
import { CarouselSectionComponent } from './components/sections/carousel-section/carousel-section.component';
import { TimelineSectionComponent } from './components/sections/timeline-section/timeline-section.component';
import { ErrorSectionComponent } from './components/sections/error-section/error-section.component';
import { PortfolioSectionComponent } from './components/sections/portfolio-section/portfolio-section.component';
import { BlogSectionComponent } from './components/sections/blog-section/blog-section.component';
import { PostComponent } from './components/post/post.component';
import { PostSectionComponent } from './components/sections/post-section/post-section.component';
import { DisqusModule } from 'ngx-disqus';
import { DisqusConfig } from './services/blog.service';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightboxModule } from 'ngx-lightbox';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceSectionComponent } from './components/sections/service-section/service-section.component';



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
    ServiceSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot(DisqusConfig.shortname),
    BrowserAnimationsModule,
    CarouselModule,
    LightboxModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [
    HeaderService,
    HomeService,
    PortfolioService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
