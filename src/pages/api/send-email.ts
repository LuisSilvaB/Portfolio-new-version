export const prerender = false;

import { Resend } from "resend";

const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  try {
    const body = await request.json();
    const { to, subject, message, from, firstName, lastName } = body;

    const data = await resend.emails.send({
      from: from,
      to: [to],
      subject: subject,
      html: `<p>
        <strong>Nombre:</strong> ${firstName} ${lastName}<br>
        <strong>Email:</strong> ${message}<br>
      </p>`,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error }), { status: 500 });
  }
}
