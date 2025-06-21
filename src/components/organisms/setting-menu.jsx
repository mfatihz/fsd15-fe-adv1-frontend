import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx'
import AvatarButton from "../molecules/avatar-button"
import MenuItems from "../molecules/menu-items"

function SettingMenu({ links, className }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideMenu);
        return () => document.removeEventListener('mousedown', handleClickOutsideMenu);
    }, []);

    const baseStyle = "relative"
    
    return (
        <div
            className={clsx(baseStyle, className)}
            ref={dropdownRef}
        >
            <AvatarButton onClick={() => {
                setIsOpen(!isOpen)
            }} />
            {isOpen && <MenuItems links={links} />}
        </div>
    )
}

export default SettingMenu