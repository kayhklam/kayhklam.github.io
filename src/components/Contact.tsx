
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Instagram, Podcast, Linkedin } from 'lucide-react';
import { Separator } from './ui/separator';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'personal',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll respond within 2-3 business days.",
    });
    
    setFormData({
      name: '',
      email: '',
      message: '',
      projectType: 'personal',
    });
  };

  return (
    <div id="contact" className={cn("py-20", className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Social Media Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="mb-4 inline-block">
                <span className="category-chip">Connect</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Follow My Work</h2>
              <p className="text-muted-foreground mb-8">
                Stay updated with my latest projects, behind-the-scenes moments, and artistic journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://www.instagram.com/kaylamartist" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 border border-border/60 hover:border-primary transition-all duration-300"
              >
                <Instagram className="h-10 w-10 mb-4 text-foreground/70 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-serif mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground text-center">Daily updates and work-in-progress shots</p>
                <span className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  @kaylamartist
                </span>
              </a>
              
              <a 
                href="https://www.behance.net/kaylam"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 border border-border/60 hover:border-primary transition-all duration-300"
              >
                <Linkedin className="h-10 w-10 mb-4 text-foreground/70 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-serif mb-2">Behance</h3>
                <p className="text-sm text-muted-foreground text-center">Complete portfolio and case studies</p>
                <span className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  kaylam
                </span>
              </a>
              
              <a 
                href="https://www.happenuspod.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 border border-border/60 hover:border-primary transition-all duration-300"
              >
                <Podcast className="h-10 w-10 mb-4 text-foreground/70 group-hover:text-primary transition-colors" />
                <h3 className="text-lg font-serif mb-2">Happenus Podcast</h3>
                <p className="text-sm text-muted-foreground text-center">I create portraits for this bi-monthly podcast</p>
                <span className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Listen Now
                </span>
              </a>
            </div>
          </div>
          
          {/* Podcast Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="mb-4 inline-block">
                <span className="category-chip">Featured</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Happenus Podcast</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square">
                <div className="absolute -top-3 -left-3 w-full h-full border border-border/60"></div>
                <img 
                  src="https://images-cf.getpodpage.com/cdn-cgi/image/quality=70,fit=contain,height=150,format=auto,dpr=1/https://s3.us-west-1.amazonaws.com/redwood-labs/showpage/uploads/images/83aae3c0-0364-4293-aebc-c9ab48217780.png" 
                  alt="Happenus Podcast" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-4">Portrait Artist for "Happenus"</h3>
                <p className="text-muted-foreground mb-6">
                  I create unique digital portraits for each episode of the acclaimed "Happenus" podcast, 
                  which features interviews with change leaders around the world. Each portrait 
                  captures the essence of the guest's style and personality.
                </p>
                <p className="text-muted-foreground mb-6">
                  New episodes are released bi-monthly, featuring my exclusive portrait artwork that 
                  becomes part of the podcast's visual identity across all platforms.
                </p>
                <a 
                  href="https://www.happenuspod.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="mr-2">Listen to the podcast</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          {/* Contact Form Section */}
          <div className="text-center mb-12">
            <div className="mb-4 inline-block">
              <span className="category-chip">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Commission a Portrait</h2>
            <p className="text-muted-foreground">
              Interested in commissioning a digital portrait? Fill out the form below with your details,
              and I'll be in touch to discuss your vision.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none focus:ring-0 bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none focus:ring-0 bg-background"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="projectType" className="block text-sm font-medium text-foreground">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none focus:ring-0 bg-background"
              >
                <option value="personal">Personal Portrait</option>
                <option value="family">Family Portrait</option>
                <option value="editorial">Editorial Commission</option>
                <option value="commercial">Commercial Work</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none focus:ring-0 bg-background"
                placeholder="Tell me about your vision for this portrait..."
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground border border-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-lg font-serif mb-2">Email</h3>
              <p className="text-muted-foreground">kaylamartist@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-2">Follow</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://instagram.com/kaylamartist" className="text-foreground/70 hover:text-foreground transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="https://twitter.com/kaylamartist" className="text-foreground/70 hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://behance.net/kaylam" className="text-foreground/70 hover:text-foreground transition-colors">
                  <span className="sr-only">Behance</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fillRule="evenodd" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
