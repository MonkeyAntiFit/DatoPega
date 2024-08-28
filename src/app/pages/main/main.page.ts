import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  router = inject(Router);
  currentPath: string = '';

  pages = [
    { title: 'Inicio', url: '/main/home', icon: 'home-outline'},
    { title: 'Perfil', url: '/main/profile', icon: 'person-outline'}
  ]

  
// esto contiene la navegacion entre componentes
//llamaremos a un evento
// el evento debe ser suscrito a que refleje un evento de tipo any, seguido de la funcion flecha, si ya detecto algo, entonces se desplazará hacia ese componente. Se crea una condicional IF que diga: si existe este evento?, entonces si existe esa url a la que se intenta entrar, entonces se desplazará.
  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if(event?.url) this.currentPath = event.url
    })
    console.log(this.pages)  
  }
}
