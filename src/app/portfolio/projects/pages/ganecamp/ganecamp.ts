import { Component } from '@angular/core';
import { StackCategory } from '../../../../shared/interfaces/stack-category.interface';
import { GitHubLink } from '../../../../shared/interfaces/github-link.interface';
import { ganecampImages } from '../../../utils/projects/ganecamp-images';
import { GANECAMP_FIREBASE, GANECAMP_KOTLIN } from '../../../utils/projects/ganecamp-techs';
import { BackButton } from '../../../../shared/components/buttons/back-button/back-button';
import { ProjectAbout } from '../../../../shared/components/project/project-about/project-about';
import { ProjectCarousel } from '../../../../shared/components/project/project-carousel/project-carousel';
import { ProjectGithub } from '../../../../shared/components/project/project-github/project-github';
import { ProjectTechs } from '../../../../shared/components/project/project-techs/project-techs';
import { ProjectTitle } from '../../../../shared/components/project/project-title/project-title';

@Component({
  selector: 'app-ganecamp',
  imports: [BackButton, ProjectAbout, ProjectCarousel, ProjectGithub, ProjectTechs, ProjectTitle],
  templateUrl: './ganecamp.html',
})
export default class Ganecamp {
  readonly images = ganecampImages;

  readonly aboutProject = [
    `En muchas zonas rurales de Colombia, llevar el control del ganado sigue dependiendo de cuadernos de papel que se
    pierden o se dañan con el clima. Identificar a los animales por su nombre o marcas físicas se vuelve imposible
    cuando el rebaño crece, lo que genera errores en el peso y las vacunas. GaneCamp soluciona este desorden mediante
    una aplicación móvil que utiliza tecnología RFID. Con solo escanear un chip en el animal, el trabajador accede a su
    historial completo de forma inmediata, permitiendo que fincas pequeñas o medianas tengan un control real sobre su
    producción sin procesos manuales lentos.`,
    `Para construir esta herramienta, se utilizó una estructura por capas que mantiene el código organizado y fácil de
    actualizar. El principal reto técnico fue la falta de internet estable en el campo. Para resolverlo, se implementó
    Firebase, aprovechando su capacidad para manejar datos en tiempo real y sincronizar la información automáticamente
    cuando el dispositivo recupera conexión. Uno de los mayores desafíos no fue solo el código, sino el esfuerzo
    operativo que supuso pasar años de registros escritos a mano al sistema digital, asegurando que no se perdiera
    información valiosa en el proceso.`,
    `Hoy, el sistema permite registrar el peso, las vacunas y organizar a los animales por lotes, eliminando
    definitivamente la dependencia del papel. Esto ahorra tiempo a los trabajadores y da seguridad a los dueños sobre
    el estado de su inversión. El proyecto no busca transformar el sector de la noche a la mañana, sino ser una
    herramienta práctica que reduzca la brecha tecnológica en el campo. A futuro, la aplicación puede seguir creciendo
    para incluir alertas de salud automáticas o conectarse con mercados ganaderos, ayudando a que más productores
    locales sean más competitivos.`,
  ];

  readonly techCategories: StackCategory[] = [
    {
      title: 'Mobile',
      techs: [GANECAMP_KOTLIN],
    },
    {
      title: 'Infraestructura',
      techs: [GANECAMP_FIREBASE],
    },
  ];

  readonly githubLinks: GitHubLink[] = [
    {
      label: 'App en GitHub',
      url: 'https://github.com/BrayanHF/Android-Ganecamp',
      localIcon: 'assets/icons/android.svg',
    },
  ];
}
