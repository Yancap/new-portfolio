import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public hours: number = Date.now();
  constructor() { }
  ngOnInit() {
    setInterval(() => {
      this.hours = Date.now();
    }, 1000)
  }
}
