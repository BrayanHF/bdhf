import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule, Menu, MoveUp, FolderGit2, BriefcaseBusiness, Code, User, Logs } from 'lucide-angular';
import gsap from 'gsap';

@Component({
  selector: 'nav-bottom',
  imports: [ LucideAngularModule ],
  styleUrl: 'nav-bottom.scss',
  templateUrl: './nav-bottom.html',
})
export class NavBottom {

  private isOpen = signal(false);

  readonly menuIcon = computed(() => this.isOpen() ? Logs : Menu);

  readonly menuItems = [
    { label: 'Top', path: 'hero', img: MoveUp },
    { label: 'Proyectos', path: 'projects', img: FolderGit2 },
    { label: 'Historia laboral', path: 'work-history', img: BriefcaseBusiness },
    { label: 'Stack', path: 'tech', img: Code },
    { label: 'Sobre mi', path: 'about', img: User },
  ]

  private animateChangeIcon(isOpen: boolean, isMobile: boolean) {
    const menuBtn = '.menu-button';
    const jumpTl = gsap.timeline();

    if (isMobile) {
      jumpTl
        .to(menuBtn, {
          scaleX: 1.2,
          scaleY: 0.6,
          duration: 0.1,
          ease: "power1.inOut"
        })
        .to(menuBtn, {
          y: isOpen ? -20 : 15,
          scaleX: 0.9,
          scaleY: 1.1,
          duration: 0.2,
          ease: "power2.out"
        })
        .to(menuBtn, {
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.5,
          ease: "bounce.out"
        });

    } else {
      gsap.to(menuBtn, {
        rotate: this.isOpen() ? 60 : -60,
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1"
      });
    }
  }

  private animateOpenAndClose(isOpen: boolean, isMobile: boolean) {
    const items = gsap.utils.toArray('.menu-item');

    if (isOpen) {
      gsap.to(items, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        x: (i: number) => {
          if (isMobile) return 0;

          const startAngle = 95;
          const endAngle = -5;
          const radius_x = 180;
          const angleStep = (startAngle - endAngle) / (items.length - 1);
          const angle = (startAngle - (i * angleStep)) * (Math.PI / 180);
          return Math.cos(angle) * radius_x;
        },
        y: (i: number) => {

          if (isMobile) {
            const invertedIndex = (items.length - 1) - i;
            return -(70 + (invertedIndex * 40));
          }
          const startAngle = 100;
          const endAngle = -40;
          const radius_y = 110;
          const angleStep = (startAngle - endAngle) / (items.length - 1);
          const angle = (startAngle - (i * angleStep)) * (Math.PI / 180);
          return -Math.sin(angle) * radius_y;
        }
      })
    } else {
      gsap.to(items, {
        x: 0,
        y: 0,
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: "power3.in"
      });
    }
  }

  public toggleMenu() {
    this.isOpen.set(!this.isOpen());

    const isMobile = window.innerWidth < 768 && window.innerHeight > 480;

    this.animateChangeIcon(this.isOpen(), isMobile);
    this.animateOpenAndClose(this.isOpen(), isMobile);
  }


}
