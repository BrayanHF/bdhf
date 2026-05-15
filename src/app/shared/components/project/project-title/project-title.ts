import { Component, input } from '@angular/core';
import { FloatingShapes } from '../../decoration/floating-shapes/floating-shapes';

@Component({
  selector: 'project-title',
  imports: [FloatingShapes],
  templateUrl: './project-title.html',
})
export class ProjectTitle {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
