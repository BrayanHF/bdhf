import { Component, inject } from '@angular/core';
import { LucideAngularModule, MoveLeft } from 'lucide-angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'back-button',
  imports: [LucideAngularModule],
  templateUrl: './back-button.html',
  styleUrl: './back-button.scss',
})
export class BackButton {
  readonly backIcon = MoveLeft;

  private location = inject(Location);
  private router = inject(Router);

  protected goBack() {
    if (window.history.length > 2) {
      this.location.back();
    } else {
      void this.router.navigate(['/']);
    }
  }
}
