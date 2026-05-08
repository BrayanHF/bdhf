import { Component, Input } from '@angular/core';

@Component({
  selector: 'gradient-orb',
  standalone: true,
  template: `
    <div
      class="absolute rounded-full pointer-events-none"
      [style.top]="top ?? undefined"
      [style.right]="right ?? undefined"
      [style.bottom]="bottom ?? undefined"
      [style.left]="left ?? undefined"
      [style.width.px]="size"
      [style.height.px]="size"
      [style.backgroundColor]="color"
      [style.opacity]="opacity"
      [style.filter]="'blur(64px)'"
      [style.transform]="translate ?? undefined"
    ></div>
  `,
})
export class GradientOrb {
  @Input() top?: string;
  @Input() right?: string;
  @Input() bottom?: string;
  @Input() left?: string;
  @Input() size: number = 400;
  @Input() color: string = '#ffffff';
  @Input() opacity: number = 0.03;
  @Input() translate?: string;
}
