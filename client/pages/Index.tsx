import {
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqSection } from "@/components/FaqSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Desktop Layout - Only shows on 1024px and above */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="max-w-4xl mx-auto lg:mx-0">
              <div className="mb-6 md:mb-8 lg:mb-10">
                <h1 className="text-7xl sm:text-8xl md:text-[160px] lg:text-[200px] font-helvetica-world font-bold text-black leading-[0.9] tracking-tight">
                  pokum
                </h1>
              </div>

              <div className="mb-8 md:mb-12 lg:mb-16 max-w-2xl">
                <p className="text-2xl md:text-3xl lg:text-[28px] font-helvetica-world font-normal text-black opacity-70 leading-snug">
                  Your Full-Cycle Business Incorporation Experts
                </p>
              </div>

              <div className="max-w-3xl space-y-6 md:space-y-8 lg:space-y-10">
                <p className="text-lg sm:text-xl lg:text-2xl font-helvetica-world font-normal leading-relaxed text-black/50">
                  We guide your business from entity creation to marketing, finance, tax support, and more — combining legal expertise with AI-powered solutions. You can focus on what matters most:{" "}
                  <span className="font-bold text-black">
                    growing your products
                  </span>
                  <span className="text-black">.</span>
                </p>

                <button className="inline-flex items-center justify-center px-6 py-5 md:px-8 md:py-6 rounded-xl border-2 border-black bg-white font-helvetica-world font-bold text-base md:text-lg text-black opacity-85 hover:bg-black hover:text-white transition-all duration-300 group">
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

              {/* Right Column - Image */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full">
                <div 
                  className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center lg:bg-right"
                  style={{
                    backgroundImage: 'url(https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758093205/gavel_vclmdh.svg)',
                    right: 'calc(50% - 50vw + 1.5rem)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Shows below 1024px */}
        <div className="lg:hidden relative w-full min-h-[555px] bg-white">
          <div className="px-4 pb-8">

            {/* Mobile Background Gavel Image */}
            <div className="absolute right-0 top-[44px] w-[413px] h-[413px] opacity-20 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758093205/gavel_vclmdh.svg"
                alt="Legal gavel background"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mobile pokum title */}
            <div className="relative z-10 pt-[140px] space-y-6">
              <div className="text-center">
                <h1 className="text-[66px] font-helvetica-world font-normal text-black leading-none tracking-tight mb-2">
                  pokum
                </h1>
                <div className="w-[127px] h-[1px] bg-black opacity-50 mx-auto mb-3"></div>
                <p className="text-[13px] font-helvetica-world font-normal text-black opacity-70 tracking-wide">
                  Your Full-Cycle Business Incorporation Experts
                </p>
              </div>

              {/* Mobile Description and CTA */}
              <div className="space-y-10 px-5 pt-8">
                <p className="text-[15px] font-helvetica-world leading-6 text-center text-black">
                  <span className="opacity-50">
                    We guide your business from entity creation to marketing,
                    finance, tax support, and more — combining legal expertise
                    with AI-powered solutions. You can focus on what matters
                    most:{" "}
                  </span>
                  <span className="font-bold text-black">
                    growing your products
                  </span>
                  <span className="text-black">.</span>
                </p>

                <div className="flex justify-center">
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-[14px] bg-white border-2 border-black rounded-xl font-helvetica-world font-bold text-[14px] text-black hover:bg-black hover:text-white transition-colors group">
                    Start Free Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h2 className="text-4xl font-bold text-black font-helvetica-world">
                Why Choose Indonesia for Your Business?
              </h2>
              <p className="text-2xl text-black/50 font-helvetica leading-8">
                As Southeast Asia's largest economy, Indonesia provides access
                to a significant consumer base and strategic positioning for
                expansion. With a vast market of over 279 million people.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center space-y-3">
                <div className="text-7xl font-bold text-[#2556BA] font-helvetica">
                  279+
                </div>
                <div className="text-2xl text-black/60 font-helvetica">
                  million people
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-7xl font-bold text-[#2556BA] font-helvetica">
                  126%
                </div>
                <div className="text-2xl text-black/60 font-helvetica">
                  active mobile connection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="relative">
              <h2 className="text-8xl font-bold text-black font-helvetica-world tracking-tight">
                Our Advantages
              </h2>
              <div className="mt-4 text-center">
                <p className="text-3xl text-black/50 font-bold font-helvetica-world">
                  Why Choose pokum?
                </p>
                <p className="text-2xl text-black/60 font-helvetica mt-2 max-w-4xl mx-auto">
                  We are committed to making your business formation process
                  effortless, providing everything you need in one place. Here's
                  how we help you succeed:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Expertise Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d357c52f866174452de8bf8e9c97ae96601a38ec?width=736"
                alt="Legal expertise"
                className="w-full h-auto max-w-[368px] mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Legal Expertise
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8">
                Get your business set up with ease, thanks to our experienced
                legal team. From entity formation, business licenses, deed of
                establishment to compliance, we handle it all.
              </p>
              <div className="space-y-3">
                <div className="text-7xl font-bold text-[#2556BA] font-helvetica">
                  100%
                </div>
                <div className="text-2xl text-black/60 font-helvetica">
                  Free of charge
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Marketing Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-right">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                AI-Powered Marketing
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8">
                Maximize your reach and operational efficiency with our
                AI-powered marketing solutions, strategically tailored to meet
                your business needs and goals.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/074772d81be3c16c979e89c9c1572c2f0f82dd8a?width=679"
                alt="AI Marketing"
                className="w-full h-auto max-w-[339px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2642dd60ff120e7db17a8b069260ec54b82f5883?width=335"
                alt="Marketing chart"
                className="absolute top-32 right-0 w-[168px] h-[168px] transform rotate-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Statement Support Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4750412ffc4dd4c7ac90c5fd38288c45eca2ccc5?width=1038"
                alt="Financial statement support"
                className="w-full h-auto max-w-[519px]"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Comprehensive Financial Statement Support
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8">
                From balance sheet to cash flow statement, we help you prepare
                every financial documents needed, ensuring your business thrives
                financially.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Support Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-right">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Tax Support & Optimization
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8">
                Navigate tax regulations confidently with our expert tax team,
                ensuring your business is compliant and optimized for savings.
              </p>
            </div>
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f251517f6009d8d395bb1b20cee3322417c02141?width=850"
                alt="Tax support"
                className="w-full h-auto max-w-[425px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pokum Society Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a985391c0d6864b9d74129b93315399bf54b02f2?width=880"
                alt="Pokum Society"
                className="w-full h-auto max-w-[440px] mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Pokum Society
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8">
                Community for entrepreneurs, legal professionals, and tech
                innovators. Pokum Society supports leaders through education and
                collaboration. Connect with partners and explore ways to grow
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Management Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-right">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Asset Management Services
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8">
                Secure your company's profitability with our tailored asset
                management solutions. We help businesses grow and maintain
                financial stability through strategic asset oversight and
                optimization.
              </p>
            </div>
            <div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7e3c99886d5ca6161f9524e905780f2e5106cf99?width=1174"
                alt="Asset management"
                className="w-full h-auto max-w-[587px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-8xl font-bold text-black font-helvetica-world tracking-tight mb-12">
              Our Proven Process
            </h2>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-black font-helvetica-world">
                How can we help you?
              </h3>
              <p className="text-2xl text-black/60 font-helvetica max-w-4xl mx-auto">
                We provide end-to-end support from business formation to
                scaling. Here's what to expect:
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#2556BA] rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="text-sm font-bold text-[#2556BA] font-helvetica tracking-wider">
                      STEP 1
                    </div>
                    <h4 className="text-2xl font-bold text-black font-helvetica">
                      Initial Consultation & Needs Assessment
                    </h4>
                    <p className="text-xl text-black/60 font-helvetica leading-8">
                      We start by thoroughly understanding your goals,
                      challenges, and business needs to ensure our approach is
                      aligned with your objectives.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-3 opacity-60">
                    <div className="text-sm font-normal text-black/40 font-helvetica tracking-wider">
                      STEP 2
                    </div>
                    <h4 className="text-2xl font-bold text-black font-helvetica">
                      Entity Formation & Legal Setup
                    </h4>
                    <p className="text-xl text-black/20 font-helvetica leading-8">
                      Our legal experts will carefully structure the right
                      business entity to support your operations, protect your
                      interests, and ensure long-term compliance.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-3 opacity-60">
                    <div className="text-sm font-normal text-black/40 font-helvetica tracking-wider">
                      STEP 3
                    </div>
                    <h4 className="text-2xl font-bold text-black font-helvetica">
                      AI Marketing & Branding Strategy
                    </h4>
                    <p className="text-xl text-black/20 font-helvetica leading-8">
                      Next, we leverage advanced AI tools to help you develop a
                      powerful marketing strategy focused on accelerating growth
                      and maximizing impact.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-3 opacity-60">
                    <div className="text-sm font-normal text-black/40 font-helvetica tracking-wider">
                      STEP 4
                    </div>
                    <h4 className="text-2xl font-bold text-black font-helvetica">
                      Financial Setup & Tax Planning
                    </h4>
                    <p className="text-xl text-black/20 font-helvetica leading-8">
                      Ensure your financial stability with our expert guidance
                      in strategic financial planning, efficient tax
                      optimization, and long-term wealth management.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-3 opacity-60">
                    <div className="text-sm font-normal text-black/40 font-helvetica tracking-wider">
                      STEP 5
                    </div>
                    <h4 className="text-2xl font-bold text-black font-helvetica">
                      Ongoing Support & Scaling Solutions
                    </h4>
                    <p className="text-xl text-black/20 font-helvetica leading-8">
                      As your business grows, we remain by your side, offering
                      the tools, insights, and ongoing support needed to ensure
                      long-term, sustainable success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="absolute left-3 top-6 bottom-6 w-1 bg-gray-200"></div>
              <div className="absolute left-3 top-6 w-1 h-12 bg-[#2556BA]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black/50 font-helvetica-world mb-2">
              What they say about
            </h2>
            <div className="text-4xl font-bold text-black font-helvetica-world">
              pokum
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="mb-8">
                <div className="text-[#2556BA] text-3xl mb-4">"</div>
                <p className="text-2xl font-helvetica leading-9">
                  <span className="font-helvetica">
                    pokum helped me get my{" "}
                  </span>
                  <span className="font-bold">business off the ground</span>
                  <span className="font-helvetica">
                    {" "}
                    quickly. Their full-cycle service made everything so much
                    easier!
                  </span>
                </p>
              </div>
              <div className="border-l-2 border-black/10 pl-8">
                <div className="font-bold text-2xl font-helvetica">John D.</div>
                <div className="text-xl text-black/60 font-helvetica">
                  Entrepreneur
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="mb-8">
                <div className="text-[#2556BA] text-3xl mb-4">"</div>
                <p className="text-2xl font-helvetica leading-9">
                  From <span className="font-bold">legal</span> setup to{" "}
                  <span className="font-bold">marketing</span>, the team at
                  pokum made sure that we had{" "}
                  <span className="font-bold">everything in place</span> to
                  thrive.
                </p>
              </div>
              <div className="border-l-2 border-black/10 pl-8">
                <div className="font-bold text-2xl font-helvetica">
                  Sarah L.
                </div>
                <div className="text-xl text-black/60 font-helvetica">
                  Business Owner
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
