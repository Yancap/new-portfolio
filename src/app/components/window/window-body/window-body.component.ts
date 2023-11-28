import { Component, Input } from '@angular/core';

@Component({
  selector: 'window-body',
  templateUrl: './window-body.component.html',
  styleUrls: ['./window-body.component.scss']
})
export class WindowBodyComponent {
  @Input() color!: "dark" | "white";
}
