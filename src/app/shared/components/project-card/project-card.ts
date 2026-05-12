import { Component, input } from '@angular/core';
import { ProjectEntry } from '../../interfaces/project.interface';
import { TechCard } from '../tech-card/tech-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project-card',
  imports: [TechCard, RouterLink],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<ProjectEntry>();
}
