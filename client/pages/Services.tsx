import { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { serviceSections } from '@/data/services';
import { CtaBanner } from '@/components/CtaBanner';
import { FaqSection } from '@/components/FaqSection';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    price: string;
    image: string;
    description: string;
  };
  isFlipped: boolean;
  onFlip: () => void;
}

const ServiceCard = ({ service, isFlipped, onFlip }: ServiceCardProps) => {
  return (
    <div 
      className="w-full h-full"
      style={{
        perspective: '1000px',
        minHeight: 'clamp(400px, 70vh, 556px)' // Responsive height
      }}
    >
      <div 
        onClick={onFlip}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'none',
          cursor: 'pointer'
        }}
      >
        {/* Front of the card */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}>
          <div className="bg-[#F5F8FC] rounded-3xl p-4 sm:p-6 md:p-8 h-full flex flex-col items-center text-center hover:shadow-lg justify-center">
            <div className="relative w-3/4 sm:w-full max-w-[200px] sm:max-w-none">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto object-contain aspect-square max-h-[180px] sm:max-h-[220px] md:max-h-[280px] rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 sm:space-y-4 w-full mt-2 sm:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-[#05060C] font-helvetica-world leading-tight sm:leading-9">
                {service.title}
              </h3>
            </div>
            <div className="w-full mb-4 sm:mb-8">
              <p className="text-lg sm:text-xl text-[#757575] font-helvetica-world">
                {service.price}
              </p>
            </div>
          </div>
        </div>
        
        {/* Back of the card */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          backgroundColor: '#F5F8FC',
          borderRadius: '1.5rem',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6 w-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#05060C] font-helvetica-world">
                  {service.title}
                </h3>
              </div>
              
              <div 
                className="flex-1 text-base sm:text-lg text-[#757575] font-helvetica-world space-y-2 overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
            
            <div className="mt-auto">
              <p className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-6">
                {service.price}
              </p>
            </div>
          </div>
          
          <a 
            href={`https://wa.me/6282283863111?text=${encodeURIComponent(`Jasa : ${service.title}\nNama : \nEmail : `)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="block w-full py-3 border-2 border-[#05060C] rounded-xl text-[#05060C] font-medium hover:bg-[#05060C] hover:text-white transition-colors duration-200 text-center"
          >
            Order Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    serviceSections.reduce((acc, section) => ({
      ...acc,
      [section.id]: false
    }), {})
  );

  const toggleCardFlip = (serviceId: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const toggleSectionExpand = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Get the navbar element
    const navbar = document.querySelector('header');
    
    setExpandedSections(prev => {
      const wasExpanded = prev[sectionId];
      
      // Check if any other section is currently expanded
      const otherSectionExpanded = Object.entries(prev).some(
        ([key, value]) => key !== sectionId && value
      );
      
      // Close all sections first
      const newState = Object.keys(prev).reduce((acc, key) => ({
        ...acc,
        [key]: false
      }), {});
      
      // Toggle the clicked section (will open it if it was closed)
      const updatedState = {
        ...newState,
        [sectionId]: !wasExpanded
      };
      
      // If we're expanding the section, scroll to it after the state updates
      if (!wasExpanded) {
        // Use requestAnimationFrame to ensure the DOM has updated
        requestAnimationFrame(() => {
          const element = document.getElementById(`section-${sectionId}`);
          if (element) {
            // Always hide the navbar when expanding a section
            if (navbar) {
              navbar.classList.add('-translate-y-full');
            }
            
            // Get the header height for better scroll position calculation
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            
            // Calculate the scroll position with header offset and some additional space
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 16; // 16px additional space
            
            // Add a small delay to ensure the DOM has fully updated
            setTimeout(() => {
              // Use smooth scroll behavior for non-mobile, instant for mobile for better UX
              const isMobile = window.innerWidth < 768;
              window.scrollTo({
                top: offsetPosition,
                behavior: isMobile ? 'auto' : 'smooth'
              });
              
              // On mobile, we'll do a second scroll after a small delay to ensure proper positioning
              if (isMobile) {
                setTimeout(() => {
                  const updatedPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
                  window.scrollTo({
                    top: updatedPosition,
                    behavior: 'auto'
                  });
                }, 50);
              }
            
              // Add a class to the section for visual feedback
              element.classList.add('active-section');
              
              // Remove the class after animation completes
              setTimeout(() => {
                element.classList.remove('active-section');
              }, 1000);
            }, 10); // Small delay to ensure the first scroll happens
          }
        });
      } else if (!otherSectionExpanded) {
        // Only show navbar if we're collapsing the last expanded section
        // and not switching to another section
        if (navbar) {
          navbar.classList.remove('-translate-y-full');
        }
      }
      
      return updatedState;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px] mx-auto">
          <div className="max-w-3xl">
            <div className="relative w-full">
              <h1 className="relative inline-block text-[4.5rem] sm:text-[6rem] lg:text-[8.75rem] font-bold text-black font-helvetica-world tracking-tight -ml-1 w-fit">
                Services
                <span className="absolute left-full top-1/2 w-screen h-px bg-black opacity-40 ml-4"></span>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-black/50 font-helvetica-world max-w-2xl">
              Committed to help you build your dream company.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="pb-32 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px] mx-auto">
          <div className="space-y-4 md:space-y-8">
            {serviceSections.map((section) => (
              <div 
                key={section.id} 
                id={`section-${section.id}`}
                className="py-8 scroll-mt-24 transition-all duration-300 ease-in-out"
              >
                <div className="space-y-5">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={(e) => toggleSectionExpand(section.id, e)}
                  >
                    <h2 className="text-3xl font-bold text-[#05060C] font-helvetica-world tracking-tight">
                      {section.title}
                    </h2>
                    {expandedSections[section.id] ? (
                      <ChevronUp className="w-8 h-8 text-black" />
                    ) : (
                      <Plus className="w-8 h-8 text-black" />
                    )}
                  </div>
                  <p className="text-xl text-[#383A46]/65 font-helvetica-world max-w-4xl">
                    {section.description}
                  </p>
                </div>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 transition-all duration-300 ${expandedSections[section.id] === false ? 'max-h-0 overflow-hidden' : ''}`}>
                  {section.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isFlipped={!!flippedCards[service.id]}
                      onFlip={() => toggleCardFlip(service.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner title={"Ready to work with us ?"} buttonText={"Start Free Consultation"} />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};
