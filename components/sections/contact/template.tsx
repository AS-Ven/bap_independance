import * as React from 'react';

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <h1>Message de la part de {name}</h1>
    <br />
    <p>{message}</p>
    <br />
    <h2>Vous pouvez contacter {name} à l&apos;addresse &quot;{email}&quot;</h2>
  </div>
);