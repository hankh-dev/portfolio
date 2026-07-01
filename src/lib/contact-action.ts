"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  error?: "validation" | "send";
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Server action for the contact form (works with React's useActionState).
 *
 * Sends email via Resend when RESEND_API_KEY + CONTACT_TO_EMAIL are set.
 * Without them (e.g. local dev), it logs the message and reports success so
 * the form stays usable out of the box.
 */
export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields; humans never see this one.
  if (String(formData.get("company") ?? "").trim()) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !message || !EMAIL_RE.test(email)) {
    return { status: "error", error: "validation" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.info(
      "[contact] RESEND_API_KEY/CONTACT_TO_EMAIL not configured — message logged only:",
      { name, email, message },
    );
    return { status: "success" };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) {
      console.error("[contact] Resend returned an error:", error);
      return { status: "error", error: "send" };
    }
    return { status: "success" };
  } catch (err) {
    console.error("[contact] Unexpected error while sending:", err);
    return { status: "error", error: "send" };
  }
}
