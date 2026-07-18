"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/data";

interface ContactFormProps {
  /** Shown as the email subject line so studio@ can tell which form a lead came from. */
  subject?: string;
}

export function ContactForm({ subject = "New Consultation Request — Website" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      _subject: subject,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 border border-[#c9a959] bg-[#f3ead9] p-10 text-center">
        <CheckCircle className="h-8 w-8 text-[#8a6d1d]" />
        <p className="font-serif text-lg text-[#3d2b1f]">Thank you — we&rsquo;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-[#e4d9c2] bg-white p-8">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required className="mt-1 rounded-none" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1 rounded-none" />
      </div>
      <div>
        <Label htmlFor="message">Project Details</Label>
        <Textarea id="message" name="message" required rows={5} className="mt-1 rounded-none" />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 border border-red-300 bg-red-50 p-3 text-xs text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Something went wrong sending your message. Please try again, or email us directly at{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">
              {SITE.email}
            </a>
            .
          </span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-none bg-[#8a6d1d] text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Inquiry"}
      </Button>
    </form>
  );
}
