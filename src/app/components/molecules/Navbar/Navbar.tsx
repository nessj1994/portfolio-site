import NavItem from '../../atoms/NavItem/NavItem';

// @ts-expect-error FontAwesomeIcon has a know typescript error
const ghIcon: IconProp = 'fa-brands fa-github';
// <FontAwesomeIcon icon={ghIcon} className="size-10" /> |

const navItems = [
  {
    id: 0,
    label: 'About',
    href: '#',
  },
  {
    id: 1,
    label: 'Projects',
    href: '#projects',
  },
  {
    id: 3,
    label: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center m-auto items-center h-14  backdrop-blur-md sticky top-0 z-10 ">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          //   icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default Navbar;
