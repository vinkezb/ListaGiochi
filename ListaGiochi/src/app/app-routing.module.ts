import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { LoginComponent } from './login/login.component';
import { RoutingEnum } from './model/routing-enum'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
      path: RoutingEnum.base, children: [
        {path: RoutingEnum.home, component: HomeComponent},
        {path: RoutingEnum.lista, component: GameListComponent},
        {path: RoutingEnum.modifica, component: EditGameComponent},
      ]
    },

    {path: '', redirectTo: RoutingEnum.base+'/'+RoutingEnum.home, pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
