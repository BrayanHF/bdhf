import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  OnDestroy,
  signal,
  viewChild,
} from '@angular/core';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import gsap from 'gsap';
import { CarouselImage } from '../../../interfaces/carousel-image.interface';
import { FloatingShape } from '../../decoration/floating-shape/floating-shape';

@Component({
  selector: 'project-carousel',
  imports: [LucideAngularModule, FloatingShape],
  templateUrl: './project-carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCarousel implements OnDestroy {
  readonly images = input.required<CarouselImage[]>();
  readonly currentIndex = signal(0);

  readonly trackRef = viewChild.required<ElementRef<HTMLDivElement>>('track');

  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  private isAnimating = false;
  private domIndex = 1;
  private touchStartX = 0;
  private resizeObserver: ResizeObserver | null = null;

  private readonly DURATION = 0.6;

  constructor() {
    afterNextRender(() => {
      this.initResizeObserver();
      this.setupClones();
    });

    effect(() => {
      const _ = this.images();
      if (!this.trackRef()) return;
      requestAnimationFrame(() => this.setupClones());
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    gsap.killTweensOf(this.trackRef().nativeElement);
  }

  goToPrevious(): void {
    if (this.isAnimating) return;
    const count = this.images().length;
    if (count <= 1) return;
    this.moveTo(this.domIndex - 1, (this.currentIndex() - 1 + count) % count);
  }

  goToNext(): void {
    if (this.isAnimating) return;
    const count = this.images().length;
    if (count <= 1) return;
    this.moveTo(this.domIndex + 1, (this.currentIndex() + 1) % count);
  }

  goToSlide(realIndex: number): void {
    if (this.isAnimating || realIndex === this.currentIndex()) return;
    this.moveTo(realIndex + 1, realIndex);
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    const threshold = 50;

    if (deltaX > threshold) {
      this.goToPrevious();
    } else if (deltaX < -threshold) {
      this.goToNext();
    }
  }

  private get slideWidth(): number {
    return this.trackRef().nativeElement.parentElement?.clientWidth || 0;
  }

  private get animDuration(): number {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReduced ? 0 : this.DURATION;
  }

  private initResizeObserver(): void {
    const container = this.trackRef().nativeElement.parentElement;
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => this.refreshPosition());
    this.resizeObserver.observe(container);
  }

  private refreshPosition(): void {
    if (this.isAnimating) return;
    gsap.set(this.trackRef().nativeElement, { x: -this.domIndex * this.slideWidth });
  }

  private setupClones(): void {
    const track = this.trackRef().nativeElement;
    gsap.killTweensOf(track);

    track.querySelectorAll('[data-clone]').forEach((el) => el.remove());

    const slides = Array.from(track.children) as HTMLElement[];
    const count = slides.length;
    if (count === 0) return;

    const lastClone = slides[count - 1].cloneNode(true) as HTMLElement;
    lastClone.setAttribute('data-clone', 'true');
    track.insertBefore(lastClone, slides[0]);

    const firstClone = slides[0].cloneNode(true) as HTMLElement;
    firstClone.setAttribute('data-clone', 'true');
    track.appendChild(firstClone);

    this.domIndex = 1;
    this.currentIndex.set(0);
    this.refreshPosition();
  }

  private moveTo(newDomIndex: number, newRealIndex: number): void {
    this.isAnimating = true;
    const track = this.trackRef().nativeElement;

    gsap.to(track, {
      x: -newDomIndex * this.slideWidth,
      duration: this.animDuration,
      ease: 'power3.inOut',
      onComplete: () => {
        this.domIndex = newDomIndex;
        this.currentIndex.set(newRealIndex);
        this.fixWrap();
        this.isAnimating = false;
      },
    });
  }

  private fixWrap(): void {
    const count = this.images().length;
    const track = this.trackRef().nativeElement;

    if (this.domIndex >= count + 1) {
      this.domIndex = 1;
      gsap.set(track, { x: -this.slideWidth });
    } else if (this.domIndex <= 0) {
      this.domIndex = count;
      gsap.set(track, { x: -count * this.slideWidth });
    }
  }
}
