import { Link } from "react-router";

function MenuItem({ icon, text, to }) {
  return (
    <Link
      className="
        flex items-center
        gap-3
        py-3 px-5
        text-xs sm:text-lg text-white no-underline
        transition-colors duration-200
        hover:bg-white/10 hover:text-white
        focus:bg-white/10 focus:text-white
      "
      to={to}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}

export default MenuItem
