import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'hero-section',
  imports: [],
  templateUrl: './hero.html',
})
export class Hero implements OnInit {
  ngOnInit(): void {
    this.animateEntrance();
    this.animateFloatingElements();
  }

  private animateEntrance(): void {
    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', duration: 0.9 } });

    tl.from('.hero-status', { opacity: 0, y: 60, clearProps: 'opacity,transform' })
      .from('.hero-title-line', { opacity: 0, y: 80, stagger: 0.15, clearProps: 'opacity,transform' }, '-=0.5')
      .from('.hero-description', { opacity: 0, y: 50, clearProps: 'opacity,transform' }, '-=0.45')
      .from('.hero-buttons a', { opacity: 0, y: 40, stagger: 0.1, clearProps: 'opacity,transform' }, '-=0.4')
      .from('.hero-scroll', { opacity: 0, y: 20, duration: 0.6, clearProps: 'opacity,transform' }, '-=0.2');
  }

  private animateFloatingElements(): void {
    const shapes = gsap.utils.toArray('.float-shape') as HTMLElement[];
    shapes.forEach((el, i) => {
      gsap.to(el, {
        x: `random(-60, 60)`,
        y: `random(-60, 60)`,
        rotate: `random(-30, 30)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4,
      });
    });
  }

}
