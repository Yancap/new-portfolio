import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  actualRoute!: string;

  constructor(
    private router: Router
  ){}

  ngDoCheck() {
    this.actualRoute = this.router.url
    console.log(this.actualRoute);

  }
}
