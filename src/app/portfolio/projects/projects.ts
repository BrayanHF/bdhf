import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ProjectCard } from '../../shared/components/project-card/project-card';

interface ProjectEntry {
  title: string;
  category: string;
  description: string;
  techs: string[];
}

@Component({
  selector: 'projects-section',
  imports: [ProjectCard],
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  protected readonly projects: ProjectEntry[] = [
    {
      title: 'Plataforma de Gestión Electoral',
      category: 'Full Stack',
      description: 'Sistema web completo para la digitación, consolidación y validación de resultados electorales en tiempo real, con dashboard de monitoreo.',
      techs: ['Angular', 'NestJS', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Sistema de Identidad Digital',
      category: 'Backend',
      description: 'API de servicios web institucionales para consulta y validación de documentos de identidad, registro civil y datos biométricos.',
      techs: ['Node.js', 'Express', 'Oracle', 'Redis'],
    },
  ];

  ngOnInit(): void {
    this.animateFloatingShapes();
  }

  private animateFloatingShapes(): void {
    const shapes = gsap.utils.toArray('.proj-float-shape') as HTMLElement[];
    shapes.forEach((el, i) => {
      gsap.to(el, {
        x: `random(-50, 50)`,
        y: `random(-50, 50)`,
        rotate: `random(-25, 25)`,
        duration: `random(4, 8)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5,
      });
    });
  }
}
