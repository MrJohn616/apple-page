type NavBarProps = {
  svg: React.ReactNode;
  className?: string;
};

function NavBar({ svg, className }: NavBarProps) {
  return (
    <li className={`navbar__li ${className}`}>
      <span>{svg}</span>
    </li>
  );
}
export default NavBar;
