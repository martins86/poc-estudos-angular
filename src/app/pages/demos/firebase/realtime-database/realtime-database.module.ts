import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtimeDatabaseRoutingModule } from './realtime-database-routing.module';

import { RealtimeDatabaseComponent } from './realtime-database.component';

@NgModule({
  declarations: [RealtimeDatabaseComponent],
  imports: [CommonModule, RealtimeDatabaseRoutingModule],
  exports: [RealtimeDatabaseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RealtimeDatabaseModule {}
