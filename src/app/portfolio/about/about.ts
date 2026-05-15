import { Component } from '@angular/core';
import { FloatingShapes } from '../../shared/components/decoration/floating-shapes/floating-shapes';
import { GradientOrbs } from '../../shared/components/decoration/gradient-orb/gradient-orbs';

@Component({
  selector: 'about-section',
  imports: [FloatingShapes, GradientOrbs],
  templateUrl: './about.html',
})
export class About {}
