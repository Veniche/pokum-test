import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../data/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
          <p className="mt-2 text-gray-600">The requested article could not be found.</p>
        </div>
      </div>
    );
  }

  // Safely destructure with fallbacks
  const { 
    title = 'No Title Available', 
    category = 'Uncategorized', 
    image = '/placeholder-article.jpg',
    content = '<div class="prose max-w-4xl mx-auto"><p>No content available for this article.</p></div>'
  } = article;

  return (
    <div className="min-h-screen bg-white">
      {/* Background Text Effect */}
      <div className="relative bg-white py-16">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden pointer-events-none">
          <div className="text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
            pokumpokumpokumpokum
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-3">
                <span className="text-[#2556BA] font-bold text-lg font-helvetica-world uppercase tracking-wide">
                  {category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05060C] font-helvetica-world leading-tight">
                  {title}
                </h1>
              </div>

              <div className="space-y-8">
                <div className="w-full h-[560px] bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/placeholder-article.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Article Content */}
                <div 
                  className="prose max-w-4xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: content }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0B1017] rounded-[32px] h-[172px] flex items-center justify-between px-12 overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 mix-blend-multiply"></div>
            </div>
            
            {/* Left content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Butuh Bantuan Hukum?</h3>
              <p className="text-gray-200">Konsultasikan masalah hukum Anda dengan tim ahli kami</p>
            </div>
            
            {/* Right button */}
            <div className="relative z-10">
              <button className="bg-white text-[#0B1017] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-20">
            <div className="w-80 space-y-5">
              <h2 className="text-3xl font-bold text-black font-helvetica-world leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="flex items-center space-x-3 text-[#2556BA]">
                <span className="font-bold font-helvetica-world">Have Other Questions?</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#05060C] font-helvetica-world">
                    How long does the business formation process take?
                  </h3>
                  <ChevronDown className="w-7 h-7 text-[#896656]" />
                </div>
                <p className="text-lg text-[#383A46]/65 font-helvetica-world max-w-2xl">
                  Typically, it takes X weeks depending on your business type and location.
                </p>
              </div>
              
              <div className="w-full h-px bg-[#DBDBDB]"></div>
              
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#05060C] font-helvetica-world">
                  What types of businesses can you help incorporate?
                </h3>
                <ChevronDown className="w-7 h-7 text-[#896656] rotate-180" />
              </div>
              
              <div className="w-full h-px bg-[#DBDBDB]"></div>
              
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#05060C] font-helvetica-world">
                  Do you offer ongoing support after incorporation?
                </h3>
                <ChevronDown className="w-7 h-7 text-[#896656] rotate-180" />
              </div>
              
              <div className="w-full h-px bg-[#DBDBDB]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
