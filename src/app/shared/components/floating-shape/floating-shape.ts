import { Component, Input, ElementRef, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

export type FloatingShapeType = 'circle' | 'rounded' | 'square';

@Component({
  selector: 'floating-shape',
  standalone: true,
  template: `
    <div
      #shape
      class="absolute pointer-events-none"
      [style.top]="top ?? undefined"
      [style.right]="right ?? undefined"
      [style.bottom]="bottom ?? undefined"
      [style.left]="left ?? undefined"
      [style.width.px]="size"
      [style.height.px]="size"
      [style.backgroundColor]="color"
      [style.opacity]="opacity"
      [style.borderRadius]="borderRadius"
      [style.transform]="transform"
      [style.filter]="blur ? 'blur(' + blur + 'px)' : undefined"
    ></div>
  `,
})
export class FloatingShape implements AfterViewInit, OnDestroy {
  @ViewChild('shape') shapeRef!: ElementRef<HTMLDivElement>;

  // Position / Appearance
  @Input() top?: string;
  @Input() right?: string;
  @Input() bottom?: string;
  @Input() left?: string;
  @Input() size: number = 16;
  @Input() shape: FloatingShapeType = 'circle';
  @Input() color: string = '#ffffff';
  @Input() opacity: number = 0.4;
  @Input() blur?: number;
  @Input() rotation: number = 0;
  @Input() translate?: string;

  // Animation
  @Input() animate: boolean = true;
  @Input() animRange: number = 50;
  @Input() animRotationRange: number = 25;
  @Input() animDurationMin: number = 4;
  @Input() animDurationMax: number = 8;
  @Input() animDelay: number = 0;
  @Input() animEase: string = 'sine.inOut';

  private tween: gsap.core.Tween | null = null;

  ngAfterViewInit(): void {
    if (this.animate && this.shapeRef) {
      this.tween = gsap.to(this.shapeRef.nativeElement, {
        x: `random(-${this.animRange}, ${this.animRange})`,
        y: `random(-${this.animRange}, ${this.animRange})`,
        rotate: `random(-${this.animRotationRange}, ${this.animRotationRange})`,
        duration: `random(${this.animDurationMin}, ${this.animDurationMax})`,
        repeat: -1,
        yoyo: true,
        ease: this.animEase,
        delay: this.animDelay,
      });
    }
  }

  ngOnDestroy(): void {
    this.tween?.kill();
  }

  get borderRadius(): string {
    switch (this.shape) {
      case 'circle':
        return '50%';
      case 'rounded':
        return '25%';
      case 'square':
        return '0%';
      default:
        return '50%';
    }
  }

  get transform(): string {
    const parts: string[] = [];
    if (this.rotation !== 0) {
      parts.push(`rotate(${this.rotation}deg)`);
    }
    if (this.translate) {
      parts.push(this.translate);
    }
    return parts.join(' ');
  }
}
