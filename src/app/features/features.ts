import { Component } from '@angular/core';

import { NavBottom } from '../shared/components/nav-buttom/nav-bottom';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-features',
  imports: [
    NavBottom,
    Hero
  ],
  templateUrl: './features.html',
})
export default class Features {

}
