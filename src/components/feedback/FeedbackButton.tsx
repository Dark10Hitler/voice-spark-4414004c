import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FeedbackButton() {
  return (
    <motion.a
      href="https://t.me/Space2347D"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 feedback-button rounded-full px-5 py-3 font-medium text-sm shadow-lg tap-target"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Send feedback via Telegram"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Send Feedback</span>
    </motion.a>
  );
}
