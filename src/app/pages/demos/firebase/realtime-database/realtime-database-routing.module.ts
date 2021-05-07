import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealtimeDatabaseComponent } from './realtime-database.component';

const routes: Routes = [{ path: '', component: RealtimeDatabaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealtimeDatabaseRoutingModule {}
