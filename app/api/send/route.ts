'use server'

import { EmailTemplate } from '@/components/sections/contact/template';
import { Resend } from 'resend';

const key = process.env.RESEND_KEY;
console.log(key);
const resend = new Resend(key);

export async function sendMail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['aldric.vendas@gmail.com'],
      subject: 'Hello world',
      react: await EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}