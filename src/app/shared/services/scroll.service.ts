import { Injectable, signal } from '@angular/core';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private lenis: Lenis | null = null;
  readonly activeSection = signal('hero');

  public setLenis(lenis: Lenis): void {
    this.lenis = lenis;
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
