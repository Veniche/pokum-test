import React from 'react';
import { FileText, ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { articles } from "../data/articles";
import { CtaBanner } from '@/components/CtaBanner';
import { FaqSection } from '@/components/FaqSection';

interface ArticleCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  height: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, image, category, title, excerpt, height }) => (
  <div key={id} className={`relative rounded-2xl overflow-hidden ${height} group`}>
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
      <span className="text-white/80 text-sm font-medium">{category}</span>
      <h3 className="text-white text-xl font-bold mt-1">{title}</h3>
      <p className="text-white/80 text-sm mt-2 line-clamp-2">{excerpt}</p>
      <button className="mt-4 flex items-center text-white text-sm font-medium">
        Read More
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
);

export default function Blog() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Text Effect - Absolute Position */}
      <div className="absolute top-[5%] left-0 right-0 flex justify-center opacity-[0.02] pointer-events-none z-0">
        <div className="text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
          pokumpokumpokumpokum
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-8">
        <div className="absolute inset-0 bg-white -z-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#05060C] font-helvetica-world">
              Article List
            </h1>
            <p className="text-lg sm:text-xl text-black/60 font-helvetica mx-auto">
              Browse our various articles curated by experts in their field
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FEFEFE] via-[#FDFDFD] via-[#FCFCFC] via-[#FBFBFB] via-[#FAFAFA] via-[#F9F9F9] via-[#F8F8F8] to-[#F7F7F7] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three Column Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="space-y-10">
              {[articles[0], articles[3], articles[6], articles[9]].map((article) => (
                <a
                  key={article.id}
                  href={`/article/${article.id}`}
                  className={`bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 block ${article.height}`}
                >
                  <article className="h-full flex flex-col">
                    <div className={article.imageHeight ? article.imageHeight : 'h-48 sm:h-64 lg:h-80'}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="text-[#2556BA] font-bold text-sm font-helvetica-world uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-[#05060C] font-helvetica-world leading-tight mb-3 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-[#757575] font-helvetica-world text-lg leading-7 line-clamp-5 flex items-start">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-10">
              {[articles[1], articles[4], articles[7], articles[10]].map((article) => (
                <a
                  key={article.id}
                  href={`/article/${article.id}`}
                  className={`bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 block ${article.height}`}
                >
                  <article className="h-full flex flex-col">
                    <div className={article.imageHeight ? article.imageHeight : 'h-48 sm:h-64 lg:h-80'}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="text-[#2556BA] font-bold text-sm font-helvetica-world uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-[#05060C] font-helvetica-world leading-tight mb-3 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-[#757575] font-helvetica-world text-lg leading-7 line-clamp-5 min-h-[140px] flex items-start">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-10">
              {[articles[2], articles[5], articles[8], articles[11]].map((article) => (
                <a
                  key={article.id}
                  href={`/article/${article.id}`}
                  className={`bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 block ${article.height}`}
                >
                  <article className="h-full flex flex-col">
                    <div className={article.imageHeight ? article.imageHeight : 'h-48 sm:h-64 lg:h-80'}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="text-[#2556BA] font-bold text-sm font-helvetica-world uppercase tracking-wide">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-[#05060C] font-helvetica-world leading-tight mb-3 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-[#757575] font-helvetica-world text-lg leading-7 line-clamp-5 min-h-[140px] flex items-start">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner title={"Ready to work with us ?"} buttonText={"Start Free Consultation"} />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
