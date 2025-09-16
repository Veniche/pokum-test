import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CtaBannerProps {
  title: string;
  buttonText: string;
  className?: string;
}

export function CtaBanner({ 
  title = "Ready to work with us ?", 
  buttonText = "Start Free Consultation",
  className = ""
}: CtaBannerProps) {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1017] rounded-[32px] px-12 py-16 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-8 left-48 w-96 h-32 bg-gray-600 rounded-full blur-3xl transform rotate-45"></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-helvetica-world tracking-tight text-center md:text-left">
              {title}
            </h2>
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-4 rounded-xl font-bold text-lg group whitespace-nowrap"
              size="lg"
            >
              {buttonText}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
