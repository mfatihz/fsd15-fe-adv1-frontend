import FooterLinkItem from "../atoms/footer-link-item";
import clsx from 'clsx'

const FooterLinks = ({ links, basePath = "", columnClass="", gapClass="" }) => {
  return (
    <div
      className={clsx("mx-4 sm:mx-0", columnClass, gapClass)}
    >
      {links.map(({ label, path }) => (
        <FooterLinkItem key={label} to={`${basePath}${path}`}>
          {label}
        </FooterLinkItem>
      ))}
    </div>
  );
};

export default FooterLinks;
