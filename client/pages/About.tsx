import { 
  Building, 
  TrendingUp, 
  Bot, 
  Users, 
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
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqSection } from "@/components/FaqSection";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FEFEFE] via-[#FDFDFD] via-[#FCFCFC] via-[#FBFBFB] via-[#FAFAFA] via-[#F9F9F9] via-[#F8F8F8] to-[#F7F7F7]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background decorative text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden">
            <div className="text-[80px] md:text-[120px] lg:text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
              pokumpokumpokum
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-8 md:mb-16 pt-6 md:pt-12">
              <div className="relative">
                <div className="flex flex-col space-y-2 md:space-y-4">
                  <div className="relative">
                    <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-black font-helvetica-world tracking-tight leading-[0.9] md:leading-tight text-left -ml-6 sm:-ml-12 md:-ml-16 lg:-ml-24">
                      We Help
                    </h1>
                    <hr className="hidden sm:block absolute left-[12rem] md:left-[16rem] lg:left-[24rem] -right-4 sm:-right-12 md:-right-24 lg:-right-56 bottom-8 sm:bottom-12 md:bottom-16 border-t-2 border-black/40 -z-10" />
                  </div>
                  <div className="relative">
                    <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-black font-helvetica-world tracking-tight leading-[0.9] md:leading-tight text-center ml-4 sm:ml-12 md:ml-20 lg:ml-32">
                      Companies
                    </h1>
                    <hr className="hidden sm:block absolute -left-16 sm:-left-32 md:-left-48 lg:-left-64 right-[8rem] sm:right-[20rem] md:right-[35rem] lg:right-[55rem] bottom-8 sm:bottom-12 md:bottom-[72px] border-t-2 border-black/40 -z-10" />
                  </div>
                </div>
              </div>
              
              <div className="max-w-2xl mt-4 ml-96">
                <p className="text-2xl text-black/50 font-helvetica leading-relaxed">
                  At <span className="text-3xl font-bold text-black">pokum</span> we are dedicated to empowering entrepreneurs and businesses to thrive by providing seamless, end-to-end business incorporation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-black font-helvetica-world">Who are we?</h2>
              
              <div className="space-y-6">
                <p className="text-2xl text-black/50 font-helvetica leading-relaxed">
                  <span className="text-3xl font-bold text-black">pokum</span> is a full-cycle business incorporation service that specializes in providing comprehensive solutions to businesses of all sizes.
                </p>
                
                <p className="text-2xl text-black/50 font-helvetica leading-relaxed">
                  If you're just starting out or looking to scale your operations, our expert team offers comprehensive legal, marketing, financial, and tax services to ensure your business is set up for success. From entity creation to ongoing support, we guide you through every stage of the process.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758907149/about-laptop_tyzhie.png" 
                alt="Pokum laptop" 
                className="w-full h-auto max-w-[492px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background decorative text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden pointer-events-none">
            <div className="text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
              vision&missionvission&mission
            </div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold text-black font-helvetica-world mb-6">Our Vision</h2>
            <p className="text-3xl font-helvetica text-black/60 max-w-4xl mx-auto leading-tight">
              To become the <span className="font-bold text-black/60">leading global partner</span> for entrepreneurs, providing innovative, reliable, and holistic solutions for business formation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black font-helvetica-world">Our Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758907312/mission_1_shjlac.png" 
                    alt="Mission 1 icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black font-helvetica mb-4">
                    Simplify the Business Formation Process
                  </h3>
                  <p className="text-xl text-black/60 font-helvetica leading-relaxed">
                    Provide a seamless, hassle-free experience for entrepreneurs by handling all legal, financial, and administrative aspects of business setup.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758907316/mission_2_iuf3z9.png" 
                    alt="Mission 2 icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black font-helvetica mb-4">
                    Offer Expert Legal, Financial, and Tax Solutions
                  </h3>
                  <p className="text-xl text-black/60 font-helvetica leading-relaxed">
                    Provide businesses with comprehensive legal and financial guidance, ensuring they are fully compliant, strategically aligned, and optimized for growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card 3 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758907319/mission_3_gvnn1c.png" 
                    alt="Mission 3 icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black font-helvetica mb-4">
                    Empower Businesses with AI-Driven Marketing
                  </h3>
                  <p className="text-xl text-black/60 font-helvetica leading-relaxed">
                    Leverage cutting-edge AI technology to help businesses develop powerful, data-driven marketing strategies that maximize reach and efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card 4 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758907322/mission_4_no0jhq.png" 
                    alt="Mission 4 icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black font-helvetica mb-4">
                    Support Businesses from Start to Scale
                  </h3>
                  <p className="text-xl text-black/60 font-helvetica leading-relaxed">
                    Offer continuous support throughout the lifecycle of a business, from initial formation to ongoing growth, ensuring sustained success.
                  </p>
                </div>
              </div>
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
