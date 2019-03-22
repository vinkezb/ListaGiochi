import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { LoginComponent } from './login/login.component';
import { RoutingEnum } from './model/routing-enum'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard.service';

const routes: Routes = [
    {
      path: RoutingEnum.base, children: [
        {path: RoutingEnum.home, component: HomeComponent},
        {path: RoutingEnum.lista, component: GameListComponent, canDeactivate :[AuthGuard]},
        {path: RoutingEnum.modifica, component: EditGameComponent},
      ],
      canActivateChild : [AuthGuard]
    },
    
    {path: RoutingEnum.login, component: LoginComponent},
    {path: '', redirectTo: '/'+RoutingEnum.login, pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
