import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomBarComponent } from './bottom-bar.component';

@NgModule({
  declarations: [BottomBarComponent],
  imports: [CommonModule],
  exports: [BottomBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BottomBarModule {}
