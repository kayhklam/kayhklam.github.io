import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("py-12 border-t border-border/60", className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#portfolio" className="text-xl font-serif tracking-widest">
              KAY LAM
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm tracking-wider">
              Portfolio
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm tracking-wider">
              About
            </a>
            <a href="#social-media" className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm tracking-wider">
              Social Media
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm tracking-wider">
              Contact
            </a>
          </nav>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Kay Lam. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;