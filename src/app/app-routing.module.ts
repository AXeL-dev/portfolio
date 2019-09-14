import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { Error404Component } from './components/error404/error404.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:page', component: BlogComponent },
  { path: 'blog/post', component: PostComponent },
  { path: 'blog/post/:id', component: PostComponent },
  //{ path: 'post.html', component: PostComponent }, // handle old 'riotjs-portfolio' post routes also
  { path: 'blog/tag/:tag', component: BlogComponent },
  { path: 'blog/tag/:tag/:page', component: BlogComponent },
  { path: '', redirectTo: 'home' },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    //anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
