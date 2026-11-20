import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main')
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about')
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: "full"
  }
];
