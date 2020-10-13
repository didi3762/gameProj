import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { GameComponent } from './comps/game/game.component';
import { MainTrivyaComponent } from './comps/trivyaf/main-trivya/main-trivya.component';
import { SudokoMainComponent } from './comps/suduko/sudoko-main/sudoko-main.component';



const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'home/game-page' , component:GameComponent},
  {path:'home/game-page/trivya' , component:MainTrivyaComponent},
  {path:'home/suduko' , component:SudokoMainComponent},
  { path:'',          redirectTo:'home', pathMatch: 'full'},
        { path:'**',        redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
