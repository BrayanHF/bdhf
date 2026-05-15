import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  public send(data: { name: string; email: string; message: string }) {
    return from(
      emailjs.send(
        'service_c125p8n',
        'template_yone4l3',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        'ajp4b4UAIMEil9Yx2',
      ),
    );
  }
}
