import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { AppService } from './services/app.service';
import { HomeComponent } from './comps/home/home.component';
import { CargameComponent } from './comps/cargame/cargame.component';
import { CaruselaComponent } from './comps/carusela/carusela.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { GameComponent } from './comps/game/game.component';
import { RandomDirective } from './directives/random.directive';
import { TrivyaComponent } from './comps/trivyaf/trivya/trivya.component';
import { MainTrivyaComponent } from './comps/trivyaf/main-trivya/main-trivya.component';
import { HederTrivyaComponent } from './comps/trivyaf/heder-trivya/heder-trivya.component';
import { SudokoMainComponent } from './comps/suduko/sudoko-main/sudoko-main.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CargameComponent,
    CaruselaComponent,
    NavbarComponent,
    GameComponent,
    TrivyaComponent,
    RandomDirective,
    MainTrivyaComponent,
    HederTrivyaComponent,
    SudokoMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [GameService,AppService],
  bootstrap: [AppComponent]

})
export class AppModule { }
