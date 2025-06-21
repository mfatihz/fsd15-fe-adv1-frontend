import { Link } from "react-router";

const FooterLinkItem = ({ to, children }) => (
  <Link
    to={to}
    className="block text-sm/5 text-gray-400 hover:underline"
  >
    {children}
  </Link>
);

export default FooterLinkItem;

