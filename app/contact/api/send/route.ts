import { EmailTemplate } from "@/components/contact/EmailTemplate";
import { render } from "@react-email/render";
import { Resend } from "resend";

type ContactPayload = {
  fullName: string;
  email: string;
  discussion: string;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") {
    return false;
  }

  const payload = body as Partial<ContactPayload>;
  return (
    typeof payload.fullName === "string" &&
    payload.fullName.trim().length > 0 &&
    typeof payload.email === "string" &&
    payload.email.trim().length > 0 &&
    typeof payload.discussion === "string" &&
    payload.discussion.trim().length > 0
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Missing RESEND_API_KEY environment variable." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return Response.json(
      { error: "fullName, email, and discussion are required." },
      { status: 400 },
    );
  }

  const { fullName, email, discussion } = body;

  const from = process.env.RESEND_FROM_EMAIL;
  const to = "devstackedmagazine@gmail.com";

  if (!from) {
    return Response.json(
      {
        error:
          "Missing RESEND_FROM_EMAIL. Set it to a verified sender address in Resend.",
      },
      { status: 500 },
    );
  }

  try {
    const html = await render(
      EmailTemplate({
        fullName: fullName.trim(),
        email: email.trim(),
        discussion: discussion.trim(),
      }),
    );

    const { data, error } = await resend.emails.send({
      from: `DevStacked Contact <${from}>`,
      to: [to],
      replyTo: email.trim(),
      subject: `New contact request from ${fullName.trim()}`,
      html,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ id: data?.id }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to send email.";

    return Response.json({ error: message }, { status: 500 });
  }
}
