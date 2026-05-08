import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { FloatingShape } from '../../shared/components/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/gradient-orb/gradient-orb';
import { project_list } from '../utils/project-list';

@Component({
  selector: 'projects-section',
  imports: [ProjectCard, FloatingShape, GradientOrb],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = project_list;
}
