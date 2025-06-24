import NavItem from '../../NavItem/NavItem';

// @ts-expect-error FontAwesomeIcon has a know typescript error
const ghIcon: IconProp = 'fa-brands fa-github';
// <FontAwesomeIcon icon={ghIcon} className="size-10" /> |

const navItems = [
  {
    id: 0,
    label: 'About',
    href: '',
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
    <div className="flex flex-row justify-center items-center h-12 ">
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
