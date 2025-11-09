import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className: customClassName = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4';

  const sizeStyles = {
    md: 'px-6 py-2 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-300',
    secondary: 'bg-white text-teal-800 hover:bg-stone-100 focus:ring-teal-200',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed hover:scale-100';

  const className = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${customClassName}`;

  if (href) {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Handle smooth scroll for internal links
      if (href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
      
      // Call user-provided onClick if it exists
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <a href={href} className={className.trim()} onClick={handleLinkClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className.trim()} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;