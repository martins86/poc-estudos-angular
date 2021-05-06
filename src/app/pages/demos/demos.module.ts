import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';

@NgModule({
  declarations: [DemosComponent],
  imports: [CommonModule, DemosRoutingModule],
  exports: [DemosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemosModule {}
