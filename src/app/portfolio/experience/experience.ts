import { Component } from '@angular/core';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card';
import { FloatingShape } from '../../shared/components/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/gradient-orb/gradient-orb';
import { experience_list } from '../utils/experience-list';

@Component({
  selector: 'experience-section',
  imports: [ExperienceCard, FloatingShape, GradientOrb],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experiences = experience_list;
}
