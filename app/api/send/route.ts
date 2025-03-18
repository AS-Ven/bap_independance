'use server'

import { EmailTemplate } from '@/components/sections/contact/template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function sendMail(form: FormData) {

    const name = form.get('name')?.toString()
    const email = form.get('email')?.toString()
    const message = form.get('message')?.toString()
    
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['aldric.vendas@gmail.com'],
      subject: 'Contacte automatique',
      react: EmailTemplate({ name: name!, email: email!, message: message! }),
    });
}