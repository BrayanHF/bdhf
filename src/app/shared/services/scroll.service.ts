import { Injectable, inject, signal } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import Lenis from 'lenis';

type ScrollPosition = [number, number];

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private router = inject(Router);
  private lenis: Lenis | null = null;
  private pendingPosition: ScrollPosition | null = null;
  private pendingScrollToTop = false;
  readonly activeSection = signal('hero');

  constructor() {
    this.router.events
      .pipe(filter((event: Event): event is Scroll => event instanceof Scroll))
      .subscribe((event) => {
        if (event.position) {
          this.handleRestore(event.position);
        } else {
          this.handleScrollToTop();
        }
      });
  }

  public setLenis(lenis: Lenis): void {
    this.lenis = lenis;

    if (this.pendingPosition) {
      this.applyScroll(this.pendingPosition[0], this.pendingPosition[1]);
      this.pendingPosition = null;
      this.pendingScrollToTop = false;
    } else if (this.pendingScrollToTop) {
      this.applyScroll(0, 0);
      this.pendingScrollToTop = false;
    }
  }

  public getLenis(): Lenis | null {
    return this.lenis;
  }

  public scrollTo(target: string, options?: { offset?: number; duration?: number }): void {
    if (!this.lenis) return;

    this.lenis.scrollTo(target, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.2,
    });
  }

  private handleScrollToTop(): void {
    if (this.lenis) {
      this.applyScroll(0, 0);
    } else {
      this.pendingScrollToTop = true;
      this.fallbackScrollToTop();
    }
  }

  private handleRestore(position: ScrollPosition): void {
    if (this.lenis) {
      this.applyScroll(position[0], position[1]);
    } else {
      this.pendingPosition = position;
      this.fallbackRestore(position);
    }
  }

  private applyScroll(x: number, y: number): void {
    if (this.lenis) {
      this.lenis.scrollTo(y, { duration: 0 });
    } else {
      window.scrollTo(x, y);
    }
  }

  private fallbackScrollToTop(): void {
    requestAnimationFrame(() => {
      if (!this.lenis && this.pendingScrollToTop) {
        window.scrollTo(0, 0);
      }
    });
  }

  private fallbackRestore(position: ScrollPosition): void {
    requestAnimationFrame(() => {
      if (!this.lenis && this.pendingPosition) {
        window.scrollTo(position[0], position[1]);
      }
    });
  }

  public observeSections(sectionIds: string[]): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              this.activeSection.set(id);
            }
          }
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
  }
}
