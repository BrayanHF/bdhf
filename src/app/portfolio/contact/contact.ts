import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FloatingShape } from '../../shared/components/floating-shape/floating-shape';
import { GradientOrb } from '../../shared/components/gradient-orb/gradient-orb';
import { LucideAngularModule, Mail, Phone, Github, Linkedin } from 'lucide-angular';

@Component({
  selector: 'contact-section',
  imports: [ReactiveFormsModule, FloatingShape, GradientOrb, LucideAngularModule],
  templateUrl: './contact.html',
})
export class Contact {
  private fb = inject(FormBuilder);

  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;

  protected showSentMessage = signal(false);

  protected contactForm = this.fb.group({
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

    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) return;

    // TODO: make works
    console.log('Form submitted:', this.contactForm.value);


    this.showSentMessage.set(true);
    this.contactForm.reset();
    setTimeout(() => this.showSentMessage.set(false), 4000);
  }

  private emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(control.value) ? null : { invalidEmail: true };
  }

}
