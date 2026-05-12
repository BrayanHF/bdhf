import { Component, input } from '@angular/core';

@Component({
  selector: 'project-title',
  imports: [],
  templateUrl: './project-title.html',
})
export class ProjectTitle {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}
