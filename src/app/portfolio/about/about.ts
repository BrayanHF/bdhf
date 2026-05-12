import { Component } from '@angular/core';
import { FloatingShape } from '../../shared/components/decoration/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/decoration/gradient-orb/gradient-orb';

@Component({
  selector: 'about-section',
  imports: [FloatingShape, GradientOrb],
  templateUrl: './about.html',
})
export class About {}
