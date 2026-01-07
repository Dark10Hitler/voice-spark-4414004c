import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const guideItems = [
  {
    id: "why-tts",
    title: "Why Text to Speech is Essential for Modern Content Creation",
    content: (
      <>
        <p>
          In the fast-paced world of short-form video content, <strong>text to speech technology</strong> has become 
          an indispensable tool for creators on TikTok, YouTube Shorts, and Instagram Reels. Whether you're building 
          a faceless content channel, creating educational videos, or simply want to add professional narration to 
          your clips, a reliable <strong>free TTS generator</strong> can dramatically speed up your workflow while 
          maintaining consistent audio quality across all your productions.
        </p>
        <p className="mt-3">
          Premium Text-to-Speech Pro was designed specifically for creators who need a <strong>voice generator with 
          download</strong> capabilities that works instantly in the browser. Unlike traditional TTS services that 
          require account registration, API keys, or monthly subscriptions, our tool provides immediate access to 
          natural-sounding voices with full <strong>MP3 export functionality</strong> at no cost.
        </p>
      </>
    ),
  },
  {
    id: "understanding-tts",
    title: "Understanding Text to Speech Technology for TikTok and YouTube",
    content: (
      <>
        <p>
          The core technology behind modern TTS systems involves converting written text into spoken audio using 
          sophisticated language models. For creators targeting platforms like TikTok and YouTube Shorts, the key 
          requirements are <strong>natural-sounding voices</strong>, consistent pronunciation, and the ability to 
          adjust speech parameters like rate, pitch, and volume to match your content's tone.
        </p>
        <p className="mt-3">
          Our <strong>online TTS tool</strong> leverages advanced neural network-based synthesis to produce audio 
          that sounds remarkably human. The voices adapt to punctuation, handle different languages with automatic 
          detection, and maintain proper intonation throughout longer passages.
        </p>
      </>
    ),
  },
  {
    id: "key-features",
    title: "Key Features for Professional Voice Generation",
    content: (
      <>
        <p>What sets a premium TTS tool apart from basic alternatives is the level of control it provides:</p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li><strong>Voice Selection</strong>: Choose from multiple system voices with automatic language matching</li>
          <li><strong>Speed Control</strong>: Adjust the rate from slow meditation pace to fast advertisement delivery</li>
          <li><strong>Pitch Adjustment</strong>: Fine-tune the voice pitch to match your brand's personality</li>
          <li><strong>Volume Normalization</strong>: Ensure consistent audio levels across all exports</li>
          <li><strong>Audio Effects</strong>: Apply radio, echo, or crystal-clear processing to create unique sounds</li>
          <li><strong>Mood Presets</strong>: One-click settings for horror, advertisement, and meditation content styles</li>
        </ul>
      </>
    ),
  },
  {
    id: "viral-tiktok",
    title: "How to Create Viral TikTok Voiceovers",
    content: (
      <>
        <p>
          The most successful TikTok creators understand that the first 1-2 seconds determine whether viewers stay 
          or scroll. A compelling <strong>TTS voiceover</strong> can dramatically increase your hook retention rate.
        </p>
        <ol className="mt-3 list-decimal pl-5 space-y-1">
          <li>Write a punchy opening line that creates curiosity or tension</li>
          <li>Use the Advertisement preset for high-energy content or Horror for storytelling</li>
          <li>Keep sentences short and use punctuation strategically for natural pacing</li>
          <li>Export as MP3 and sync with your video cuts in your editing software</li>
          <li>Test multiple voice variations to find what resonates with your audience</li>
        </ol>
      </>
    ),
  },
  {
    id: "youtube-instagram",
    title: "Optimizing Audio for YouTube Shorts and Instagram Reels",
    content: (
      <>
        <p>
          While TikTok often favors fast, punchy delivery, YouTube Shorts and Instagram Reels audiences may respond 
          better to slightly slower, more deliberate narration. The key is matching your <strong>TTS voice settings</strong> 
          to your specific content niche and platform expectations.
        </p>
        <p className="mt-3">
          For educational content, use a moderate rate (0.9-1.1x) with clear enunciation. For entertainment and 
          comedy, experiment with faster rates and the Crystal Clear effect to cut through background music. 
          For ASMR or relaxation content, the Meditation preset provides the calm, soothing tone your audience expects.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy and Data Security in Voice Generation",
    content: (
      <>
        <p>
          Unlike cloud-based TTS services that process your scripts on external servers, Premium Text-to-Speech Pro 
          prioritizes your privacy. Your text input is processed using AI-powered voice synthesis, ensuring your 
          content ideas remain secure. The generated audio files are created on-demand and automatically downloaded 
          to your device.
        </p>
        <p className="mt-3">
          This approach is particularly valuable for creators working with sensitive scripts, brand campaigns, or 
          unreleased content where confidentiality matters. No account registration means no data collection.
        </p>
      </>
    ),
  },
  {
    id: "multi-language",
    title: "Multi-Language Support for Global Content",
    content: (
      <p>
        Our TTS engine automatically detects the language of your input text and selects an appropriate voice. 
        This supports creators targeting international audiences or producing content in multiple languages. 
        Whether you're creating content in English, Spanish, French, German, Japanese, Korean, Chinese, Russian, 
        Arabic, or many other languages, the system adapts to provide natural pronunciation and intonation.
      </p>
    ),
  },
  {
    id: "technical",
    title: "Technical Specifications and Browser Compatibility",
    content: (
      <p>
        Premium Text-to-Speech Pro works in all modern web browsers including Chrome, Firefox, Safari, and Edge 
        on both desktop and mobile devices. The tool requires no installation, plugins, or downloads to start 
        creating voiceovers. Audio exports are generated in standard MP3 format at 192kbps, providing excellent 
        quality while maintaining reasonable file sizes for easy upload to social platforms.
      </p>
    ),
  },
  {
    id: "getting-started",
    title: "Getting Started with Your First Voiceover",
    content: (
      <p>
        Ready to create your first professional voiceover? Simply paste your script into the text area above, 
        select a voice or use automatic detection, choose a mood preset that matches your content style, and 
        click Play to preview. Once you're satisfied with the result, click Download MP3 to export your audio 
        file. The entire process takes just seconds, letting you focus on what matters most: creating great content.
      </p>
    ),
  },
];

export function SeoFooter() {
  return (
    <section className="mt-10 md:mt-14 space-y-8 md:space-y-10">
      {/* SEO Content Block as Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
      >
        <header className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
            <span className="text-gradient">Complete Guide to Free Text to Speech for Content Creators</span>
          </h2>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {guideItems.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-border/40 data-[state=open]:bg-accent/20 rounded-lg px-3 md:px-4 -mx-3 md:-mx-4 transition-colors duration-200"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed prose-wide">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Legal Links */}
      <div className="glass-card rounded-2xl px-5 py-4 md:px-6 md:py-5">
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="leading-relaxed">
            Premium Text-to-Speech Pro - The free AI voice generator for content creators.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <NavLink 
              to="/privacy-policy" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 story-link"
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              to="/terms-of-service" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 story-link"
            >
              Terms of Service
            </NavLink>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).googlefc?.callbackQueue) {
                  (window as any).googlefc.callbackQueue.push({ CONSENT_DATA_READY: () => {} });
                  (window as any).googlefc.showRevocationMessage?.();
                }
              }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 story-link"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
