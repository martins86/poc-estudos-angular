import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { RealtimeDatabaseModule } from './firebase/realtime-database/realtime-database.module';
import { DemoListModule } from './demo-list/demo-list.module';

@NgModule({
  declarations: [DemosComponent],
  imports: [
    CommonModule,
    DemosRoutingModule,
    RealtimeDatabaseModule,
    DemoListModule,
  ],
  exports: [DemosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemosModule {}
