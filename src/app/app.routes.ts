import { Routes } from '@angular/router';
import { locationResolver } from './core/resolvers/location.resolver';
import { catchError, map, of } from 'rxjs';
import { ILocation } from './shared/models/location.model';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search.component').then((c) => c.SearchComponent),
  },
  {
    path: 'location/:id',
    loadComponent: () =>
      import('./pages/location/location.component').then(
        (c) => c.LocationComponent
      ),
    resolve: { location: locationResolver },
    title: (route) => {
      return `Location - ${route.url[1].path}`;
    },
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: '/not-found' },
];
