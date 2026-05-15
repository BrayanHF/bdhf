import { Component } from '@angular/core';
import { FloatingShapes } from '../../shared/components/decoration/floating-shapes/floating-shapes';
import { GradientOrbs } from '../../shared/components/decoration/gradient-orb/gradient-orbs';
import { Download, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'about-section',
  imports: [FloatingShapes, GradientOrbs, LucideAngularModule],
  templateUrl: './about.html',
})
export class About {
  protected readonly DownloadIcon = Download;
}
