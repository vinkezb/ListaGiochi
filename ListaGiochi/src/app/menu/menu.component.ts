import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: false, endpoint: '/home'},
    {id: 2, descrizione: 'Lista', selezionato: false, endpoint: '/lista-giochi'},
    {id: 3, descrizione: 'Modifica', selezionato: false, endpoint: '/modifica-gioco'},
    {id: 4, descrizione: 'Login', selezionato:false, endpoint:'/login'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
