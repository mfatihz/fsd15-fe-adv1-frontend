import React, { forwardRef } from "react";
import ChillLogo from "../atoms/chill-logo";
import Navigation from "../molecules/navigational-links";
import SettingMenu from "./setting-menu";
import clsx from "clsx";
import { AuthProvider } from "../../hooks/auth";

// Jangan menggunakan ref sebagai props karena ref adalah reserved word
// Disarankan melalui forwardRef
const HomeHeader = forwardRef(({ navData, menuData, paddingClass }, ref) => {
  const baseStyle = "w-full flex gap-4 sm:gap-8 items-center";

  return (
    <header className={clsx(baseStyle, paddingClass)} ref={ref}>
      <ChillLogo className="hover:scale-105" />
      <AuthProvider>
        <Navigation links={navData} />
      </AuthProvider>
      <SettingMenu links={menuData} className="ml-auto" />
    </header>
  );
});

export default HomeHeader;