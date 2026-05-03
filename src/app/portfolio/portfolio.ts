import { Component, OnInit, OnDestroy } from '@angular/core';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NavButton } from '../shared/components/nav-button/nav-button';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-portfolio',
  imports: [Hero, NavButton, Experience, Projects],
  templateUrl: './portfolio.html',
})
export default class Portfolio implements OnInit, OnDestroy {
  private lenis: Lenis | null = null;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(this.onRaf);
    gsap.ticker.lagSmoothing(0);
  }

  ngOnDestroy(): void {
    gsap.ticker.remove(this.onRaf);
    this.lenis?.destroy();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  private readonly onRaf = (time: number): void => {
    this.lenis?.raf(time * 1000);
  };
}
