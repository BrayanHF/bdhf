import { Component } from '@angular/core';
import { ExperienceCard } from '../../shared/components/cards/experience-card/experience-card';
import { FloatingShape } from '../../shared/components/decoration/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/decoration/gradient-orb/gradient-orb';
import { experience_list } from '../utils/portfolio/experience-list';

@Component({
  selector: 'experience-section',
  imports: [ExperienceCard, FloatingShape, GradientOrb],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experiences = experience_list;
}
