import { Component, input } from '@angular/core';
import { StackCategory } from '../../../interfaces/stack-category.interface';
import { FloatingShape } from '../../decoration/floating-shape/floating-shape';

@Component({
  selector: 'project-techs',
  imports: [FloatingShape],
  templateUrl: './project-techs.html',
})
export class ProjectTechs {
  readonly techCategories = input.required<StackCategory[]>();
}
