import { Component, Input } from '@angular/core';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() public aside = false;
  constructor() {
    console.log(this.aside);

  }
}
