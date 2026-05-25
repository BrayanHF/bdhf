import { Component } from '@angular/core';

@Component({
  selector: 'defer-section',
  imports: [],
  template: ` @defer (on viewport) {
      <ng-content />
    } @placeholder {
      <div class="flex justify-center items-center">
        <div class="w-[95%] h-[500px] animate-pulse rounded-xl bg-neutral-950"></div>
      </div>
    }`,
})
export class DeferSection {}
