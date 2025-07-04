import { useState, useEffect } from "react";
import FooterGroupTitle from "../molecules/footer-group-title";

const FooterGroup = ({ title, children, styleClass="" }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setIsOpen(!mobile); // buka default saat non-mobile
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styleClass}>
      <div className="flex flex-col gap-2 sm:gap-4">
        <FooterGroupTitle title={title} isMobile={isMobile} isOpen={isOpen} onClick={handleToggle} />
      { isOpen && children }
      </div>
      
    </div>
  );
};

export default FooterGroup;
