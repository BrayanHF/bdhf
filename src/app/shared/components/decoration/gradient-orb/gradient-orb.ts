import { Component, input } from '@angular/core';
import { GradientOrbConfig } from '../../../interfaces/gradient-orb-config.interface';

@Component({
  selector: 'gradient-orb',
  standalone: true,
  template: `
    <div
      class="absolute rounded-full pointer-events-none"
      [style.top]="config().top"
      [style.left]="config().left"
      [style.width.px]="config().size"
      [style.height.px]="config().size"
      [style.backgroundColor]="config().color"
      [style.opacity]="config().opacity"
      [style.filter]="'blur(' + config().blur + 'px)'"
      [style.transform]="'translate(-50%, -50%)'"
    ></div>
  `,
})
export class GradientOrb {
  readonly config = input.required<GradientOrbConfig>();
}
