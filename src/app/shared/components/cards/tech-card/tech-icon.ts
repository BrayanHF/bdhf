import { Component, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Tech } from '../../../interfaces/tech.interface';

@Component({
  selector: 'tech-icon',
  standalone: true,
  template: `<img [src]="safeUrl" [alt]="tech().name" class="w-full h-full object-contain" />`,
})
export class TechIcon {
  readonly tech = input.required<Tech>();

  constructor(private sanitizer: DomSanitizer) {}

  get safeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.tech().localImage);
  }
}
