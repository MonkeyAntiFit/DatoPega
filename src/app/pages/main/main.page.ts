import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  router = inject(Router);
  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);
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

  signOut() {
    this.firebaseService.signOut();
  }

  user(): User {
    return this.utilsService.getLocalStorage('user');
  }
  
}
