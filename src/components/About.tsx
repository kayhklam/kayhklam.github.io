import React from 'react';
import { cn } from '@/lib/utils';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div id="about" className={cn("py-20 bg-secondary/30", className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <span className="category-chip">About the Artist</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Kay Lam</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Kay Lam is a digital artist based in Essex, England, whose work captures a unique blend of contemporary 
                vision and classic portraiture. Growing up with a passion for visual storytelling, she has seamlessly 
                merged traditional art techniques with the limitless possibilities of digital media. This fusion is at 
                the heart of her creative practice, allowing her to craft pieces that are both innovative and emotionally resonant.
              </p>

              <p>
                Her creative process is defined by exploration and experimentation. Kay’s work reflects a deep understanding of colour,
                form, and composition, achieved through a meticulous balance of digital tools and hand-rendered techniques. Each piece 
                in her portfolio is a journey of discovery pushing artistic boundaries and inviting viewers to see the familiar in a fresh, dynamic light.
              </p>

              <p>
                Recognised by high-profile clients and industry leaders, including collaborations with Adobe, Kay Lam’s portfolio is a testament 
                to her versatility and vision. Her art not only celebrates the intricacies of human expression but also stands as a bold statement 
                of modern digital artistry. Through her evolving body of work, Kay continues to redefine the possibilities of portrait art while 
                inspiring a new generation of artists.
              </p>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <h3 className="text-3xl font-serif mb-2">10+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2">70+</h3>
                  <p className="text-sm text-muted-foreground">Portraits Created</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2">1</h3>
                  <p className="text-sm text-muted-foreground">Publications</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* <div className="absolute -top-4 -left-4 w-full h-full border border-border"></div> */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src="image/me2.jpg" 
                  alt="Kay Lam in the wild" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;