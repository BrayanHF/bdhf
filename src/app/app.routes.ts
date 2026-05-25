import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Brayan Hernandez - Ingeniero de Sistemas',
    loadComponent: () => import('./portfolio/portfolio'),
  },
  {
    path: 'project/lexbot',
    title: 'LexBot - Asistente Legal IA | Brayan Hernandez',
    loadComponent: () => import('./portfolio/projects/pages/lexbot/lexbot'),
  },
  {
    path: 'project/ganecamp',
    title: 'Ganecamp - Gestión Ganadera RFID | Brayan Hernandez',
    loadComponent: () => import('./portfolio/projects/pages/ganecamp/ganecamp'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
