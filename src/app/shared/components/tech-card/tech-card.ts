import { afterNextRender, Component, effect, ElementRef, inject, input, OnDestroy, viewChild } from '@angular/core';
import gsap from 'gsap';
import { Tech } from '../../interfaces/tech.interface';
import { TechIcon } from './tech-icon';
import { TechCardsState } from './tech-cards.state';

@Component({
  selector: 'tech-card',
  imports: [TechIcon],
  templateUrl: './tech-card.html',
})
export class TechCard implements OnDestroy {
  readonly tech = input.required<Tech>();
  readonly showDescription = input(false);

  private isActiveByClick = false;
  private cardInnerRef = viewChild<ElementRef<HTMLDivElement>>('cardInner');
  private ctx: gsap.Context | null = null;
  private hoverTl: gsap.core.Timeline | null = null;
  private state = inject(TechCardsState);

  constructor() {
    afterNextRender(() => {
      this.setupAnimation();
    });

    effect(() => {
      const active = this.state.activeName();
      if (active !== this.tech().name && this.isActiveByClick) {
        this.hoverTl?.reverse();
        this.isActiveByClick = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  private setupAnimation(): void {
    const inner = this.cardInnerRef()?.nativeElement;
    if (!inner) return;

    this.ctx = gsap.context(() => {
      this.hoverTl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.1, ease: 'power2.out' },
      });

      this.hoverTl.to(inner, { rotateY: 180 });

      const wrapper = inner.parentElement;
      if (!wrapper) return;

      wrapper.addEventListener('mouseenter', () => {
        this.hoverTl?.play();
      });

      wrapper.addEventListener('click', () => {
        const myName = this.tech().name;
        const currentActive = this.state.activeName();

        if (currentActive === myName) {
          this.state.activeName.set(null);
          this.isActiveByClick = false;
          this.hoverTl?.reverse();
        } else {
          this.state.activeName.set(myName);
          this.isActiveByClick = true;
          this.hoverTl?.play();
        }
      });

      wrapper.addEventListener('mouseleave', () => {
        if (this.state.activeName() === this.tech().name) {
          this.state.activeName.set(null);
        }
        this.isActiveByClick = false;
        this.hoverTl?.reverse();
      });
    }, inner);
  }
}
