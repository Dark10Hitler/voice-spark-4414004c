import { Seo } from "@/components/seo/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, HelpCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <AppShell>
      <Seo
        title="Contact Us | Premium Text-to-Speech Pro"
        description="Get in touch with the Premium Text-to-Speech Pro team. We welcome feedback, feature requests, and partnership inquiries."
        canonicalPath="/contact-us"
      />

      <article className="space-y-8 md:space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-gradient">Get in Touch</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're here to help! Whether you have a question, feedback, or a brilliant idea for a new feature, 
            we'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Telegram CTA */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-telegram flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">Message Us on Telegram</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The fastest way to reach us is through Telegram. Our team actively monitors messages 
                and typically responds within 24 hours. Click below to start a conversation:
              </p>
              <a
                href="https://t.me/Space2347D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-telegram text-white rounded-xl font-medium transition-all duration-200 hover:bg-telegram-hover hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Open Telegram Chat
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-border/50" />

            {/* Info Section */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  What We Can Help With
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <li>• Technical issues or bug reports</li>
                  <li>• Feature requests and suggestions</li>
                  <li>• Questions about how to use the tool</li>
                  <li>• Partnership and collaboration inquiries</li>
                  <li>• General feedback on your experience</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Response Time
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We aim to respond to all inquiries within 24–48 hours. For urgent technical issues, 
                  please mention "URGENT" in your message for priority handling.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Before You Reach Out</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Many common questions are answered in our comprehensive FAQ section. You might find an instant answer there:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/#guide-faq"
              className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-accent/20 transition-all duration-200 hover:bg-accent/40 hover:border-primary/30"
            >
              <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">How do I get the best voice quality?</p>
                <p className="text-xs text-muted-foreground">Tips for natural-sounding audio</p>
              </div>
            </a>
            <a
              href="/#guide-faq"
              className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-accent/20 transition-all duration-200 hover:bg-accent/40 hover:border-primary/30"
            >
              <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">How does MP3 download work?</p>
                <p className="text-xs text-muted-foreground">Export and encoding explained</p>
              </div>
            </a>
            <a
              href="/#guide-faq"
              className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-accent/20 transition-all duration-200 hover:bg-accent/40 hover:border-primary/30"
            >
              <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Can I upload Word documents?</p>
                <p className="text-xs text-muted-foreground">.txt and .docx support</p>
              </div>
            </a>
            <a
              href="/#guide-faq"
              className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-accent/20 transition-all duration-200 hover:bg-accent/40 hover:border-primary/30"
            >
              <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">What are the audio effects?</p>
                <p className="text-xs text-muted-foreground">Radio, Echo, Crystal Clear</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10 text-center"
        >
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">We Value Your Feedback</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every message helps us improve. Whether it's a small UI suggestion or a game-changing feature idea, 
            your input directly shapes the future of Premium Text-to-Speech Pro. Thank you for being part of our community!
          </p>
        </motion.div>
      </article>
    </AppShell>
  );
}
