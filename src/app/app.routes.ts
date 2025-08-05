import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Catalog } from './components/catalog/catalog';
import { Details } from './components/details/details';
import { Create } from './components/cars/create/create';
import { Edit } from './components/cars/edit/edit';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'details/:id', component: Details },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/auth/register/register').then((m) => m.Register),
  },
  { path: 'create', component: Create },
  { path: 'edit/:id', component: Edit },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
