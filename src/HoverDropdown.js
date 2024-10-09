import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HoverDropdown = ({label, path, children, className}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    return (
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
            to={path}
            className={className}
        >
            {label}
        </Link>
        {isOpen && (
            <div className="dropdownChildren">
                {children.map((link, index) => (
                   <Link
                    key={index}
                    to={link.path}
                    className="dropdownChild"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        )}
      </div>
    );
}

export default HoverDropdown;
