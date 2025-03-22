
import React, { useState, useEffect } from 'react';
import { PortfolioItem, PortfolioCategory, portfolioItems, portfolioCategories } from '@/data/portfolioData';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PortfolioGalleryProps {
  className?: string;
  id?: string;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ className, id }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  useEffect(() => {
    // Simulate loading delay for images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setFilteredItems(
      selectedCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory)
    );
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setExpandedItemId(null);
  };

  const toggleExpandItem = (itemId: string) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  const openLightbox = (itemId: string) => {
    const index = filteredItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      setCurrentItemIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentItemIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentItemIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          setCurrentItemIndex((prevIndex) => 
            prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
          );
          break;
        case 'ArrowRight':
          setCurrentItemIndex((prevIndex) => 
            prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
          );
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems]);

  const currentItem = filteredItems[currentItemIndex];

  return (
    <div id={id} className={cn("py-12", className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Work</h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of digital portraits spanning different periods, styles, and clients. 
            Each piece represents a distinct exploration of character, emotion, and technique.
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button 
            onClick={() => handleCategoryChange('all')}
            className={cn(
              "px-4 py-2 border transition-all duration-200",
              selectedCategory === 'all'
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-foreground/60 text-foreground/80 hover:text-foreground"
            )}
          >
            All Work
          </button>
          {portfolioCategories.map(category => (
            <button 
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                "px-4 py-2 border transition-all duration-200",
                selectedCategory === category.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-foreground/60 text-foreground/80 hover:text-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {selectedCategory !== 'all' && (
          <div className="mb-10 p-6 border border-border/50 bg-secondary/50">
            {portfolioCategories
              .filter(cat => cat.id === selectedCategory)
              .map(category => (
                <div key={category.id}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="category-chip">{category.period}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              ))}
          </div>
        )}
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={cn(
                "group border border-border/40 hover:border-border transition-all duration-300 bg-card",
                expandedItemId === item.id ? "col-span-2 md:col-span-1" : ""
              )}
            >
              <div className="cursor-pointer" onClick={() => openLightbox(item.id)}>
                <div className={cn(
                  "relative aspect-[3/4] overflow-hidden",
                  isLoading ? "bg-secondary animate-pulse" : ""
                )}>
                  {!isLoading && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-serif">{item.title}</h3>
                  </div>
                  {item.client && (
                    <p className="text-xs text-muted-foreground mb-2">
                      Client: {item.client}
                    </p>
                  )}
                  <p className={cn(
                    "text-sm text-muted-foreground transition-all duration-300",
                    expandedItemId === item.id ? "line-clamp-none" : "line-clamp-2"
                  )}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-screen-lg p-0 bg-background/95 backdrop-blur border-none">
          <div className="relative w-full h-full">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-50 p-2 bg-background/80 rounded-full hover:bg-background transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={goToPrevious} 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-background/80 rounded-full hover:bg-background transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-background/80 rounded-full hover:bg-background transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Lightbox content */}
            {currentItem && (
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-3/4 p-4">
                  <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                    <img 
                      src={currentItem.imageUrl} 
                      alt={currentItem.title} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/4 p-6 md:border-l border-border/20">
                  <h2 className="text-2xl md:text-3xl font-serif mb-2">{currentItem.title}</h2>
                  {currentItem.client && (
                    <p className="text-sm font-medium mb-2">
                      Client: <span className="text-muted-foreground">{currentItem.client}</span>
                    </p>
                  )}
                  <p className="text-muted-foreground">{currentItem.description}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioGallery;