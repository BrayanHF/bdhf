import { Component, input } from '@angular/core';
import { StackCategory } from '../../../interfaces/stack-category.interface';
import { FloatingShapes } from '../../decoration/floating-shapes/floating-shapes';

@Component({
  selector: 'project-techs',
  imports: [FloatingShapes],
  templateUrl: './project-techs.html',
})
export class ProjectTechs {
  readonly techCategories = input.required<StackCategory[]>();
}
