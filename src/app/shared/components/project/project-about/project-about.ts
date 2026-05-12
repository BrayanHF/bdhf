import { Component, input } from '@angular/core';

@Component({
  selector: 'project-about',
  imports: [],
  templateUrl: './project-about.html',
})
export class ProjectAbout {
  readonly about = input.required<string[]>();
}
