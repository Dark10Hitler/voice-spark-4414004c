import { motion } from "framer-motion";
import { TrendingUp, Brain, Award, BookOpen } from "lucide-react";

export function ContentSections() {
  return (
    <div className="space-y-10 md:space-y-14 mt-12 md:mt-16">
      {/* The Science of Virality */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
        aria-labelledby="virality-heading"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 id="virality-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              <span className="text-gradient">The Science of Virality</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Understanding what makes content spread</p>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert text-sm md:text-base">
          <p className="leading-relaxed">
            Viral content isn't random — it follows predictable psychological patterns that trigger sharing behavior. 
            Research from the Wharton School of Business reveals that content spreading across social platforms 
            typically activates one of six key emotional drivers: <strong>social currency</strong> (making sharers 
            look good), <strong>triggers</strong> (environmental cues), <strong>emotion</strong> (high-arousal feelings), 
            <strong>public visibility</strong> (observable behavior), <strong>practical value</strong> (useful information), 
            and <strong>stories</strong> (narrative wrappers).
          </p>
          <p className="leading-relaxed mt-4">
            For short-form video creators, the voice component plays a critical role in triggering these drivers. 
            A well-crafted voiceover can transform ordinary information into <em>must-share content</em> by adding 
            emotional texture, building anticipation, and creating memorable audio hooks that viewers can recall 
            and repeat.
          </p>
          <p className="leading-relaxed mt-4">
            The first 1-3 seconds of audio are particularly crucial. Data from TikTok's creator portal shows that 
            videos with compelling audio hooks retain 65% more viewers past the 3-second mark. This is where 
            Premium Text-to-Speech Pro's <strong>Advertisement preset</strong> shines — it's engineered to deliver 
            punchy, high-energy openings that command attention in crowded feeds.
          </p>
          <p className="leading-relaxed mt-4">
            Beyond the hook, pacing consistency matters enormously. Viral creators often speak at 140-160 words 
            per minute — fast enough to maintain energy but slow enough for comprehension. Our rate slider 
            (0.5x to 2x) gives you precise control to hit this sweet spot for your specific niche and audience.
          </p>
        </div>
      </motion.section>

      {/* AI Storyboarding Explained */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
        aria-labelledby="storyboarding-heading"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 id="storyboarding-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              <span className="text-gradient">AI Storyboarding Explained</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">How AI transforms scripts into visual narratives</p>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert text-sm md:text-base">
          <p className="leading-relaxed">
            Storyboarding has traditionally been a time-intensive process requiring artistic skills and extensive 
            planning. Modern AI tools are revolutionizing this workflow by automatically suggesting visual sequences, 
            camera movements, and timing based on your script's content and emotional arc.
          </p>
          <p className="leading-relaxed mt-4">
            The process works through <strong>semantic analysis</strong>: AI models parse your script to identify 
            key moments, emotional peaks, and transition points. For example, when your script contains phrases 
            like "but then everything changed," the AI recognizes this as a <em>pivot point</em> that likely 
            requires a visual transition — perhaps a lighting shift, scene change, or dramatic cut.
          </p>
          <p className="leading-relaxed mt-4">
            Premium Text-to-Speech Pro integrates seamlessly into this AI-enhanced workflow. By previewing your 
            voiceover before finalizing visuals, you can identify where natural pauses occur, where emphasis 
            falls, and how long each section actually takes to deliver. This audio-first approach leads to 
            tighter video edits with better audio-visual sync.
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-3">The Audio-First Storyboarding Method</h3>
          <ol className="list-decimal pl-5 space-y-2 leading-relaxed">
            <li><strong>Write your script</strong> — Focus on the narrative flow without worrying about timing</li>
            <li><strong>Generate voiceover</strong> — Use our presets to find the right energy and pacing</li>
            <li><strong>Analyze timing</strong> — Note where pauses fall and how long each section runs</li>
            <li><strong>Plan visuals</strong> — Match scene changes to natural audio breaks</li>
            <li><strong>Export and edit</strong> — Import the MP3 and build video around the audio timeline</li>
          </ol>
          <p className="leading-relaxed mt-4">
            This method is particularly effective for faceless content channels where the voiceover carries 
            the entire narrative. By locking in audio first, creators eliminate the frustrating experience of 
            cutting video only to discover the voiceover doesn't fit.
          </p>
        </div>
      </motion.section>

      {/* Creator Success Stories */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
        aria-labelledby="success-heading"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 id="success-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              <span className="text-gradient">Creator Success Stories</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Real results from the creator community</p>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert text-sm md:text-base">
          <p className="leading-relaxed">
            Across TikTok, YouTube Shorts, and Instagram Reels, creators are discovering that consistent, 
            high-quality voiceovers can be a genuine competitive advantage. Here's how different creator 
            archetypes are leveraging text-to-speech technology to scale their content production.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">The Faceless Finance Channel</h3>
          <p className="leading-relaxed">
            Financial education content has exploded on short-form platforms, with creators sharing investing 
            tips, saving strategies, and market analysis. These channels often operate "faceless" — using 
            stock footage, screen recordings, and TTS narration. The challenge is maintaining viewer trust 
            without a human face. Successful creators in this niche use <strong>neutral, authoritative voices</strong> 
            at slightly slower rates (0.9-1.0x) to convey credibility. The Meditation preset's calm delivery 
            works surprisingly well for complex financial explanations.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">The Story-Time Creator</h3>
          <p className="leading-relaxed">
            Reddit stories, true crime summaries, and creepy tales dominate certain corners of social media. 
            These creators prioritize <em>atmospheric audio</em> that enhances tension. Using our Horror preset 
            with Echo effect creates an immersive "campfire story" vibe that keeps viewers watching until the 
            final reveal. Top story-time creators report that audio quality directly correlates with watch 
            time — poor narration causes immediate scroll-away.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">The Educational Explainer</h3>
          <p className="leading-relaxed">
            Science communicators, language teachers, and skill-sharing creators rely on clear, engaging 
            explanations. The key is balancing information density with entertainment value. Successful 
            educational creators use <strong>slightly faster rates</strong> (1.1x) to maintain energy, 
            paired with strategic pauses for emphasis. The Crystal Clear effect helps voice cut through 
            background music that many educational videos use to maintain viewer engagement.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">The Product Review Specialist</h3>
          <p className="leading-relaxed">
            Product reviews and "honest verdict" content drive significant affiliate revenue for creators. 
            The voice tone matters enormously here — viewers are sensitive to "salesy" delivery that undermines 
            credibility. Smart review creators use the default voice settings with minimal effects, focusing 
            instead on <em>script quality</em> and authentic language that builds trust over time.
          </p>
        </div>
      </motion.section>

      {/* Step-by-Step Guide */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8"
        aria-labelledby="guide-heading"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 id="guide-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              <span className="text-gradient">Step-by-Step Guide: From Script to Viral Video</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">A complete walkthrough for new creators</p>
          </div>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert text-sm md:text-base">
          <p className="leading-relaxed">
            Whether you're creating your first TikTok or scaling to 10 videos per day, following a consistent 
            workflow dramatically improves quality and efficiency. Here's the complete process from blank page 
            to published content.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 1: Research & Ideation (5-10 minutes)</h3>
          <p className="leading-relaxed">
            Start by analyzing what's performing in your niche. Use TikTok's Creative Center, YouTube Shorts' 
            trending tab, or Instagram's Explore page to identify patterns. Look for <strong>hooks that stop 
            the scroll</strong> — the first sentence that makes viewers pause. Note the topics, formats, and 
            emotional triggers that generate engagement in your target niche.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 2: Script Writing (10-15 minutes)</h3>
          <p className="leading-relaxed">
            Write your script with TTS in mind. Short sentences work better than long, complex ones. Use 
            punctuation strategically — commas add pauses, periods create stronger breaks. Start with your 
            strongest hook, then deliver on the promise before viewers swipe away. Aim for 100-150 words 
            for most short-form content (approximately 45-60 seconds of audio).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 3: Voice Generation (2-5 minutes)</h3>
          <ol className="list-decimal pl-5 space-y-2 leading-relaxed">
            <li><strong>Paste your script</strong> into Premium Text-to-Speech Pro's text editor</li>
            <li><strong>Select a voice</strong> or use "Auto (best match)" for automatic language detection</li>
            <li><strong>Choose a preset</strong> that matches your content style (Horror, Advertisement, Meditation, or Default)</li>
            <li><strong>Adjust rate and pitch</strong> if needed — start with preset values and fine-tune</li>
            <li><strong>Preview the audio</strong> using the Play button to catch any issues</li>
            <li><strong>Apply effects</strong> if desired (Radio, Echo, or Crystal Clear)</li>
            <li><strong>Export MP3</strong> when you're satisfied with the result</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 4: Video Assembly (10-20 minutes)</h3>
          <p className="leading-relaxed">
            Import your voiceover MP3 into your preferred editor (CapCut, Premiere Pro, DaVinci Resolve, etc.). 
            Build your video around the audio timeline, matching visual cuts to natural speech pauses. Add 
            text overlays, B-roll footage, and transitions that reinforce (not distract from) your message. 
            Keep text readable for at least 3 seconds per screen.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 5: Optimization & Publishing (5 minutes)</h3>
          <p className="leading-relaxed">
            Before hitting publish, ensure your video meets platform requirements: vertical 9:16 aspect ratio, 
            proper hashtags, compelling thumbnail (if applicable), and a description that includes keywords. 
            Post during your audience's peak hours — typically 7-9 AM or 7-11 PM in their timezone. Engage 
            with early comments to boost algorithmic reach.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 6: Iteration & Improvement</h3>
          <p className="leading-relaxed">
            Review analytics after 24-48 hours. Which videos retain viewers longest? Where do people drop off? 
            Use these insights to refine your hooks, pacing, and content choices. Successful creators treat 
            each video as an experiment, continuously optimizing based on data. The fastest path to viral 
            content is volume + iteration — aim for consistency over perfection.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
