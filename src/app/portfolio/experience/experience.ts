import { Component } from '@angular/core';
import { ExperienceCard } from '../../shared/components/cards/experience-card/experience-card';
import { FloatingShapes } from '../../shared/components/decoration/floating-shapes/floating-shapes';
import { GradientOrbs } from '../../shared/components/decoration/gradient-orb/gradient-orbs';
import { experience_list } from '../utils/portfolio/experience-list';

@Component({
  selector: 'experience-section',
  imports: [ExperienceCard, FloatingShapes, GradientOrbs],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experiences = experience_list;
}
