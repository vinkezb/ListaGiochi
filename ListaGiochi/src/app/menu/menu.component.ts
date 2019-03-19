import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { RoutingEnum } from '../model/routing-enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: false, endpoint: '/'+RoutingEnum.base+'/'+RoutingEnum.home},
    {id: 2, descrizione: 'Lista', selezionato: false, endpoint: '/'+RoutingEnum.base+'/'+RoutingEnum.lista},
    {id: 3, descrizione: 'Modifica', selezionato: false, endpoint: '/'+RoutingEnum.base+'/'+RoutingEnum.modifica},
    {id: 4, descrizione: 'Login', selezionato:false, endpoint:'/'+RoutingEnum.base+'/'+RoutingEnum.login},
  ];

  constructor() { }

  ngOnInit() {
  }

}
