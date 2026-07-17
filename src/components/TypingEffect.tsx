import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypingEffect({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: TypingEffectProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          className="gradient-text font-semibold"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1 w-[3px] h-[1.1em] bg-primary-400 inline-block"
      />
    </span>
  );
}
