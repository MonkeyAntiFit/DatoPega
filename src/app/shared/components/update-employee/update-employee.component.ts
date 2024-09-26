import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent  implements OnInit {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);
  
  user = {} as User;

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    salario: new FormControl(null, [Validators.required, Validators.min(0)]),
    cargo: new FormControl('', [Validators.required]),
    plantel: new FormControl('', [Validators.required]),
  })

  constructor() { }

  ngOnInit() {
    this.user = this.utilsService.getLocalStorage('user');
  }

  async submit() {
    this.createEmployee();
    // if(this.form.valid){
    //   const loading = await this.utilsService.loading();
    //   await loading.present();

    //   // this.firebaseService.signIn(this.form.value as User)
    //   //   .then(resp => {
    //   //     this.getUserInfo(resp.user.uid);
          
    //   //   }).catch(error => {
    //   //     console.log(error);
    //   //     this.utilsService.presentToast({
    //   //       message: error.message,
    //   //       duration: 2500,
    //   //       color: 'danger',
    //   //       position: 'bottom',
    //   //       icon: 'alert-circle-outline'
    //   //     })
    //   //   }).finally(() => {
    //   //     loading.dismiss();
    //   //   })
        
    }

    async createEmployee() {

      let path = `users/${this.user.uid}/empleados`
      
      const loading = await this.utilsService.loading();
      await loading.present();

      let dataUrl = this.form.value.img;
      let imgPath = `${this.user.uid}/${Date.now()}`;
      let imgUrl = await this.firebaseService.updateImg(imgPath, dataUrl);

      this.form.controls.img.setValue(imgUrl);

      delete this.form.value.id;

      this.firebaseService.addDocument(path, this.form.value)
      .then( async resp => {

        this.utilsService.dismissModal({ success: true })
        this.utilsService.presentToast({
          message: `Empleado creado exitosamente` ,
          duration: 1500,
          color: 'primary',
          position: 'bottom',
          icon: 'checkmark-circle-outline'
        })
         
      }).catch(error => {
        console.log(error);
        this.utilsService.presentToast({
          message: error.message,
          duration: 2500,
          color: 'danger',
          position: 'bottom',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
 

    async takeImage() {
      const dataUrl = (await this.utilsService.takePicture('Imagen del empleado')).dataUrl // Extraer la respuesta que estamos seleccionando
      this.form.controls.img.setValue(dataUrl)
    }
  }




