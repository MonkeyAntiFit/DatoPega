import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {}

  sendEmail(templateParams: any): Promise<any> {
    // Reemplaza con tu USER_ID, SERVICE_ID y TEMPLATE_ID
    const userId = 'KF0epdYtm6W_0Dv9A';
    const serviceId = 'service_cgm0yz6';
    const templateId = 'template_zyrs1al';

    return emailjs.send(serviceId, templateId, templateParams, userId);
  }
}