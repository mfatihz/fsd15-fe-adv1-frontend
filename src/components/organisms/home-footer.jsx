import clsx from 'clsx'
import FooterGroup from "./footer-group";
import FooterLinks from '../molecules/footer-links';
import FooterLogoSection from '../molecules/footer-logo-section';

const HomeFooter = ({ genreData, helpData, className, onClick }) => {
  const baseStyle = `
    flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-20
    border-t border-gray-300
  `
  const genreLinks = <FooterLinks 
    links={ genreData.links }
    basePath={ genreData.basePath }
    columns='columns-2 md:columns-4 gap-8'
  />
  const helpLinks = <FooterLinks 
    links={ helpData.links }
    basePath={ helpData.basePath }
  />
  
  return (
    <footer className={clsx(baseStyle, className)}>
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