import { Component, effect, ElementRef, HostListener, inject, OnDestroy, signal } from '@angular/core';
import {
  LucideAngularModule,
  Menu,
  FolderGit2,
  BriefcaseBusiness,
  Code,
  User,
  Logs,
  MessageCircleMore,
} from 'lucide-angular';
import gsap from 'gsap';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'nav-button',
  imports: [LucideAngularModule],
  styleUrl: 'nav-button.scss',
  templateUrl: './nav-button.html',
})
export class NavButton implements OnDestroy {
  private scrollService = inject(ScrollService);
  private elRef = inject(ElementRef);
  protected isOpen = signal(false);

  readonly currentIcon = signal(Menu);
  readonly activeSection = this.scrollService.activeSection;

  readonly menuItems = [
    { label: 'Experiencia laboral', path: 'experience', img: BriefcaseBusiness },
    { label: 'Proyectos', path: 'projects', img: FolderGit2 },
    { label: 'Stack', path: 'stack', img: Code },
    { label: 'Sobre mi', path: 'about', img: User },
    { label: 'Contacto', path: 'contact', img: MessageCircleMore },
  ];

  private scrollStartY = 0;
  private readonly scrollThreshold = 80;

  constructor() {
    effect(() => {
      const open = this.isOpen();

      setTimeout(() => {
        this.currentIcon.set(open ? Logs : Menu);
      }, 450);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.elRef.nativeElement.contains(event.target)) {
      this.toggleMenu();
    }
  }

  private readonly onScroll = (): void => {
    if (Math.abs(window.scrollY - this.scrollStartY) > this.scrollThreshold) {
      this.toggleMenu();
    }
  };

  navigateTo(path: string): void {
    this.scrollService.scrollTo(`#${path}`);
    if (this.isOpen()) {
      this.toggleMenu();
    }
  }

  private animateChangeIcon(isOpen: boolean, useArcAnimation: boolean) {
    const menuBtn = '.menu-button';
    const jumpTl = gsap.timeline();

    if (!useArcAnimation) {
      jumpTl
        .to(menuBtn, {
          scaleX: 1.2,
          scaleY: 0.6,
          duration: 0.1,
          ease: 'power1.inOut',
        })
        .to(menuBtn, {
          y: isOpen ? -20 : 15,
          scaleX: 0.9,
          scaleY: 1.1,
          duration: 0.2,
          ease: 'power2.out',
        })
        .to(menuBtn, {
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.7,
          ease: 'bounce.out',
        });
    } else {
      gsap.to(menuBtn, {
        rotate: this.isOpen() ? 60 : -60,
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1',
      });
    }
  }

  private animateOpenAndClose(isOpen: boolean, useArcAnimation: boolean) {
    const items = gsap.utils.toArray('.menu-item') as HTMLElement[];

    if (isOpen) {
      const navEl = document.querySelector('.nav')!;
      const btn = navEl.querySelector('button')!;
      const btnRect = btn.getBoundingClientRect();
      const cx = btnRect.left + btnRect.width / 2;
      const cy = btnRect.top + btnRect.height / 2;

      gsap.to(items, {
        autoAlpha: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        stagger: 0.15,
        ease: 'back.out(2)',
        x: (i: number, el: HTMLElement) => {
          if (!useArcAnimation) return 0;

          const startAngle = 95;
          const endAngle = 0;
          const radius = 250;
          const angleStep = (startAngle - endAngle) / (items.length - 1);
          const angle = (startAngle - i * angleStep) * (Math.PI / 180);
          const itemRect = el.getBoundingClientRect();
          return cx + Math.cos(angle) * radius - itemRect.left;
        },
        y: (i: number, el: HTMLElement) => {
          if (!useArcAnimation) {
            const invertedIndex = items.length - 1 - i;
            return -(70 + invertedIndex * 40);
          }
          const startAngle = 70;
          const endAngle = 0;
          const radius = 350;
          const angleStep = (startAngle - endAngle) / (items.length - 1);
          const angle = (startAngle - i * angleStep) * (Math.PI / 180);
          const itemRect = el.getBoundingClientRect();
          return cy - Math.sin(angle) * radius - itemRect.top;
        },
      });
    } else {
      gsap.to(items, {
        x: 0,
        y: 0,
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power1.in',
      });
    }
  }

  public toggleMenu() {
    const wasOpen = this.isOpen();
    this.isOpen.set(!wasOpen);

    const useArcAnimation = window.innerHeight < 480;

    this.animateChangeIcon(this.isOpen(), useArcAnimation);
    this.animateOpenAndClose(this.isOpen(), useArcAnimation);

    if (!wasOpen) {
      this.scrollStartY = window.scrollY;
      window.addEventListener('scroll', this.onScroll);
    } else {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
}
