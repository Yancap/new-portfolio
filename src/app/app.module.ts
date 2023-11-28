import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ClockComponent } from './components/header/clock/clock.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import '@angular/common/locales/global/pt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClockComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: "pt"} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
