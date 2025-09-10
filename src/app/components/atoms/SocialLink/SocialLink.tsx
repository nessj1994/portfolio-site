// File Description: Display a social link with an icon and URL

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SocialIdentifier = 'Discord' | 'BSky' | 'LinkedIn' | 'GitHub' | 'Email';

type SocialLinkProps = {
  id: number;
  socialID: SocialIdentifier;
  url?: string;
  icon: IconProp;
};
const SocialLink = (props: SocialLinkProps) => {
  const { id, socialID, url = '', icon } = props;
  const trueURL = url ? url : process.env[`${socialID.toUpperCase()}_URL`];
  return (
    <div className="flex items-center min-h-[32px]">
      <a href={trueURL}>
        <FontAwesomeIcon
          icon={icon}
          className="text-3xl hover:text-highlight-200"
          href={trueURL}
        />
      </a>
    </div>
  );
};

export default SocialLink;
