import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/components/cards/project-card/project-card';
import { FloatingShape } from '../../shared/components/decoration/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/decoration/gradient-orb/gradient-orb';
import { project_list } from '../utils/project-list';

@Component({
  selector: 'projects-section',
  imports: [ProjectCard, FloatingShape, GradientOrb],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = project_list;
}
