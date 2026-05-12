import { Component, input } from '@angular/core';

@Component({
  selector: 'project-structure-img',
  imports: [],
  templateUrl: './project-structure-img.html',
})
export class ProjectStructureImg {
  readonly label = input.required<string>();
  readonly imgNoFormat = input.required<string>();
}
