import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TechCardsState {
  readonly activeName = signal<string | null>(null);
}
