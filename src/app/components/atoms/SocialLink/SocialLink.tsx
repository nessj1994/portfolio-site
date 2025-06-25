import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



type SocialIdentifier = "Discord" | "BSky" | "LinkedIn" | "GitHub"; 

type SocialLinkProps = {
    id: number,
    siteID: SocialIdentifier,
    url?: string
    icon: IconProp
}
const SocialLink = (props: SocialLinkProps) => {
    const {id, siteID, url = '', icon} = props;
    const trueURL = url ? url : process.env[`NEXT_PUBLIC_${siteID.toUpperCase()}_URL`]
    return (
        <div className="">
            <a href={trueURL}>
                <FontAwesomeIcon icon={icon} size="2x"  className="text-white`" href={trueURL} />
            </a>
        </div>
    )
}

export default SocialLink;