import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { AppService } from './services/app.service';
import { HomeComponent } from './comps/home/home.component';
import { CargameComponent } from './comps/cargame/cargame.component';
import { CaruselaComponent } from './comps/carusela/carusela.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CargameComponent,
    CaruselaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
