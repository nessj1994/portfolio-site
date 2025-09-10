'use client';
import Markdown from 'react-markdown';
import bio from '@content/bio.md';
import { useEffect, useState } from 'react';
const Bio = () => {
  const speed: number = 3;
  const length: number = String(bio).length;
  const [displayedText, setDisplayedText] = useState('');

  const HighlightStrong = ({ node, ...props }) => (
    <strong style={{ color: 'white' }} {...props} />
  );

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
    <div
      className={`text-wrap prose prose-sm text-slate-300 prose-invert w-full grid`}
    >
      <div className="z-0 opacity-0 col-start-1 row-start-1">
        <Markdown>{bio}</Markdown>
      </div>
      <div className={'z-10  col-start-1 row-start-1'}>
        <Markdown components={{ strong: HighlightStrong }}>
          {displayedText}
        </Markdown>
      </div>
    </div>
  );
};

export default Bio;
