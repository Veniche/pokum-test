import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FaqSectionProps {
  title?: string;
  ctaText?: string;
  faqs?: FaqItem[];
  className?: string;
}

export function FaqSection({ 
  title = "Frequently Asked Questions",
  ctaText = "Have Other Questions?",
  faqs = defaultFaqs,
  className = ""
}: FaqSectionProps) {
  const [faqItems, setFaqItems] = useState<FaqItem[]>(faqs);

  const toggleFaq = (index: number) => {
    setFaqItems(prevFaqs =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false
      }))
    );
  };

  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black font-helvetica-world leading-tight">
              {title}
            </h2>
            <div className="flex items-center space-x-3 text-[#2556BA] cursor-pointer hover:opacity-80 transition-opacity">
              <span className="font-bold text-lg font-helvetica">
                {ctaText}
              </span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="space-y-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-2xl font-bold text-black font-helvetica-world">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-7 w-7 text-gray-400 transition-transform duration-200 ${faq.isOpen ? 'rotate-180' : ''}`} 
                  />
                </div>
                {faq.isOpen && (
                  <p className="text-xl text-black/65 font-helvetica-world leading-relaxed">
                    {faq.answer}
                  </p>
                )}
                <hr className="border-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Default FAQs if none provided
const defaultFaqs: FaqItem[] = [
  {
    question: "How long does the business formation process take?",
    answer: "Typically, it takes X weeks depending on your business type and location.",
    isOpen: true
  },
  {
    question: "What types of businesses can you help incorporate?",
    answer: "We assist with various business structures including LLCs, Corporations, and more.",
    isOpen: false
  },
  {
    question: "Do you offer ongoing support after incorporation?",
    answer: "Yes, we provide comprehensive support including compliance, tax filing, and business advisory services.",
    isOpen: false
  }
];

// Import ArrowRight at the bottom to avoid circular dependencies
import { ArrowRight } from "lucide-react";
