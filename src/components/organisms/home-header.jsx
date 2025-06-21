import React, { forwardRef } from "react";
import ChillLogo from "../atoms/chill-logo";
import NavigationalLinks from "../molecules/navigational-links";
import SettingMenu from "./setting-menu";
import clsx from "clsx";

// Jangan menggunakan ref sebagai props karena ref adalah reserved word
// Disarankan melalui forwardRef
const HomeHeader = forwardRef(({ navData, menuData, padding }, ref) => {
  const baseStyle = "w-full flex gap-4 sm:gap-8 items-center bg-[#181A1C]";

  return (
    <header className={clsx(baseStyle, padding)} ref={ref}>
      <ChillLogo className="hover:scale-105" />
      <NavigationalLinks links={navData} />
      <SettingMenu links={menuData} className="ml-auto" />
    </header>
  );
});

export default HomeHeader;