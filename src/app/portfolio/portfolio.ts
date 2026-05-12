import { Component, OnInit, OnDestroy, inject, afterNextRender } from '@angular/core';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NavButton } from '../shared/components/buttons/nav-button/nav-button';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Stack } from './stack/stack';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ScrollService } from '../shared/services/scroll.service';

@Component({
  selector: 'app-portfolio',
  imports: [Hero, NavButton, Experience, Projects, Stack, About, Contact],
  templateUrl: './portfolio.html',
})
export default class Portfolio implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);

  private lenis: Lenis | null = null;

  private readonly onRaf = (time: number): void => {
    this.lenis?.raf(time * 1000);
  };

  constructor() {
    afterNextRender(() => {
      this.scrollService.observeSections([
        'hero',
        'experience',
        'stack',
        'projects',
        'about',
        'contact',
      ]);
    });
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    this.lenis.on('scroll', ScrollTrigger.update);
    this.scrollService.setLenis(this.lenis);

    gsap.ticker.add(this.onRaf);
    gsap.ticker.lagSmoothing(0);
  }

  ngOnDestroy(): void {
    gsap.ticker.remove(this.onRaf);
    this.lenis?.destroy();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
}
