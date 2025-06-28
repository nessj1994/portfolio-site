'use client';
import Markdown from 'react-markdown';
import bio from '@content/bio.md';
import { useEffect, useState } from 'react';
const Bio = () => {
  let speed: number = 3;
  let length: number = String(bio).length;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(bio.slice(0, index + 1));
      index++;
      if (index === bio.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [bio, speed]);

  return (

        <div className={`text-wrap prose prose-sm text-white prose-invert w-full min-w-[60ch]`} >

        <Markdown>{displayedText}</Markdown>
      </div>
  );
};

export default Bio;
