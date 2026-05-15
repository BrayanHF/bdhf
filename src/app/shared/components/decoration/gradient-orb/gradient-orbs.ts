import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GradientOrb } from './gradient-orb';
import { GradientOrbPosition } from '../../../interfaces/gradient-orb-config.interface';
import { generateOrbConfigs } from './gradient-orb.utils';

@Component({
  selector: 'gradient-orbs',
  standalone: true,
  imports: [GradientOrb],
  template: `
    @for (config of orbConfigs; track $index) {
      <gradient-orb [config]="config" />
    }
  `,
  host: {
    class: 'absolute inset-0 pointer-events-none overflow-hidden',
  },
})
export class GradientOrbs implements OnInit, OnChanges {
  readonly count = input<number>(3);
  readonly position = input<GradientOrbPosition>('center');

  protected orbConfigs: any[] = [];

  ngOnInit(): void {
    this.generate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count'] || changes['position']) {
      this.generate();
    }
  }

  private generate(): void {
    const safeCount = Math.max(0, Math.floor(this.count()));
    this.orbConfigs = generateOrbConfigs(safeCount, this.position());
  }
}
