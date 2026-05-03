import { Component, input } from '@angular/core';

@Component({
  selector: 'experience-card',
  imports: [],
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  readonly company = input.required<string>();
  readonly role = input.required<string>();
  readonly periodStart = input.required<string>();
  readonly periodEnd = input.required<string>();
  readonly description = input.required<string[]>();
}
