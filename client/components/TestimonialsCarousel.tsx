import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Pokum helped me get my business off the ground quickly. Their full-cycle service made everything so much easier! From legal setup to marketing, the team at pokum made sure that we had everything in place to thrive.",
    name: "Ahmad Rizal",
    company: "Metamoves Entertainment",
    image: "https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758768482/double-quotes_r5yvtx.png"
  },
  {
    id: 2,
    quote: "Pokum Society gave me a unique way to network in the virtual world. I was able to share my story, connect with fellow founders, and even explore new opportunities for collaboration and business growth.",
    name: "Aditya Chandra",
    company: "",
    image: "https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758768482/double-quotes_r5yvtx.png"
  },
  {
    id: 3,
    quote: "Pokum not only established a trusted company (PT) for me, but also provided the best advice regarding the business situation even before the company was created. Their service was fast, friendly, and the entire process was carried out in a proper and standardized manner.",
    name: "Mega Hermawan",
    company: "PT Kawasa Manajemen Madani",
    image: "https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758768482/double-quotes_r5yvtx.png"
  },
  {
    id: 4,
    quote: "Pokum was instrumental in creating our online presence by building our business website. The quality of their work left us highly satisfied, and we have committed to a long-term relationship, trusting them with all our future website maintenance needs.",
    name: "Tarun",
    company: "Royal Rugs",
    image: "https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758768482/double-quotes_r5yvtx.png"
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'keepSnaps',
      dragFree: false,
    },
    // [Autoplay({ delay: 5000, stopOnInteraction: false })] // Temporarily disabled for debugging
  );

  const totalTestimonials = testimonials.length;
  
  const scrollToIndex = React.useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setSelectedIndex(index);
  }, [emblaApi]);

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % totalTestimonials;
    scrollToIndex(nextIndex);
  };

  // Set up the carousel with the correct configuration
  React.useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    // Initialize with the first item
    setSelectedIndex(0);
    
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`flex-shrink-0 w-full md:w-1/2 px-4 transition-all duration-300 ${
                index === selectedIndex ? 'z-10' : index === (selectedIndex + 1) % totalTestimonials ? 'z-0' : 'z-0'
              }`}
              data-embla-slide={index}
            >
              <div 
                className={`bg-white rounded-2xl p-10 shadow-sm relative h-full transition-all duration-300 transform origin-center ${
                  index === selectedIndex 
                    ? 'scale-100 opacity-100' 
                    : index === (selectedIndex + 1) % totalTestimonials 
                      ? 'scale-75 md:scale-60 opacity-40 cursor-pointer hover:opacity-70 ml-0 md:-ml-16'
                      : 'hidden md:block scale-50 opacity-0 pointer-events-none'
                }`}
                onClick={index === (selectedIndex + 1) % totalTestimonials ? handleNextClick : undefined}
              >
                <div className="relative">
                  <div className="absolute left-0 top-0 w-8 h-8">
                    <img 
                      src={testimonial.image} 
                      alt="Quote" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-64 overflow-y-auto pr-4 pl-12">
                    <p className="text-2xl font-helvetica leading-[1.5] text-black">
                      {testimonial.quote.split(/(<[^>]+>|\*\*[^*]+\*\*)/).map((part, i) => {
                        if (part.startsWith('<span') || part.startsWith('**')) {
                          const text = part.replace(/<[^>]+>/g, '').replace(/\*\*/g, '');
                          return <span key={i} className="font-bold">{text}</span>;
                        }
                        return part;
                      })}
                    </p>
                  </div>
                </div>
                <div className="mt-10 pl-12">
                  <div className="font-bold text-2xl font-helvetica">{testimonial.name}</div>
                  {testimonial.company && (
                    <div className="text-xl text-black/60 font-helvetica">
                      {testimonial.company}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default TestimonialsCarousel;
