import { Link } from "react-router";

function NavigationalLink({children, to}) {
  return (
    <Link
      className="
        text-gray-300 no-underline
        text-xs sm:text-lg p-0 relative
        transition-colors duration-200 ease-in-out
        hover:text-white focus:text-white
        after:content-[''] after:absolute after:bottom-0 after:left-0
        after:w-0 after:h-0.5 after:bg-white
        after:transition-all after:duration-300 after:ease-in-out
        hover:after:w-full focus:after:w-full
      "
      to={to}
    >
      {children}
    </Link>
  )
}

export default NavigationalLink