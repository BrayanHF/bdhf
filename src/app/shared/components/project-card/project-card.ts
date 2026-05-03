import { Component, input } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly title = input.required<string>();
  readonly category = input.required<string>();
  readonly description = input.required<string>();
  readonly techs = input.required<string[]>();
}
