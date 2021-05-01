import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

const materialModule = [MatSidenavModule];

import { TopBarModule } from '@shared/layout/top-bar/top-bar.module';
import { LeftBarModule } from '@shared/layout/left-bar/left-bar.module';
import { BottomBarModule } from '@shared/layout/bottom-bar/bottom-bar.module';

const featuresModule = [TopBarModule, LeftBarModule, BottomBarModule];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ...materialModule,
    ...featuresModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
