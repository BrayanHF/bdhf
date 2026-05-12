import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'BDHF',
    loadComponent: () => import('./portfolio/portfolio'),
  },
  {
    path: 'project/lexbot',
    title: 'LexBot',
    loadComponent: () => import('./portfolio/projects/pages/lexbot/lexbot'),
  },
  {
    path: 'project/ganecamp',
    title: 'Ganecamp',
    loadComponent: () => import('./portfolio/projects/pages/ganecamp/ganecamp'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
