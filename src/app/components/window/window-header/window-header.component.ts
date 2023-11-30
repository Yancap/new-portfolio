import { Component, Input } from '@angular/core';

@Component({
  selector: 'window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.scss']
})
export class WindowHeaderComponent {
  @Input() title!: string | null;
  @Input() color!: "blue" | "orange" | "purple" | "pink" | "green" | "deep-green";
  @Input() icon!: "globe" | "prompt" ;
}
