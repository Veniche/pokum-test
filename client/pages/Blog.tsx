import React from 'react';
import { FileText, ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { articles } from "../data/articles";

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
    <div className="min-h-screen bg-white">
      {/* Background Text Effect */}
      <div className="relative bg-white py-16">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden pointer-events-none">
          <div className="text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
            pokumpokumpokumpokum
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#05060C] font-helvetica-world">
              Article List
            </h1>
            <p className="text-lg sm:text-xl text-black/60 font-helvetica max-w-lg mx-auto">
              Browse our various articles curated by experts in their field
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-b from-[#F7F7F7] to-transparent">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0B1017] rounded-[32px] h-[172px] flex items-center justify-between px-12 overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute w-[430px] h-[130px] bg-[#5A6372] rounded-full blur-[85px] top-[-60px] left-[200px] transform rotate-[33deg]"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-helvetica-world tracking-tight relative z-10">
              Ready to work with us ?
            </h2>
            
            <button className="flex items-center space-x-3 bg-transparent border-2 border-white text-white px-6 py-4 rounded-xl font-bold font-helvetica-world relative z-10 hover:bg-white hover:text-[#0B1017] transition-colors duration-200">
              <span>Start Free Consultation</span>
              <ArrowRight className="w-6 h-6" />
            </button>
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
