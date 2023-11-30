import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'window-project',
  templateUrl: './window-project.component.html',
  styleUrls: ['./window-project.component.scss']
})
export class WindowProjectComponent {
  @Input() public project!: Project;
}
