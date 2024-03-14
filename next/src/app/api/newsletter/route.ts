import { NextResponse } from 'next/server';
import { REGEX } from '@/global/constants';

const ROUTE = 'https://cwits.api-us1.com/api/3/contacts';
const API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;

type RequestTypes = {
  email: string;
  legal: boolean;
};

export async function POST(request: Request) {
  const req = (await request.json()) as RequestTypes;
  const { email, legal } = req;

  if (!REGEX.email.test(email) || !legal) {
    return NextResponse.json({ success: false }, { status: 422 });
  }

  const body = {
    contact: {
      email: email,
    },
  };

  try {
    const response = await fetch(ROUTE, {
      method: 'POST',
      headers: {
        'Api-Token': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      return NextResponse.json({ success: false, message: 'Connectivity to API failed' }, { status: 422 });
    }
    const responseData = await response.json();
    if (!responseData.contact) {
      return NextResponse.json({ success: false, message: 'Unable to create new subscriber' }, { status: 422 });
    }
    return NextResponse.json({ success: true, message: 'Successfully created new subscriber' });
  } catch {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}
