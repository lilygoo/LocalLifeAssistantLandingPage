import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Footer() {
  const [open, setOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle" as "idle" | "success" | "error");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
      const response = await fetch("https://formspree.io/f/mldvkraj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
        setTimeout(() => {
          setOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="text-white border-t-8" style={{ backgroundColor: '#221A13', borderColor: '#76C1B2' }}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="text-center space-y-4">
          <h3 style={{ color: '#76C1B2', fontFamily: 'Aladin, cursive' }}>LocoMoco</h3>
          <p style={{ color: '#E9E6DF', fontFamily: 'Aladin, cursive' }}>
            Catch the Vibe. Locally.
          </p>
          <p className="flex items-center justify-center gap-2 pt-4" style={{ color: '#E9E6DF' }}>
            Made with <Heart className="h-4 w-4" style={{ color: '#B46A55', fill: '#B46A55' }} /> and retro vibes
          </p>
          <div className="flex justify-center gap-6" style={{ color: '#E9E6DF' }}>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#E9E6DF' }}>About</a>
            <span>•</span>
            <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
              <DialogPrimitive.Trigger asChild>
                <button
                  type="button"
                  className="hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#E9E6DF', 
                    background: 'transparent', 
                    border: 'none', 
                    padding: 0, 
                    cursor: 'pointer', 
                    fontSize: 'inherit', 
                    fontFamily: 'inherit',
                    textDecoration: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none'
                  }}
                >
                  Contact
                </button>
              </DialogPrimitive.Trigger>
              <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
                <DialogPrimitive.Content
                  className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-white p-6 shadow-lg"
                  style={{
                    backgroundColor: '#FCFBF9',
                    borderColor: '#76C1B2',
                    borderWidth: '4px',
                    color: '#221A13',
                    visibility: 'visible',
                    opacity: 1,
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <DialogPrimitive.Title className="text-lg font-semibold leading-none" style={{ color: '#221A13' }}>
                      Contact Us
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="text-sm" style={{ color: '#5E574E' }}>
                      Send us a message and we'll get back to you soon.
                    </DialogPrimitive.Description>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" style={{ color: '#221A13' }}>
                        Your email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        disabled={submitting}
                        style={{ 
                          backgroundColor: '#FFFFFF',
                          borderColor: '#76C1B2',
                          color: '#221A13'
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" style={{ color: '#221A13' }}>
                        Your message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        disabled={submitting}
                        style={{ 
                          backgroundColor: '#FFFFFF',
                          borderColor: '#76C1B2',
                          color: '#221A13'
                        }}
                      />
                    </div>
                    {submitStatus === "success" && (
                      <p className="text-sm" style={{ color: '#76C1B2' }}>
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-sm" style={{ color: '#B46A55' }}>
                        Something went wrong. Please try again later.
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full"
                      style={{
                        backgroundColor: '#76C1B2',
                        color: '#221A13',
                      }}
                    >
                      {submitting ? "Sending..." : "Send"}
                    </Button>
                  </form>
                  <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogPrimitive.Close>
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
            <span>•</span>
            <DialogPrimitive.Root open={privacyOpen} onOpenChange={setPrivacyOpen}>
              <DialogPrimitive.Trigger asChild>
                <button
                  type="button"
                  className="hover:opacity-80 transition-opacity"
                  style={{ 
                    color: '#E9E6DF', 
                    background: 'transparent', 
                    border: 'none', 
                    padding: 0, 
                    cursor: 'pointer', 
                    fontSize: 'inherit', 
                    fontFamily: 'inherit',
                    textDecoration: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none'
                  }}
                >
                  Privacy
                </button>
              </DialogPrimitive.Trigger>
              <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
                <DialogPrimitive.Content
                  className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-white p-6 shadow-lg max-h-[90vh] overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: '#FCFBF9',
                    borderColor: '#76C1B2',
                    borderWidth: '4px',
                    color: '#221A13',
                    visibility: 'visible',
                    opacity: 1,
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <DialogPrimitive.Title className="text-lg font-semibold leading-none" style={{ color: '#221A13' }}>
                      Privacy Policy
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="text-sm" style={{ color: '#5E574E' }}>
                      Your privacy is important to us. Please review our privacy policy below.
                    </DialogPrimitive.Description>
                  </div>
                  <div className="mt-4 overflow-y-auto flex-1 pr-2" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                    <div className="space-y-4" style={{ color: '#221A13' }}>
                      <p className="text-sm leading-relaxed">
                        {/* Privacy policy content will be added here */}
                        This is where your privacy policy content will be displayed. You can add your privacy policy text here, including sections such as:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed ml-4">
                        <li>Information we collect</li>
                        <li>How we use your information</li>
                        <li>Data protection and security</li>
                        <li>Your rights and choices</li>
                        <li>Contact information</li>
                      </ul>
                      <p className="text-sm leading-relaxed">
                        Please replace this placeholder text with your actual privacy policy content.
                      </p>
                    </div>
                  </div>
                  <DialogPrimitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogPrimitive.Close>
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
          </div>
          <p className="pt-4" style={{ color: '#5E574E' }}>
            © 2025 LocoMoco • Stay Groovy ✨
          </p>
        </div>
      </div>
    </footer>
  );
}