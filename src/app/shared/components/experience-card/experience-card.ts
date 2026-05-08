import { Component, input } from '@angular/core';
import { ExperienceEntry } from '../../interfaces/experience.interface';

@Component({
  selector: 'experience-card',
  imports: [],
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  readonly experience = input.required<ExperienceEntry>();
}
