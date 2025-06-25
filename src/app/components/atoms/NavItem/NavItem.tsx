import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavItemProps = {
  icon?: IconProp;
  label: string;
  href: string;
};

const NavItem = (props: NavItemProps) => {
  const { icon, label, href } = props;

  return (
    <div className="flex flex-row gap-0.5 items-center hover:color-gray-300 ">
      {icon && <FontAwesomeIcon icon={icon} className="size-6" />}
      <a
        className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-md font-medium"
        href={href}
      >
        {label}
      </a>
    </div>
  );
};

export default NavItem;
