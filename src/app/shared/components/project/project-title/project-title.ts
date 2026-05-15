import { Component, input } from '@angular/core';
import { FloatingShape } from '../../decoration/floating-shape/floating-shape';

@Component({
  selector: 'project-title',
  imports: [FloatingShape],
  templateUrl: './project-title.html',
})
export class ProjectTitle {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
