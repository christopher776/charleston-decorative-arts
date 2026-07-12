"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
        <Input id="name" required className="mt-1 rounded-none" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required className="mt-1 rounded-none" />
      </div>
      <div>
        <Label htmlFor="message">Project Details</Label>
        <Textarea id="message" required rows={5} className="mt-1 rounded-none" />
      </div>
      <Button type="submit" className="w-full rounded-none bg-[#8a6d1d] text-xs uppercase tracking-widest text-[#fbf6ec] hover:bg-[#6f5717]">
        Submit Inquiry
      </Button>
    </form>
  );
}
