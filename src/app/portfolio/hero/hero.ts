import { Component, OnInit, inject } from '@angular/core';
import gsap from 'gsap';
import { FloatingShapes } from '../../shared/components/decoration/floating-shapes/floating-shapes';
import { GradientOrbs } from '../../shared/components/decoration/gradient-orb/gradient-orbs';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'hero-section',
  imports: [FloatingShapes, GradientOrbs],
  templateUrl: './hero.html',
})
export class Hero implements OnInit {
  private scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.animateEntrance();
  }

  public navigateTo(event: Event, target: string): void {
    event.preventDefault();
    this.scrollService.scrollTo(`#${target}`);
  }

  private animateEntrance(): void {
    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', duration: 0.9 } });

    tl.from('.hero-status', { opacity: 0, y: 60, clearProps: 'opacity,transform' })
      .from('.hero-title-line', { opacity: 0, y: 60, clearProps: 'opacity,transform' }, '-=0.5')
      .from('.hero-description', { opacity: 0, y: 60, clearProps: 'opacity,transform' }, '-=0.45')
      .from('.hero-buttons', { opacity: 0, y: 60, clearProps: 'opacity,transform' }, '-=0.45');
  }
}
