import { Component, input } from '@angular/core';
import { FloatingShapes } from '../../decoration/floating-shapes/floating-shapes';

@Component({
  selector: 'project-structure-img',
  imports: [FloatingShapes],
  templateUrl: './project-structure-img.html',
})
export class ProjectStructureImg {
  readonly label = input.required<string>();
  readonly img = input.required<string>();
}
