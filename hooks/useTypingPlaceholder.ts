"use client";

import { useState, useEffect } from 'react';

const TYPING_SPEED = 50;
const PAUSE_DURATION = 2000;
const BACKSPACE_SPEED = 30;

export function useTypingPlaceholder(phrases: string[]) {
  const [placeholder, setPlaceholder] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < phrases[phraseIndex].length) {
        const timeout = setTimeout(() => {
          setPlaceholder(prev => prev + phrases[phraseIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_DURATION);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setPlaceholder(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, BACKSPACE_SPEED);
        return () => clearTimeout(timeout);
      } else {
        setPhraseIndex(prev => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, phraseIndex, phrases]);

  return placeholder;
}