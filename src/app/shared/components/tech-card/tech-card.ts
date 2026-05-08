import { afterNextRender, Component, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import gsap from 'gsap';
import { Tech } from '../../interfaces/tech.interface';
import { TechIcon } from './tech-icon';

@Component({
  selector: 'tech-card',
  imports: [TechIcon],
  templateUrl: './tech-card.html',
})
export class TechCard implements OnDestroy {
  readonly tech = input.required<Tech>();
  readonly showDescription = input(false);

  private cardInnerRef = viewChild<ElementRef<HTMLDivElement>>('cardInner');
  private ctx: gsap.Context | null = null;

  constructor() {
    afterNextRender(() => {
      this.setupAnimation();
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  private setupAnimation(): void {
    const inner = this.cardInnerRef()?.nativeElement;
    if (!inner) return;

    this.ctx = gsap.context(() => {
      const hoverTl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.1, ease: 'power2.out' },
      });

      hoverTl.to(inner, { rotateY: 180 });

      const wrapper = inner.parentElement;
      if (wrapper) {
        wrapper.addEventListener('mouseenter', () => hoverTl.play());
        wrapper.addEventListener('mouseleave', () => hoverTl.reverse());
      }
    }, inner);
  }
}
