import clsx from 'clsx'
import logo from '../../assets/images/icons/chill-logo.svg';

const ChillLogoFull = ({className=''}) => {
  const baseStyle = `
    h-[26px] sm:h-[36px] w-auto
    transition-transform duration-200 ease-in-out cursor-pointer
    hover:scale-105 focus:outline-none
    object-contain
  `

  return (
    <img
      src={logo}
      alt="Chill logo"
      loading="lazy"
      className={clsx(baseStyle, className)}
    />
  );
};

export default ChillLogoFull;
