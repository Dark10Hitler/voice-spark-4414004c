import { motion } from "framer-motion";
import { Sparkles, Film, Lightbulb } from "lucide-react";

const featuredScripts = [
  {
    id: "viral-hook",
    title: "Viral TikTok Hook",
    category: "Short-Form Content",
    icon: Sparkles,
    hook: "Nobody talks about this, but it changed everything for me.",
    storyboard: [
      "Scene 1 (0-2s): Close-up of speaker with mysterious expression, text overlay appears",
      "Scene 2 (2-5s): Quick cuts showing 'before' scenario - struggle montage",
      "Scene 3 (5-10s): Transition to 'discovery moment' - bright lighting change",
      "Scene 4 (10-15s): Reveal the solution with dynamic product/concept shots",
    ],
    voiceSettings: "Rate: 1.15x | Pitch: +5% | Preset: Advertisement | Effect: Crystal Clear",
    aiPrompt: "Generate a confident, slightly mysterious delivery that builds curiosity. Emphasize 'nobody' and 'everything' for maximum hook retention.",
  },
  {
    id: "meditation-intro",
    title: "Meditation App Intro",
    category: "Wellness Content",
    icon: Lightbulb,
    hook: "Take a deep breath. You've made it to this moment, and that's enough.",
    storyboard: [
      "Scene 1 (0-3s): Slow fade-in on nature imagery - soft morning light through trees",
      "Scene 2 (3-8s): Gentle pan across calm water, ripples slowly spreading",
      "Scene 3 (8-15s): Close-up of peaceful details - dewdrops, floating leaves",
      "Scene 4 (15-20s): Wide shot of serene landscape with breathing prompt overlay",
    ],
    voiceSettings: "Rate: 0.85x | Pitch: -3% | Preset: Meditation | Effect: None",
    aiPrompt: "Create a warm, reassuring tone with natural pauses between phrases. The voice should feel like a gentle guide, not instructive.",
  },
  {
    id: "product-review",
    title: "Tech Product Review",
    category: "YouTube Content",
    icon: Film,
    hook: "I tested this for 30 days so you don't have to. Here's my honest verdict.",
    storyboard: [
      "Scene 1 (0-3s): Product unboxing montage with dynamic angles",
      "Scene 2 (3-10s): Day-by-day usage clips with timestamp overlays",
      "Scene 3 (10-20s): Feature demonstrations with screen recordings",
      "Scene 4 (20-30s): Side-by-side comparisons with competitors",
      "Scene 5 (30-45s): Final verdict with pros/cons graphics",
    ],
    voiceSettings: "Rate: 1.0x | Pitch: Normal | Preset: Default | Effect: Crystal Clear",
    aiPrompt: "Deliver with authentic enthusiasm but maintain credibility. Sound knowledgeable without being salesy. Pause slightly before 'honest verdict' for emphasis.",
  },
  {
    id: "horror-story",
    title: "Creepy Story Narration",
    category: "Entertainment",
    icon: Sparkles,
    hook: "The last thing I remember before everything went dark... was the sound of my own heartbeat.",
    storyboard: [
      "Scene 1 (0-3s): Black screen, text fades in letter by letter",
      "Scene 2 (3-8s): Slow reveal of dark environment with minimal lighting",
      "Scene 3 (8-15s): Point-of-view shots with shaky camera effect",
      "Scene 4 (15-20s): Heartbeat sound design synced with cuts to black",
    ],
    voiceSettings: "Rate: 0.9x | Pitch: -8% | Preset: Horror | Effect: Echo",
    aiPrompt: "Build tension through pacing. Slow down at 'everything went dark' and add weight to 'heartbeat'. The voice should feel like a confession, not a performance.",
  },
  {
    id: "educational",
    title: "Educational Explainer",
    category: "EdTech Content",
    icon: Lightbulb,
    hook: "In the next 60 seconds, you'll understand what takes most people years to learn.",
    storyboard: [
      "Scene 1 (0-5s): Bold claim with animated text and icons",
      "Scene 2 (5-20s): Step-by-step breakdown with diagrams",
      "Scene 3 (20-40s): Real-world examples with before/after visuals",
      "Scene 4 (40-55s): Quick recap with key takeaways",
      "Scene 5 (55-60s): Call-to-action for deeper learning",
    ],
    voiceSettings: "Rate: 1.05x | Pitch: +2% | Preset: Default | Effect: Crystal Clear",
    aiPrompt: "Project confidence and authority without arrogance. Use clear enunciation for technical terms. Build excitement around the 'aha moment'.",
  },
];

export function FeaturedScripts() {
  return (
    <section className="mt-12 md:mt-16" aria-label="Featured Scripts Gallery">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
      >
        <header className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
            <span className="text-gradient">Featured Scripts & Production Plans</span>
          </h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
            Explore real-world examples of how creators use Premium Text-to-Speech Pro. Each sample includes 
            the hook, storyboard breakdown, voice settings, and AI prompting tips for maximum impact.
          </p>
        </header>

        <div className="space-y-6 md:space-y-8">
          {featuredScripts.map((script, index) => (
            <motion.article
              key={script.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              className="p-5 md:p-6 rounded-xl border border-border/40 bg-accent/10 hover:bg-accent/20 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <script.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">{script.title}</h3>
                  <span className="text-xs text-muted-foreground">{script.category}</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Hook */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-1">Hook Script</h4>
                  <blockquote className="text-sm md:text-base italic border-l-2 border-primary/30 pl-3 text-foreground/90">
                    "{script.hook}"
                  </blockquote>
                </div>

                {/* Storyboard */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">Storyboard Breakdown</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
                    {script.storyboard.map((scene, i) => (
                      <li key={i} className="pl-3 border-l border-border/50">{scene}</li>
                    ))}
                  </ul>
                </div>

                {/* Voice Settings */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-1">Recommended Voice Settings</h4>
                  <p className="text-sm text-muted-foreground font-mono bg-accent/30 px-3 py-2 rounded-lg">
                    {script.voiceSettings}
                  </p>
                </div>

                {/* AI Prompt */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-1">AI Delivery Notes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {script.aiPrompt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
