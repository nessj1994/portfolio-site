import { IconProp } from "@fortawesome/fontawesome-svg-core";
import SocialLink from "../../SocialLink/SocialLink";

// @ts-expect-error FontAwesomeIcon has a know typescript error
const ghIcon: IconProp = 'fa-brands fa-github';
// @ts-expect-error FontAwesomeIcon has a know typescript error
const bskyIcon: IconProp = 'fa-brands fa-bluesky';
// @ts-expect-error FontAwesomeIcon has a know typescript error

const linkedInIcon: IconProp = 'fa-brands fa-linkedin'

const SocialPanel = () => {
    return (
        <div className="mt-6 flex flex-row gap-5">
            <SocialLink id={0} siteID="BSky" icon={bskyIcon}/>
            <SocialLink id={0} siteID="GitHub" icon={ghIcon}/>
            <SocialLink id={0} siteID="LinkedIn" icon={linkedInIcon}/>
        </div>
    )
}

export default SocialPanel;