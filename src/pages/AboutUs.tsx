import { Seo } from "@/components/seo/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { motion } from "framer-motion";
import { Users, Zap, Globe, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <AppShell>
      <Seo
        title="About Us | Premium Text-to-Speech Pro"
        description="Learn about Premium Text-to-Speech Pro's mission to empower 1 million content creators with free, professional AI voice generation tools."
        canonicalPath="/about-us"
      />

      <article className="space-y-8 md:space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10"
        >
          <header className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-gradient">Empowering 1 Million Creators</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              We believe every creator deserves access to professional-grade voice tools — without paywalls, 
              subscriptions, or complex setups. Premium Text-to-Speech Pro is our commitment to democratizing 
              content creation.
            </p>
          </header>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10"
        >
          <div className="prose prose-zinc max-w-none dark:prose-invert">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-3">
              <Heart className="h-7 w-7 text-primary" />
              Our Mission
            </h2>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Content creation has exploded across TikTok, YouTube Shorts, Instagram Reels, and beyond. 
              Yet many creators struggle with a fundamental challenge: producing high-quality voiceovers 
              quickly and affordably. Traditional solutions require expensive software, technical expertise, 
              or monthly subscriptions that eat into creator earnings.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              We set out to change that. Premium Text-to-Speech Pro was built from the ground up as a 
              <strong> free, browser-based voice studio</strong> that requires no account, no downloads, 
              and no credit card. Our goal is simple: help 1 million creators produce professional voiceovers 
              in seconds, so they can focus on what matters most — telling their stories.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Creator-First Design</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every feature is designed with content creators in mind. From one-click presets for viral 
              content styles to instant MP3 export, we optimize for the creator workflow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Instant & Accessible</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No signup. No installation. No waiting. Open the tool and start creating immediately. 
              We believe the best tools are the ones that get out of your way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
            className="glass-card rounded-2xl p-6 md:col-span-2 lg:col-span-1"
          >
            <Globe className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global & Inclusive</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              With automatic language detection and multi-language voice support, we serve creators 
              worldwide — from English to Spanish, Japanese, Arabic, and dozens more languages.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10"
        >
          <div className="prose prose-zinc max-w-none dark:prose-invert">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Story</h2>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Premium Text-to-Speech Pro started as a simple idea: what if professional voice generation 
              could be as easy as typing a message? We saw creators spending hours on voiceover work or 
              paying premium prices for basic functionality. There had to be a better way.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              We built a tool that harnesses the power of modern browser speech synthesis and AI technology 
              to deliver natural-sounding voices instantly. By processing everything locally on your device, 
              we eliminated the need for cloud infrastructure costs — allowing us to offer the tool completely free.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Today, creators use Premium Text-to-Speech Pro for everything from TikTok hooks and YouTube 
              narrations to podcast intros and educational content. We're proud to be part of the creator 
              economy revolution, and we're just getting started.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="glass-card rounded-3xl p-6 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Join Our Community</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have feedback, ideas, or just want to say hello? We'd love to hear from you. 
            Our community of creators is growing every day, and your voice matters.
          </p>
          <a
            href="https://t.me/Space2347D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-200 hover:opacity-90 hover:scale-105"
          >
            Connect With Us on Telegram
          </a>
        </motion.div>
      </article>
    </AppShell>
  );
}
