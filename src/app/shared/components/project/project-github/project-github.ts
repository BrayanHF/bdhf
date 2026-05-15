import { Component, input } from '@angular/core';
import { GitHubLink } from '../../../interfaces/github-link.interface';
import { FloatingShape } from '../../decoration/floating-shape/floating-shape';

@Component({
  selector: 'project-github',
  imports: [FloatingShape],
  templateUrl: './project-github.html',
})
export class ProjectGithub {
  readonly hrefs = input.required<GitHubLink[]>();
}
