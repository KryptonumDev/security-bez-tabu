import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { REGEX } from '@/global/constants';
import { removeHtmlTags } from '@/utils/remove-html-tags';

type RequestType = {
  email: string;
  message: string;
  legal: boolean;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const emailData = {
  from: 'Wyzwanie Security <kontakt@wyzwaniesecurity.pl>',
  to: 'wojtek@securitybeztabu.pl',
};

export async function POST(request: Request) {
  const req = (await request.json()) as RequestType;
  const { email, message, legal } = req;

  if (!REGEX.email.test(email) || !legal) {
    return NextResponse.json({ success: false }, { status: 422 });
  }

  const body = `<p>E-mail: <b>${email}</b></p>
    <p>${message.trim() || ''}</p>
    <br />
    <br />
    <p><em>Wyrażono zgodnę na politykę prywatności</em></p>
    `;

  try {
    await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `${email} wysłał wiadomość przez formularz kontaktowy`,
      html: body,
      text: removeHtmlTags(body),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}
