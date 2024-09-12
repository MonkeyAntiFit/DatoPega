import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp } from 'firebase/app'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export const firebaseConfig = {
  apiKey: "AIzaSyDpoQN4HSRw7CkTDqLYAm7btvGiJ2d3QAo",
  authDomain: "datopega.firebaseapp.com",
  projectId: "datopega",
  storageBucket: "datopega.appspot.com",
  messagingSenderId: "989935261151",
  appId: "1:989935261151:web:24eefba5e269e83043e06a",
  measurementId: "G-5V8P699QW4"
};

initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
