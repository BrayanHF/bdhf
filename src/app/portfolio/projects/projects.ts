import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectCard } from '../../shared/components/cards/project-card/project-card';
import { FloatingShapes } from '../../shared/components/decoration/floating-shapes/floating-shapes';
import { GradientOrbs } from '../../shared/components/decoration/gradient-orb/gradient-orbs';
import { project_list } from '../utils/portfolio/project-list';

@Component({
  selector: 'projects-section',
  imports: [ProjectCard, FloatingShapes, GradientOrbs],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects {
  protected readonly projects = project_list;
}
