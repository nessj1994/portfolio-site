import Markdown from 'react-markdown';
import bio from '@content/bio.md';
const Bio = () => {
  return (
    <div className="text-wrap  prose prose-sm text-white prose-invert">
      <Markdown>{bio}</Markdown>
    </div>
  );
};

export default Bio;
