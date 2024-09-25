import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  router = inject(Router);
  toastCtrl = inject(ToastController);
  loadingCtrl = inject(LoadingController);
  modalCtrl = inject(ModalController);


  routerlink(url: any) {
    this.router.navigateByUrl(url)
  }

  //Animacion de Spinner, que se llama la funcion loading en cada vista que se recargara.
  loading(){
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  // Animacion Toast que aparece al ingresar despues 
  // de iniciar sesion.
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);

    toast.present()
  }

  saveLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  // Animacion tipo Modal para agregar usuario
  async getModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts)
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) return data;
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss(data);
  }


  async takePicture(promptLabelHeader: string) {
     return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,  // Opcion a elegir
      promptLabelHeader, 
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Toma una foto'
    });
  
  };

}
