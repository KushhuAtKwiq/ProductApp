import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Product/product.module').then((module) => module.ProductModule),
  },
];
