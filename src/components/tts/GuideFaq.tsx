import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "what-is",
    question: "What is Premium Text-to-Speech Pro?",
    answer: (
      <>
        <p>
          Premium Text-to-Speech Pro is an <strong>online TTS no registration</strong> tool built for creators who want
          fast, clean, repeatable voiceovers. You paste a script, choose a voice, apply a mood preset, and export.
          Everything runs inside your browser, which keeps your workflow lightweight and privacy-friendly.
        </p>
        <p className="mt-3">
          If you're searching for <strong>Natural AI voices free</strong> or a "free text to speech for TikTok" studio,
          this app is designed to feel like a premium SaaS product while staying instant to use.
        </p>
      </>
    ),
  },
  {
    id: "natural-voice",
    question: "How do I get the best \"natural\" voice?",
    answer: (
      <>
        <p>
          Your device provides multiple system voices. We automatically listen for changes in the voice list and then
          rank voices that include keywords like <em>Google</em> or <em>Natural</em>. These voices often sound cleaner
          for short-form content. If you don't want to choose manually, leave voice selection on "Auto (best match)".
        </p>
        <p className="mt-3">
          Pro tip: keep your script conversational and add punctuation. The speech engine uses punctuation for timing.
          Commas add micro-pauses, while periods create a stronger cadence that can increase retention.
        </p>
      </>
    ),
  },
  {
    id: "language-detection",
    question: "Does this tool detect language automatically?",
    answer: (
      <p>
        Yes. We run a quick on-device language heuristic and pick a matching voice when possible. This is useful for
        bilingual creators, multi-language channels, and global content strategies. It also helps when you paste
        captions in Russian, Spanish, Japanese, or mixed scripts.
      </p>
    ),
  },
  {
    id: "presets",
    question: "How do the presets work (Horror / Advertisement / Meditation)?",
    answer: (
      <>
        <p>
          Presets are "one-tap moods" that tune pitch, rate, and effects. They are built for mass-market creator
          workflows: you can instantly test variations, then export the best-performing voiceover.
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li><strong>Horror</strong>: low pitch + slower rate + echo to create tension.</li>
          <li><strong>Advertisement</strong>: higher pitch + faster delivery + "crystal clear" boost for punchy hooks.</li>
          <li><strong>Meditation</strong>: gentle pitch/rate + softer volume for calm narration.</li>
        </ul>
      </>
    ),
  },
  {
    id: "effects",
    question: "What are the audio effects (Radio / Echo / Crystal Clear)?",
    answer: (
      <p>
        Effects are applied to the <em>exported</em> audio and the post-export preview. Radio uses a high-pass filter
        and subtle distortion for a phone/AM vibe. Echo uses a delay with feedback. Crystal Clear adds a light
        compressor and a high-shelf "clarity" lift.
      </p>
    ),
  },
  {
    id: "mp3-download",
    question: "How does MP3 download work?",
    answer: (
      <>
        <p>
          For maximum compatibility, we use a local capture approach and then encode to MP3 using a
          lightweight encoder. This keeps the promise of a <strong>voice generator with download</strong> without
          external APIs.
        </p>
        <p className="mt-3">
          During export you'll see "Processing & downloading…" with progress and a Cancel button. When encoding
          finishes, we trigger an automatic download and also show an audio preview.
        </p>
      </>
    ),
  },
  {
    id: "long-text",
    question: "Why does the app split long text?",
    answer: (
      <p>
        Browsers can time out or become unstable when asked to read extremely long blocks in a single utterance. We
        automatically split text into sentence-like chunks and queue them. This improves reliability for narrations,
        lists, and long YouTube scripts.
      </p>
    ),
  },
  {
    id: "file-upload",
    question: "Can I upload .txt or .docx scripts?",
    answer: (
      <p>
        Yes. Drag and drop a <strong>.txt</strong> file or a <strong>.docx</strong> (Word) document. We extract the
        raw text from .docx locally, then paste it into the editor so you can tweak pacing and emphasis.
      </p>
    ),
  },
  {
    id: "youtube-shorts",
    question: "How do I use this tool for YouTube Shorts?",
    answer: (
      <p>
        YouTube Shorts voiceovers should be crisp and immediate. Start with a 1–2 sentence hook, test the
        Advertisement preset, then slightly reduce the rate if it feels rushed. Use short lines and punctuation.
        Export, listen to the preview, and only then place it under your video.
      </p>
    ),
  },
  {
    id: "instagram-reels",
    question: "How do I use this tool for Instagram Reels?",
    answer: (
      <p>
        Reels often benefit from a softer cadence. Try Meditation for explanatory content, or Advertisement for fast
        "tips" style videos. Keep the script under 120–160 words for most Reels and let the voice breathe with commas.
      </p>
    ),
  },
  {
    id: "script-length",
    question: "What's the ideal script length for Shorts and Reels?",
    answer: (
      <p>
        For most creators, 45–70 seconds is a sweet spot for retention. That's roughly 110–170 words depending on the
        rate. Keep it tighter for trending formats where viewers swipe quickly.
      </p>
    ),
  },
  {
    id: "fast-cuts",
    question: "How do I make a voiceover match fast cuts?",
    answer: (
      <p>
        Write in short "beats" (one idea per line). Use punctuation intentionally. If you need faster cuts, increase
        rate slightly (1.1–1.2) and reduce echo. Re-export and compare.
      </p>
    ),
  },
  {
    id: "segments",
    question: "Should I export one long voiceover or several segments?",
    answer: (
      <p>
        For Shorts/Reels, exporting segments can give you better editing control. Create separate paragraphs for each
        scene, export, and align each segment to your cut points.
      </p>
    ),
  },
  {
    id: "premium-sound",
    question: "How do I make the voice sound more \"premium\"?",
    answer: (
      <p>
        Choose the best "natural" system voice, keep volume high, and avoid overusing effects. Use Crystal Clear for
        ads or product scripts, and avoid distortion unless it's a stylistic choice.
      </p>
    ),
  },
  {
    id: "robotic-pacing",
    question: "How do I prevent robotic pacing?",
    answer: (
      <p>
        Add pauses with commas, use shorter sentences, and vary sentence length. Read your script out loud once: if
        it sounds natural when you read it, it tends to sound natural in TTS too.
      </p>
    ),
  },
];

export function GuideFaq() {
  return (
    <section aria-label="Guide and FAQ" className="mt-10 md:mt-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
      >
        <header className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
            <span className="text-gradient">Guide & FAQ: Free Text to Speech for TikTok</span>
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
            Learn how to turn scripts into high-retention voiceovers with a voice generator with download — optimized for
            TikTok, YouTube Shorts, and Instagram Reels.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-border/40 data-[state=open]:bg-accent/20 rounded-lg px-3 md:px-4 -mx-3 md:-mx-4 transition-colors duration-200"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed prose-wide">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
