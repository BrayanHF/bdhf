import { Component, input } from '@angular/core';
import { GitHubLink } from '../../../interfaces/github-link.interface';
import { FloatingShapes } from '../../decoration/floating-shapes/floating-shapes';

@Component({
  selector: 'project-github',
  imports: [FloatingShapes],
  templateUrl: './project-github.html',
})
export class ProjectGithub {
  readonly hrefs = input.required<GitHubLink[]>();
}
