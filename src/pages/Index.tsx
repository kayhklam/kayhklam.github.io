import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import PortfolioGallery from '@/components/PortfolioGallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');
      
      if (anchorElement) {
        e.preventDefault();
        const href = anchorElement.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <div id="portfolio" className="pt-24"> {/* Added padding-top to account for navigation */}
        <PortfolioGallery />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;