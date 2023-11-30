import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { aboutMeResolver } from './guards/about-me.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    resolve: { aboutMe: aboutMeResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
