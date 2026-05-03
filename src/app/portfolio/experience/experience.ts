import { Component, OnInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card';

interface ExperienceEntry {
  company: string;
  role: string;
  periodStart: string;
  periodEnd: string;
  description: string[];
}

@Component({
  selector: 'experience-section',
  imports: [ExperienceCard],
  templateUrl: './experience.html',
})
export class Experience implements OnInit, OnDestroy {
  protected readonly experiences: ExperienceEntry[] = [
    {
      company: 'Registraduría Nacional del Estado Civil',
      role: 'Digitador',
      periodStart: 'Febrero 2026',
      periodEnd: 'Marzo 2026',
      description: [
        'Digitación y captura de resultados de los formularios E-14 de claveros en las votaciones de congreso y cámara 2026.',
        'Registro y trámite de reclamaciones presentadas por testigos y apoderados electorales.',
        'Generación de resoluciones y documentos legales para resolver impugnaciones.',
        'Consolidación de datos y validación de los formularios E-24 y E-26.',
        'Verificación de actas físicas frente al sistema para asegurar la transparencia.',
        'Gestión técnica de la información electoral bajo entornos de alta presión.',
      ],
    },
    {
      company: 'Registraduría Nacional del Estado Civil',
      role: 'Auxiliar Administrativo',
      periodStart: 'Agosto 2025',
      periodEnd: 'Diciembre 2025',
      description: [
        'Administración y gestión de usuarios en sistemas EIS (Estación Integrada de Servicios) y HLED, asegurando el correcto acceso y operación de los módulos relacionados con la expedición y entrega de documentos de identidad.',
        'Rol de enlace entre diferentes áreas para la consulta, validación y verificación de información de identidad (documento base de expedición, registro civil y datos asociados) mediante servicios web institucionales.',
        'Configuración y pruebas de estaciones de trabajo y dispositivos integrados al software institucional (MorphoTop, Morpho Tablets, pads de firma, cámaras e ID Screens).',
        'Soporte en instalación, configuración y actualización de software, tanto de forma local como remota, garantizando la continuidad de los servicios.',
      ],
    },
  ];

  ngOnInit(): void {
    ScrollTrigger.refresh();
    this.animateSectionTitle();
    this.animateCards();
    this.animateFloatingShapes();
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  private animateSectionTitle(): void {
    ScrollTrigger.batch('.exp-section-title', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
        });
      },
      start: 'top 85%',
      once: true,
    });
  }

  private animateCards(): void {
    ScrollTrigger.batch('.experience-card-item', {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 70,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power3.out',
        });
      },
      start: 'top 82%',
      once: true,
    });
  }

  private animateFloatingShapes(): void {
    const shapes = gsap.utils.toArray('.exp-float-shape') as HTMLElement[];
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
