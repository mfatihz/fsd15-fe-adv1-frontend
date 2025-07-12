import clsx from 'clsx'
import logo from '../../assets/images/icons/chill-logo.svg';
import logoSmall from '../../assets/images/icons/chill-logo-small.svg';
import { Link } from "react-router";

const ChillLogo = ({className=''}) => {
  const baseStyle = `
    h-[16px] sm:h-[26px] md:h-[36px] w-auto
    transition-transform duration-200 ease-in-out
    hover:scale-105
    object-contain focus:outline-none
  `
  
  return (
    <Link to="/">
      <picture>
        <source media="(min-width: 640px)" srcSet={logo} />
        <source media="(max-width: 639px)" srcSet={logoSmall} />
        <img
          src={logo}
          alt="Chill logo"
          loading="lazy"
          className={clsx(baseStyle, className)}
        />
      </picture>
    </Link>
    
  );
};

export default ChillLogo;
