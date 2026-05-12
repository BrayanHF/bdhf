import { Component, inject } from '@angular/core';
import { LucideAngularModule, MoveLeft } from 'lucide-angular';
import { Location } from '@angular/common';

@Component({
  selector: 'back-button',
  imports: [LucideAngularModule],
  templateUrl: './back-button.html',
  styleUrl: './back-button.scss',
})
export class BackButton {
  readonly backIcon = MoveLeft;

  private location = inject(Location);

  protected goBack() {
    this.location.back();
  }
}
