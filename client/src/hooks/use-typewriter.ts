import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function useTypewriter({ text, speed = 100, startDelay = 0 }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      const typewriterInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typewriterInterval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typewriterInterval);
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
    } else {
      const cleanup = startTyping();
      return cleanup;
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
} 