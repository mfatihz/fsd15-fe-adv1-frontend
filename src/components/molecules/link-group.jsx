import React, { useState } from 'react';
import TextLink from '../atoms/text-link';
import ToggleButton from '../atoms/toggle-button';

const LinkGroup = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </ToggleButton>
      
      {isOpen && (
        <div className="grid grid-cols-2 gap-2 ml-4">
          {links.map((link, index) => (
            <TextLink key={index} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkGroup;