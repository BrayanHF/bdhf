import { Component } from '@angular/core';
import { FloatingShape } from '../../shared/components/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/gradient-orb/gradient-orb';

@Component({
  selector: 'about-section',
  imports: [FloatingShape, GradientOrb],
  templateUrl: './about.html',
})
export class About {}
