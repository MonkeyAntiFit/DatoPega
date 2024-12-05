import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.page.html',
  styleUrls: ['./mensajeria.page.scss'],
})
export class MensajeriaPage {
  subject: string = '';
  message: string = '';

  constructor(private emailService: EmailService) {}

  sendEmail() {
    const templateParams = {
      subject: this.subject,
      message: this.message,
      to_email: 'ben.marchant@duocuc.cl', // Correo del destinatario
    };

    this.emailService.sendEmail(templateParams)
      .then(() => {
        alert('Correo enviado exitosamente.');
      })
      .catch((error) => {
        console.error('Error al enviar correo:', error);
        alert('Hubo un problema al enviar el correo.');
      });
  }
}