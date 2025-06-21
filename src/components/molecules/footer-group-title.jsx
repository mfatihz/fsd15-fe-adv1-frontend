import ToggleButton from "../atoms/toggle-button";
import clsx from 'clsx'

const FooterGroupTitle = ({ title, isMobile, isOpen, onClick=()=>{} }) => {
  const cursorPointer = isMobile ? 'cursor-pointer' : '';

  return (
      <button
        onClick={onClick}
        className={clsx("flex justify-between items-center text-lg font-semibold", cursorPointer)}
      >
        { title } { isMobile && <ToggleButton isOpen={isOpen} /> }
      </button>
  );
};

export default FooterGroupTitle;
