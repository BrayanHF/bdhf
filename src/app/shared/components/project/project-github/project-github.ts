import { Component, input } from '@angular/core';
import { GitHubLink } from '../../../interfaces/github-link.interface';

@Component({
  selector: 'project-github',
  imports: [],
  templateUrl: './project-github.html',
})
export class ProjectGithub {
  readonly hrefs = input.required<GitHubLink[]>();
}
