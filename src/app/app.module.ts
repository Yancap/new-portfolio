import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ClockComponent } from './components/header/clock/clock.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { WindowComponent } from './components/window/window.component';
import { WindowHeaderComponent } from './components/window/window-header/window-header.component';
import { WindowBodyComponent } from './components/window/window-body/window-body.component';
import { IconClickableComponent } from './components/window/icon-clickable/icon-clickable.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AbilityComponent } from './components/ability/ability.component';
import { ProjectComponent } from './components/project/project.component';
import { WindowFooterComponent } from './components/window/window-footer/window-footer.component';
import { WindowAsideComponent } from './components/window/window-aside/window-aside.component';
import { WindowProjectComponent } from './components/window-project/window-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClockComponent,
    NavbarComponent,
    PortfolioComponent,
    PresentationComponent,
    WindowComponent,
    WindowHeaderComponent,
    WindowBodyComponent,
    IconClickableComponent,
    ExperienceComponent,
    AbilityComponent,
    ProjectComponent,
    WindowFooterComponent,
    WindowAsideComponent,
    WindowProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
