import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailComposerOptions } from '@awesome-cordova-plugins/email-composer';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.page.html',
  styleUrls: ['./mensajeria.page.scss'],
})
export class MensajeriaPage {
  subject: string = '';
  message: string = '';

  constructor(private emailComposer: EmailComposer) {}

  sendEmail() {
    const email = {
      to: 'ben.marchant@duocuc.cl',
      subject: this.subject,
      body: this.message,
      isHtml: true,
    };

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        this.emailComposer.open(email);
      } else {
        alert('El servicio de correo no está disponible en este dispositivo.');
      }
    });
  }
}