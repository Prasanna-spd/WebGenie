'use client';
import { useEffect, useState } from 'react';

const words = ['REDEFINE', 'RECREATE', 'RECONSTRUCT'];

const TypeWriter = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setText('')
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <h2 className="text-4xl md:text-5xl font-medium text-center mt-6 text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
      <span>{text}</span>
      <span className="text-white animate-blink">|</span>
    </h2>
    
  );
};

export default TypeWriter;
