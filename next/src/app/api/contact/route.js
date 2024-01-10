import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { removeHtmlTags } from '@/utils/functions';
import { domain } from '@/global/Seo';
import { regex } from '@/global/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailData = {
  from: 'Wyzwanie Security <kontakt@wyzwaniesecurity.pl>',
  to: 'wojtek@securitybeztabu.pl',
}

const headers = {
  'Access-Control-Allow-Origin': domain,
  'Access-Control-Allow-Methods': 'POST',
}

export async function POST(request) {
  const req = await request.json();
  const { email='', message='', legal=false } = req;

  if (!regex.email.test(email.toLowerCase() || !legal)) {
    return NextResponse.json({ success: false }, { status: 422, headers })
  }

  const body = `<p>E-mail: <b>${email}</b></p>
    <p>${message.trim() || ''}</p>
    <br />
    <br />
    <p><em>Wyrażono zgodnę na politykę prywatności</em></p>
    `

  try {
    await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `${email} wysłał wiadomość przez formularz kontaktowy`,
      html: body,
      text: removeHtmlTags(body),
    });
    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    return NextResponse.json({ success: false }, { headers });
  }
}