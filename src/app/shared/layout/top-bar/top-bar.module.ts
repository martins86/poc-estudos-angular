import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const materialModule = [MatButtonModule, MatIconModule, MatMenuModule];

import { PipesModule } from '@shared/pipes/pipes.module';

import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, HttpClientModule, PipesModule, ...materialModule],
  exports: [TopBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopBarModule {}
