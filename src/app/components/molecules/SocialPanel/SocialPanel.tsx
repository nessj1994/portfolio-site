import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

// @ts-expect-error FontAwesomeIcon has a know typescript error
const ghIcon: IconProp = 'fa-brands fa-github';

// @ts-expect-error FontAwesomeIcon has a know typescript error
const bskyIcon: IconProp = 'fa-brands fa-bluesky';

// @ts-expect-error FontAwesomeIcon has a know typescript error
const linkedInIcon: IconProp = 'fa-brands fa-linkedin';

// @ts-expect-error FontAwesomeIcon has a know typescript error
const emailIcon: IconProp = 'fa-solid fa-envelope';

const SocialPanel = () => {
  return (
    <div className="flex flex-row gap-5">
      <SocialLink id={0} socialID="GitHub" icon={ghIcon} />
      <SocialLink id={0} socialID="LinkedIn" icon={linkedInIcon} />
      <SocialLink id={0} socialID="Email" icon={emailIcon} />
    </div>
  );
};

export default SocialPanel;
