import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BypassSecurityPipe } from './bypass-security/bypass-security.pipe';

const pipesModules = [BypassSecurityPipe];

@NgModule({
  declarations: [...pipesModules],
  imports: [CommonModule],
  exports: [...pipesModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PipesModule {}
