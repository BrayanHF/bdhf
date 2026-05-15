import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FloatingShape } from './floating-shape';
import { generateConfig } from './floating-shapes.utils';
import { FloatingShapeConfig } from '../../../interfaces/floating-shape-config.interface';

@Component({
  selector: 'floating-shapes',
  standalone: true,
  imports: [FloatingShape],
  template: `
    @for (config of shapeConfigs; track $index) {
      <floating-shape [config]="config" />
    }
  `,
  host: {
    class: 'absolute inset-0 pointer-events-none overflow-hidden',
  },
})
export class FloatingShapes implements OnInit, OnChanges {
  readonly count = input<number>(6);
  readonly discreet = input<boolean>(false);

  protected shapeConfigs: FloatingShapeConfig[] = [];

  ngOnInit(): void {
    this.generate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count'] || changes['discreet']) {
      this.generate();
    }
  }

  private generate(): void {
    const safeCount = Math.max(0, Math.floor(this.count()));
    this.shapeConfigs = Array.from({ length: safeCount }, () => generateConfig(this.discreet()));
  }
}
