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
import { CtaBanner } from '@/components/CtaBanner';
import { FaqSection } from '@/components/FaqSection';

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
      <div className="relative bg-white py-16 bg-gradient-to-b from-white via-[#FEFEFE] via-[#FDFDFD] via-[#FCFCFC] via-[#FBFBFB] via-[#FAFAFA] via-[#F9F9F9] via-[#F8F8F8] to-[#F7F7F7]">
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
      <CtaBanner title={"Ready to work with us ?"} buttonText={"Start Free Consultation"} />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
