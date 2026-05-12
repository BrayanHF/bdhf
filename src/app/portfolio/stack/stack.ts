import { Component } from '@angular/core';
import { FloatingShape } from '../../shared/components/decoration/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/decoration/gradient-orb/gradient-orb';
import { StackCategory } from '../../shared/interfaces/stack-category.interface';
import {
  ANDROID,
  ANGULAR,
  AWS,
  CSS,
  CUCUMBER,
  DOCKER,
  FIREBASE,
  GIT,
  GITHUB,
  HTML,
  JAVA,
  JAVASCRIPT,
  JUNIT,
  JWT,
  KOTLIN,
  KUBERNETES,
  MYSQL,
  POSTGRESQL,
  SCSS,
  SPRING,
  TAILWIND,
  TYPESCRIPT,
} from '../utils/techs';
import { TechCard } from '../../shared/components/cards/tech-card/tech-card';

@Component({
  selector: 'stack-section',
  imports: [FloatingShape, GradientOrb, TechCard],
  templateUrl: './stack.html',
})
export class Stack {
  readonly categories: StackCategory[] = [
    {
      title: 'frontend',
      techs: [ANGULAR, TYPESCRIPT, JAVASCRIPT, CSS, SCSS, TAILWIND, HTML],
    },
    {
      title: 'backend',
      techs: [JAVA, SPRING, KOTLIN, ANDROID, JUNIT, CUCUMBER, JWT],
    },
    {
      title: 'infraestructura',
      techs: [AWS, DOCKER, KUBERNETES, FIREBASE, MYSQL, POSTGRESQL, GIT, GITHUB],
    },
  ];
}
