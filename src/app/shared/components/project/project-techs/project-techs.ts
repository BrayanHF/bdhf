import { Component, input } from '@angular/core';
import { StackCategory } from '../../../interfaces/stack-category.interface';

@Component({
  selector: 'project-techs',
  imports: [],
  templateUrl: './project-techs.html',
})
export class ProjectTechs {
  readonly techCategories = input.required<StackCategory[]>();
}
