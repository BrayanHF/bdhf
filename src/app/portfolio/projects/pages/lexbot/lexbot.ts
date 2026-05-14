import { Component } from '@angular/core';
import { ProjectCarousel } from '../../../../shared/components/project/project-carousel/project-carousel';
import { lexbotImages } from '../../../utils/projects/lexbot-images';
import { BackButton } from '../../../../shared/components/buttons/back-button/back-button';
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
} from '../../../utils/projects/lexbot-techs';
import { GitHubLink } from '../../../../shared/interfaces/github-link.interface';
import { ProjectGithub } from '../../../../shared/components/project/project-github/project-github';
import { ProjectTitle } from '../../../../shared/components/project/project-title/project-title';
import { ProjectStructureImg } from '../../../../shared/components/project/project-structure-img/project-structure-img';
import { ProjectTechs } from '../../../../shared/components/project/project-techs/project-techs';
import { ProjectAbout } from '../../../../shared/components/project/project-about/project-about';

@Component({
  selector: 'projects-lexbot',
  imports: [
    ProjectCarousel,
    BackButton,
    ProjectGithub,
    ProjectTitle,
    ProjectStructureImg,
    ProjectTechs,
    ProjectAbout,
  ],
  templateUrl: './lexbot.html',
})
export default class Lexbot {
  readonly images = lexbotImages;

  readonly aboutProject = [
    `En Colombia, enfrentar un proceso legal es un desafío que la mayoría no puede costear. Con un índice de
    pobreza monetaria que afecta al 33% de la población, el acceso a una asesoría jurídica se convierte en un
    lujo, ya que los honorarios de un abogado pueden superar con creces los ingresos mensuales de una
    familia vulnerable. LexBot nace para reducir esta brecha de desigualdad, facilitando el acceso al conocimiento
    jurídico de forma gratuita. No se busca reemplazar la labor de un abogado, sino ofrecer una herramienta de
    orientación para que los ciudadanos de bajos recursos dejen de estar indefensos ante trámites básicos por
    falta de dinero o desconocimiento.`,
    `Para que esta ayuda sea efectiva y confiable, el sistema cuenta con una infraestructura capaz de alternar e
    integrarse con distintos modelos de inteligencia artificial según se requiera. El mayor reto técnico es la
    falta de una base de datos nacional unificada y actualizada de las leyes colombianas. Para solucionar esto,
    implementamos herramientas de búsqueda especializada como Tavily, que permiten al sistema consultar la
    normativa vigente en tiempo real antes de generar una respuesta. Esto ayuda a reducir errores y garantiza que
    la información legal no sea inventada, sino que esté respaldada por las leyes actuales, superando así las
    limitaciones de conocimiento que suelen tener los modelos de IA estándar.`,
    `El alcance actual del proyecto permite que cualquier persona genere documentos esenciales como derechos de
    petición o querellas con solo conversar con el asistente. Logramos crear un puente entre la complejidad legal
    y la necesidad ciudadana, aunque siempre dejando claro que el sistema es un orientador y no un sustituto de la
    defensa profesional. A futuro, el camino es seguir perfeccionando estos motores de búsqueda en tiempo real
    para cubrir áreas más sensibles y asegurar que, sin importar el presupuesto, ningún colombiano se quede sin
    saber cómo reclamar sus derechos fundamentales.`,
  ];

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

  readonly githubLinks: GitHubLink[] = [
    {
      label: 'Front en GitHub',
      url: 'https://github.com/BrayanHF/LexBot-Angular',
      localIcon: 'assets/icons/angular.svg',
    },
    {
      label: 'Back en GitHub',
      url: 'https://github.com/BrayanHF/LexBot-Spring',
      localIcon: 'assets/icons/spring.svg',
    },
  ];
}
