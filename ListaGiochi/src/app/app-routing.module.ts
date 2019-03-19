import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'lista-giochi', component: GameListComponent},
    {path: 'modifica-gioco', component: EditGameComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
