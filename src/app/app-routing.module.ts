import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('@pages/demos/demos.module').then((module) => module.DemosModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('@pages/not-found/not-found.module').then(
        (module) => module.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
