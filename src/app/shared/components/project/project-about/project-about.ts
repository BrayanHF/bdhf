import { Component, input } from '@angular/core';
import { FloatingShapes } from '../../decoration/floating-shapes/floating-shapes';

@Component({
  selector: 'project-about',
  imports: [FloatingShapes],
  templateUrl: './project-about.html',
})
export class ProjectAbout {
  readonly about = input.required<string[]>();
}
