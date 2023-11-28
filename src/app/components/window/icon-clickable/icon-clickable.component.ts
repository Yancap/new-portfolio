import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-clickable',
  templateUrl: './icon-clickable.component.html',
  styleUrls: ['./icon-clickable.component.scss']
})
export class IconClickableComponent {
  @Input() text!: string;
  @Input() icon!: string;
}
