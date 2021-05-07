import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemosComponent } from './demos.component';

const routes: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@pages/demos/demo-list/demo-list.module').then(
            (module) => module.DemoListModule
          ),
      },
      {
        path: 'realtime-database',
        loadChildren: () =>
          import(
            '@pages/demos/firebase/realtime-database/realtime-database.module'
          ).then((module) => module.RealtimeDatabaseModule),
      },
      {
        path: 'demos',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
