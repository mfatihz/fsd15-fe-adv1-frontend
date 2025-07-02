import clsx from 'clsx'
import FooterGroup from "./footer-group";
import FooterLinks from '../molecules/footer-links';
import FooterLogoSection from '../molecules/footer-logo-section';

const HomeFooter = ({ genreData, helpData, paddingClass, componentGapClass, contentGap, onClick }) => {
  const baseStyle = `
    flex flex-col sm:flex-row
    border-t border-neutral-600
  `
  const genreLinks = <FooterLinks 
    links={ genreData.links }
    basePath={ genreData.basePath }
    columnClass='columns-2 md:columns-4'
    gapClass={contentGap}
  />
  const helpLinks = <FooterLinks 
    links={ helpData.links }
    basePath={ helpData.basePath }
  />
  
  return (
    <footer className={clsx(baseStyle, paddingClass, componentGapClass, contentGap)}>
      <FooterLogoSection onClick={ onClick }/>
      <FooterGroup
        title={ genreData.title }
        links={ genreLinks }
      />
      <FooterGroup
        title={ helpData.title }
        links={ helpLinks }
      />
    </footer>
  );
};

export default HomeFooter;