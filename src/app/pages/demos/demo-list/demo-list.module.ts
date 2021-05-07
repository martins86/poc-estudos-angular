import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoListRoutingModule } from './demo-list-routing.module';
import { DemoListComponent } from './demo-list.component';

@NgModule({
  declarations: [DemoListComponent],
  imports: [CommonModule, DemoListRoutingModule],
  exports: [DemoListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoListModule {}
