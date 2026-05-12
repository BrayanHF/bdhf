import { Component } from '@angular/core';
import { Carousel } from '../../../../shared/components/carousel/carousel';
import { lexbotImages } from '../../../utils/lexbot-images';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { StackCategory } from '../../../../shared/interfaces/stack-category.interface';
import {
  LEXBOT_ANGULAR,
  LEXBOT_AWS,
  LEXBOT_DEEPSEEK,
  LEXBOT_FIREBASE,
  LEXBOT_OPENAI,
  LEXBOT_SPRING_BOOT,
  LEXBOT_TAILWIND,
  LEXBOT_TAVILY,
} from '../../../utils/lexbot-techs';

@Component({
  selector: 'projects-lexbot',
  imports: [Carousel, BackButton],
  templateUrl: './lexbot.html',
})
export default class Lexbot {
  readonly images = lexbotImages;

  readonly techCategories: StackCategory[] = [
    {
      title: 'Frontend',
      techs: [LEXBOT_ANGULAR, LEXBOT_TAILWIND],
    },
    {
      title: 'Backend y APIs',
      techs: [LEXBOT_SPRING_BOOT, LEXBOT_OPENAI, LEXBOT_DEEPSEEK, LEXBOT_TAVILY],
    },
    {
      title: 'Infraestructura',
      techs: [LEXBOT_AWS, LEXBOT_FIREBASE],
    },
  ];
}
