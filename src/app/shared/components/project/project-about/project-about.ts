import { Component, input } from '@angular/core';
import { FloatingShape } from '../../decoration/floating-shape/floating-shape';

@Component({
  selector: 'project-about',
  imports: [FloatingShape],
  templateUrl: './project-about.html',
})
export class ProjectAbout {
  readonly about = input.required<string[]>();
}
