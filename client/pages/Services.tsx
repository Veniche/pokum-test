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
        minHeight: '556px' // Ensure consistent height
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
          <div className="bg-[#F5F8FC] rounded-3xl p-8 h-full flex flex-col items-center text-center hover:shadow-lg justify-between">
            <div className="relative w-full">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world leading-9">
                {service.title}
              </h3>
            </div>
            <div className="space-y-4 w-full mb-8">
              <p className="text-xl text-[#757575] font-helvetica-world">
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
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world">
                  {service.title}
                </h3>
              </div>
              
              <div 
                className="flex-1 text-lg text-[#757575] font-helvetica-world space-y-2"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
            
            <div className="mt-auto">
              <p className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-6">
                {service.price}
              </p>
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Handle order now action
            }}
            className="w-full py-3 border-2 border-[#05060C] rounded-xl text-[#05060C] font-medium hover:bg-[#05060C] hover:text-white transition-colors duration-200 text-center"
          >
            Order Now →
          </button>
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
    
    setExpandedSections(prev => {
      const wasExpanded = prev[sectionId];
      
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
        setTimeout(() => {
          const element = document.getElementById(`section-${sectionId}`);
          if (element) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 10); // Small timeout to allow the state to update
      }
      
      return updatedState;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px] mx-auto">
          <div className="max-w-3xl">
            <div className="relative w-full">
              <h1 className="relative inline-block text-[4.5rem] sm:text-[6rem] lg:text-[8.75rem] font-bold text-black font-helvetica-world tracking-tight -ml-1 w-fit">
                Services
                <span className="absolute left-full top-1/2 w-screen h-px bg-black opacity-40 ml-4"></span>
              </h1>
            </div>
            <p className="mt-6 text-xl sm:text-2xl text-black/50 font-helvetica-world max-w-2xl">
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
              <div key={section.id} className="space-y-20">
                <div className="space-y-5">
                  <div 
                    id={`section-${section.id}`}
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
