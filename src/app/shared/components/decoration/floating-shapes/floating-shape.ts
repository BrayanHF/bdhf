import { AfterViewInit, Component, ElementRef, input, OnDestroy, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { FloatingShapeConfig } from '../../../interfaces/floating-shape-config.interface';

@Component({
  selector: 'floating-shape',
  standalone: true,
  template: `
    <div
      #shape
      class="absolute pointer-events-none"
      [style.top]="config().top"
      [style.right]="config().right"
      [style.bottom]="config().bottom"
      [style.left]="config().left"
      [style.width.px]="config().size"
      [style.height.px]="config().size"
      [style.backgroundColor]="config().color"
      [style.opacity]="config().opacity"
      [style.borderRadius]="borderRadius"
      [style.transform]="transform"
      [style.filter]="config().blur ? 'blur(' + config().blur + 'px)' : undefined"
    ></div>
  `,
})
export class FloatingShape implements AfterViewInit, OnDestroy {
  @ViewChild('shape') shapeRef!: ElementRef<HTMLDivElement>;

  readonly config = input.required<FloatingShapeConfig>();
  private tween: gsap.core.Tween | null = null;

  ngAfterViewInit(): void {
    if (this.shapeRef) {
      this.tween = gsap.to(this.shapeRef.nativeElement, {
        x: `random(-${this.config().animRange}, ${this.config().animRange})`,
        y: `random(-${this.config().animRange}, ${this.config().animRange})`,
        rotate: `random(-${this.config().animRotationRange}, ${this.config().animRotationRange})`,
        duration: `random(${this.config().animDurationMin}, ${this.config().animDurationMax})`,
        repeat: -1,
        yoyo: true,
        ease: this.config().animEase,
        delay: this.config().animDelay,
      });
    }
  }

  ngOnDestroy(): void {
    this.tween?.kill();
  }

  get borderRadius(): string {
    switch (this.config().shape) {
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
    if (this.config().rotation !== 0) {
      parts.push(`rotate(${this.config().rotation}deg)`);
    }
    return parts.join(' ');
  }
}
