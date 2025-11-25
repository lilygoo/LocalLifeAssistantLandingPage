import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface PrivacyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyDialog({ open, onOpenChange }: PrivacyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="!max-w-2xl max-h-[80vh] overflow-y-auto !bg-[#FCFBF9]"
        style={{
          color: '#221A13',
        }}
      >
        <DialogHeader>
          <DialogTitle
            style={{
              color: '#76C1B2',
              fontFamily: 'Aladin, cursive',
              fontSize: '1.5rem',
            }}
          >
            Privacy Policy
          </DialogTitle>
          <DialogDescription style={{ color: '#5E574E' }}>
            Last updated: November 2025
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4" style={{ color: '#221A13' }}>
          <section>
            <h3
              className="font-semibold text-lg mb-2"
              style={{ color: '#76C1B2' }}
            >
              1. Information We Collect
            </h3>
            <p className="text-sm leading-relaxed">
              We collect information you provide (name, email, contact details) and automatically collected data (device info, usage patterns, cookies) to improve our services.
            </p>
          </section>

          <section>
            <h3
              className="font-semibold text-lg mb-2"
              style={{ color: '#76C1B2' }}
            >
              2. How We Use Your Information
            </h3>
            <p className="text-sm leading-relaxed">
              We use your information to provide and improve our services, communicate with you, and ensure security. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h3
              className="font-semibold text-lg mb-2"
              style={{ color: '#76C1B2' }}
            >
              3. Data Sharing
            </h3>
            <p className="text-sm leading-relaxed">
              We may share your information with service providers, when required by law, or with your consent. We never sell your data for marketing purposes.
            </p>
          </section>

          <section>
            <h3
              className="font-semibold text-lg mb-2"
              style={{ color: '#76C1B2' }}
            >
              4. Your Rights
            </h3>
            <p className="text-sm leading-relaxed">
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h3
              className="font-semibold text-lg mb-2"
              style={{ color: '#76C1B2' }}
            >
              5. Security & Cookies
            </h3>
            <p className="text-sm leading-relaxed">
              We implement security measures to protect your data. We use cookies to enhance your experience—you can control these through your browser settings.
            </p>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
}

