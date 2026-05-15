import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FloatingShapes } from '../../shared/components/decoration/floating-shapes/floating-shapes';
import { GradientOrbs } from '../../shared/components/decoration/gradient-orb/gradient-orbs';
import { LucideAngularModule, Mail, Phone } from 'lucide-angular';
import { EmailService } from '../../shared/services/email.service';

@Component({
  selector: 'contact-section',
  imports: [ReactiveFormsModule, FloatingShapes, GradientOrbs, LucideAngularModule],
  templateUrl: './contact.html',
})
export class Contact {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;

  protected showSentMessage = signal(false);

  protected showErrorMessage = signal(false);
  protected errorMessage = '';

  protected contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, this.emailValidator]],
    message: ['', Validators.required],
    website: [''],
  });

  get nameControl(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get messageControl(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  protected getError(control: AbstractControl): string | null {
    if (control.errors?.['required'] && control.touched) {
      return 'Este campo es obligatorio';
    }
    if (control.errors?.['invalidEmail'] && control.touched) {
      return 'Correo electrónico inválido';
    }
    return null;
  }

  protected onSubmit() {
    if (this.contactForm.get('website')?.value) return;

    if (!this.canSendMessage()) {
      this.errorMessage = 'Has alcanzado el límite de mensajes por hora. Intente más tarde.';
      this.showErrorMessage.set(true);
      setTimeout(() => this.showErrorMessage.set(false), 8000);
      return;
    }

    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) return;

    const { name, email, message } = this.contactForm.getRawValue();

    this.emailService
      .send({
        name,
        email,
        message,
      })
      .subscribe({
        next: () => {
          this.showSentMessage.set(true);
          this.contactForm.reset();
          setTimeout(() => this.showSentMessage.set(false), 4000);
        },
        error: () => {
          this.errorMessage = 'No se pudo enviar el mensaje. Intente nuevamente más tarde.';
          this.showErrorMessage.set(true);
          setTimeout(() => this.showErrorMessage.set(false), 6000);
        },
      });
  }

  private emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(control.value) ? null : { invalidEmail: true };
  }

  private canSendMessage(): boolean {
    const stored = localStorage.getItem('contact_form_limit');

    const now = Date.now();

    if (!stored) {
      this.updateContactFormLimit(1, now);
      return true;
    }

    const data = JSON.parse(stored);

    if (data.count >= 3) return false;

    const isExpired = now - data.timestamp > 3600000;

    if (isExpired) {
      this.updateContactFormLimit(1, now);
      return true;
    }

    this.updateContactFormLimit(data.count + 1, data.timestamp);
    return true;
  }

  private updateContactFormLimit(count: number, timestamp: number): void {
    localStorage.setItem(
      'contact_form_limit',
      JSON.stringify({
        count: count,
        timestamp: timestamp,
      }),
    );
  }
}
