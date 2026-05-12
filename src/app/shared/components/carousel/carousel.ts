import {
  Component,
  ElementRef,
  input,
  signal,
  viewChild,
  OnDestroy,
  afterNextRender,
  ChangeDetectionStrategy,
  effect,
} from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';
import gsap from 'gsap';
import { CarouselImage } from '../../interfaces/carousel-image.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'project-carousel',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel implements OnDestroy {
  readonly images = input.required<CarouselImage[]>();
  readonly currentIndex = signal(0);

  readonly trackRef = viewChild.required<ElementRef<HTMLDivElement>>('track');
  readonly outgoingRef = viewChild.required<ElementRef<HTMLParagraphElement>>('outgoing');
  readonly incomingRef = viewChild.required<ElementRef<HTMLParagraphElement>>('incoming');

  readonly outgoingText = signal('');
  readonly incomingText = signal('');

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  private isAnimating = false;
  private containerWidthCache = 0;
  private resizeObserver: ResizeObserver | null = null;
  private touchStartX = 0;

  constructor(private elRef: ElementRef) {
    afterNextRender(() => {
      this.updateContainerWidth();
      this.resizeObserver = new ResizeObserver(() => this.updateContainerWidth());
      const container = this.trackRef().nativeElement.parentElement;
      if (container) this.resizeObserver.observe(container);
    });

    // Inicializar textos cuando cambian las imágenes o el índice
    effect(() => {
      const imgs = this.images();
      const idx = this.currentIndex();
      if (imgs.length > 0 && idx >= 0 && idx < imgs.length) {
        const desc = imgs[idx].description;
        this.outgoingText.set(desc);
        this.incomingText.set(desc);
      }
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  goToPrevious(): void {
    if (this.isAnimating) return;
    const newIndex = this.currentIndex() === 0 ? this.images().length - 1 : this.currentIndex() - 1;
    this.animateToSlide(newIndex);
  }

  goToNext(): void {
    if (this.isAnimating) return;
    const newIndex = this.currentIndex() === this.images().length - 1 ? 0 : this.currentIndex() + 1;
    this.animateToSlide(newIndex);
  }

  goToSlide(index: number): void {
    if (this.isAnimating || index === this.currentIndex()) return;
    this.animateToSlide(index);
  }

  private updateContainerWidth(): void {
    const container = this.trackRef().nativeElement.parentElement;
    if (container) {
      this.containerWidthCache = container.clientWidth;
      if (!this.isAnimating) {
        gsap.set(this.trackRef().nativeElement, {
          x: -this.containerWidthCache * this.currentIndex(),
        });
      }
    }
  }

  private get containerWidth(): number {
    return this.containerWidthCache || this.trackRef().nativeElement.parentElement!.clientWidth;
  }

  private animateToSlide(newIndex: number): void {
    this.isAnimating = true;
    const track = this.trackRef().nativeElement;
    const outgoingEl = this.outgoingRef().nativeElement;
    const incomingEl = this.incomingRef().nativeElement;

    // Dirección visual del track: si newIndex > current, el track se mueve a la izquierda (1)
    // Si newIndex < current, el track se mueve a la derecha (-1)
    // Esto funciona correctamente incluso en wrap-around
    const direction = newIndex > this.currentIndex() ? 1 : -1;

    const currentDesc = this.images()[this.currentIndex()].description;
    const newDesc = this.images()[newIndex].description;

    this.outgoingText.set(currentDesc);
    this.incomingText.set(newDesc);

    // Posiciones iniciales
    gsap.set(outgoingEl, { xPercent: 0, autoAlpha: 1 });
    gsap.set(incomingEl, { xPercent: direction * 100, autoAlpha: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        this.currentIndex.set(newIndex);
        this.outgoingText.set(newDesc);
        gsap.set(outgoingEl, { xPercent: 0 });
        gsap.set(incomingEl, { xPercent: 0 });
        this.isAnimating = false;
      },
    });

    // Todo anima a la vez durante 0.6s
    const duration = 0.6;
    const ease = 'power3.inOut';

    tl.to(outgoingEl, { xPercent: -direction * 100, duration, ease }, 0);
    tl.to(incomingEl, { xPercent: 0, duration, ease }, 0);
    tl.to(track, { x: -this.containerWidth * newIndex, duration, ease }, 0);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - this.touchStartX;
    const threshold = 50;

    if (deltaX > threshold) {
      this.goToPrevious();
    } else if (deltaX < -threshold) {
      this.goToNext();
    }
  }
}
