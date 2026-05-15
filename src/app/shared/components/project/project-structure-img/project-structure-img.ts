import { Component, input } from '@angular/core';
import { FloatingShape } from '../../decoration/floating-shape/floating-shape';

@Component({
  selector: 'project-structure-img',
  imports: [FloatingShape],
  templateUrl: './project-structure-img.html',
})
export class ProjectStructureImg {
  readonly label = input.required<string>();
  readonly imgNoFormat = input.required<string>();
}
