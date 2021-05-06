import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { TopBarModule } from '@shared/layout/top-bar/top-bar.module';
import { LeftBarModule } from '@shared/layout/left-bar/left-bar.module';
import { BottomBarModule } from '@shared/layout/bottom-bar/bottom-bar.module';

const layoutModule = [TopBarModule, LeftBarModule, BottomBarModule];

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './pages/home/home.module';
import { NotFoundModule } from './pages/not-found/not-found.module';

const pagesModule = [HomeModule, NotFoundModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    ...layoutModule,
    ...pagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
