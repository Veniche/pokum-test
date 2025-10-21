import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqSection } from "@/components/FaqSection";
import { ArrowRight, ChevronDown } from "lucide-react";

// Structured data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pokum",
  "url": "https://pokum.id",
  "logo": "https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758533832/pokum._bjfoo8.png",
  "sameAs": [
    "https://www.instagram.com/pokum.id/",
    "https://www.linkedin.com/company/pokum-id/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+628118888888",
      "contactType": "customer service",
      "availableLanguage": ["English", "Bahasa Indonesia"]
    }
  ]
};

// Structured data for WebPage
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pokum - Full-Cycle Business Incorporation Experts",
  "description": "Professional business incorporation, legal services, and corporate solutions. Start and grow your business with our expert guidance.",
  "publisher": {
    "@type": "Organization",
    "name": "Pokum"
  }
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Seo 
        title="Pokum - Full-Cycle Business Incorporation Experts"
        description="Professional business incorporation, legal services, and corporate solutions. Start and grow your business with our expert guidance in Indonesia."
        keywords="business incorporation Indonesia, company registration, legal services, corporate solutions, business setup, PT PMA, local company, virtual office, business license"
      />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
        itemScope
        itemType="https://schema.org/ProfessionalService"
      >
        <meta itemProp="name" content="Pokum - Business Incorporation Experts" />
        <meta itemProp="description" content="Professional business incorporation and legal services in Indonesia" />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="addressLocality" content="Jakarta" />
          <meta itemProp="addressCountry" content="ID" />
        </div>
        {/* Background Text Effect */}
        <div className="absolute inset-0 w-screen h-screen overflow-hidden pointer-events-none">
          <div className="absolute left-0 right-0 top-[35%] -translate-y-1/2 transform -translate-x-[30px] opacity-[0.03] z-0">
            <p className="text-[240px] md:text-[400px] lg:text-[550px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
              pokumpokumpokumpokum
            </p>
          </div>
        </div>
        {/* Desktop Layout - Only shows on 1024px and above */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
            <div className="grid grid-cols-[60%_40%] gap-0 items-center">
              {/* Left Column - Content */}
              <div className="w-full max-w-5xl mx-auto lg:mx-0">
                <div className="relative">
                  <h1 className="text-7xl sm:text-8xl md:text-[160px] lg:text-[200px] font-helvetica-world font-bold text-black leading-[0.9] tracking-tight">
                    pokum
                  </h1>
                  <div className="absolute left-0 bottom-0 translate-y-[1em] w-full max-w-3xl pl-[8em]">
                    <div className="relative">
                      <div className="absolute right-full top-1/2 w-[100vw] h-px bg-black/30 -translate-y-1/2 mr-4"></div>
                      <p className="text-lg xl:text-2xl 2xl:text-3xl font-helvetica-world font-normal text-black opacity-70 leading-snug">
                        Your Full-Cycle Business Incorporation Experts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-16 md:h-24 lg:h-32"></div>

              <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-10">
                <p className="text-lg sm:text-xl lg:text-2xl font-helvetica-world font-normal leading-relaxed text-black/50">
                  We guide your business from entity creation to marketing, finance, tax support, and more — combining legal expertise with AI-powered solutions. You can focus on what matters most:{" "}
                  <span className="font-bold text-black">
                    growing your business
                  </span>
                  <span className="text-black">.</span>
                </p>

                <a 
                  href={`https://wa.me/6282283863111?text=${encodeURIComponent('Halo, saya ingin berkonsultasi tentang layanan Anda.\nNama : \nEmail : ')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-5 md:px-8 md:py-6 rounded-xl border-2 border-black bg-white font-helvetica-world font-bold text-base md:text-lg text-black opacity-85 hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

              {/* Right Column - Image */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full overflow-visible">
                <div 
                  className="absolute inset-y-0 right-0 w-[50vw] h-full bg-contain bg-no-repeat bg-right -mr-[calc(50vw-95%-2rem)]"
                  style={{
                    backgroundImage: 'url(https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758093205/gavel_vclmdh.svg)'
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
            <div className="absolute right-[-120px] top-[20px] w-[413px] h-[413px] opacity-20 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758093205/gavel_vclmdh.svg"
                alt="Legal gavel background"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mobile pokum title */}
            <div className="relative z-10 pt-[140px] space-y-6">
              <div className="relative">
                <h1 className="text-[120px] sm:text-[160px] font-helvetica-world font-bold text-black leading-[0.9] tracking-tight text-center">
                  pokum
                </h1>
                <div className="w-full max-w-[300px] mx-auto pl-8 sm:pl-0">
                  <div className="relative">
                    <div className="absolute right-full top-1/2 w-[100vw] h-px bg-black/30 -translate-y-1/2 mr-4"></div>
                    <p className="text-sm font-helvetica-world font-normal text-black opacity-70 leading-snug text-center whitespace-nowrap">
                      Your Full-Cycle Business Incorporation Experts
                    </p>
                  </div>
                </div>
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
                    growing your business
                  </span>
                  <span className="text-black">.</span>
                </p>

                <div className="flex justify-center">
                  <a 
                    href={`https://wa.me/6282283863111?text=${encodeURIComponent('Halo, saya ingin berkonsultasi tentang layanan Anda.\nNama : \nEmail : ')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-[14px] bg-white border-2 border-black rounded-xl font-helvetica-world font-bold text-[14px] text-black hover:bg-black hover:text-white transition-colors group"
                  >
                    Start Free Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-3xl md:text-[32px] font-bold text-black font-helvetica-world mb-6 max-w-2xl">
              Why Choose Indonesia for Your Business?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 w-full">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-black/50 font-helvetica leading-8 lg:pr-24">
                  As Southeast Asia's largest economy, Indonesia provides access
                  to a significant consumer base and strategic positioning for
                  expansion. With a vast market of over 279 million people.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-4 justify-items-center">
                <div className="text-center sm:text-start space-y-3">
                  <div className="text-4xl sm:text-7xl font-bold text-[#2556BA] font-helvetica">
                    279+
                  </div>
                  <div className="text-lg sm:text-xl text-black/60 font-helvetica">
                    million people
                  </div>
                </div>
                <div className="text-center sm:text-start space-y-3">
                  <div className="text-4xl sm:text-7xl font-bold text-[#2556BA] font-helvetica">
                    126%
                  </div>
                  <div className="text-lg sm:text-xl text-black/60 font-helvetica">
                    active mobile connection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="bg-white pt-20 pb-0 lg:py-20 relative overflow-hidden">
        {/* Background Text Effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute left-0 right-0 top-[15%] -translate-y-1/2 transform -translate-x-[300px] opacity-[0.02] z-0">
            <p className="text-[80px] md:text-[120px] lg:text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
            pokumpokumpokumpokum
            </p>
          </div>
        </div>
        <div className="max-w-7xl relative z-10">
          <div className="mb-20">
            <div className="relative">
              <div className="relative w-full">
                <div className="inline-block relative">
                  <h2 className="text-[40px] xs:text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap ml-2">
                    Our Advantages
                  </h2>
                  <div className="absolute left-full top-1/2 w-screen h-px bg-black/40 -translate-y-1/2 ml-8" style={{ width: 'calc(100vw - 103%)' }}></div>
                </div>
              </div>
              <div className="mt-4 mx-auto px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <p className="text-2xl sm:text-3xl text-black/50 font-bold font-helvetica-world text-center lg:text-left">
                  Why Choose <span className="text-black">pokum</span>?
                </p>
                <p className="text-xl sm:text-2xl text-black/60 font-helvetica mt-2 max-w-4xl text-center lg:text-left">
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
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile & Tablet Layout - Side by side */}
          <div className="lg:hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-black font-helvetica text-center mb-6">
              Legal Expertise
            </h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601787/legal-expertise_insocq.png"
                  alt="Legal expertise"
                  className="w-[200px] sm:w-[260px] md:w-[360px] h-auto"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#2556BA] font-helvetica">
                  100%
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-black/60 font-helvetica">
                  Free of charge
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl text-black/60 font-helvetica leading-8 md:leading-9 mt-6 md:mt-8 text-center max-w-2xl mx-auto">
              Get your business set up with ease, thanks to our experienced
              legal team. From entity formation, business licenses, deed of
              establishment to compliance, we handle it all.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601787/legal-expertise_insocq.png"
                alt="Legal expertise"
                className="w-full h-auto max-w-[368px]"
              />
            </div>
            <div className="space-y-6 text-left">
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
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile & Tablet Layout - Side by side */}
          <div className="lg:hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-black font-helvetica text-center mb-6">
              AI-Powered Marketing
            </h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601999/ai-powered_rn7gw5.png"
                  alt="AI Marketing"
                  className="w-[200px] sm:w-[260px] md:w-[360px] h-auto"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-black/60 font-helvetica leading-8 md:leading-9 mt-6 md:mt-8 text-center max-w-2xl mx-auto">
              Maximize your reach and operational efficiency with our
              AI-powered marketing solutions, strategically tailored to meet
              your business needs and goals.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-right">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                AI-Powered Marketing
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8 ml-24">
                Maximize your reach and operational efficiency with our
                AI-powered marketing solutions, strategically tailored to meet
                your business needs and goals.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601999/ai-powered_rn7gw5.png"
                alt="AI Marketing"
                className="w-full h-auto max-w-[339px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Statement Support Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile & Tablet Layout - Side by side */}
          <div className="lg:hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-black font-helvetica text-center mb-6">
              Comprehensive Financial Statement Support
            </h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601785/financial-statement-support_kiu11f.png"
                  alt="Financial statement support"
                  className="w-[200px] sm:w-[260px] md:w-[360px] h-auto"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-black/60 font-helvetica leading-8 md:leading-9 mt-6 md:mt-8 text-center max-w-2xl mx-auto">
              From balance sheet to cash flow statement, we help you prepare
              every financial documents needed, ensuring your business thrives
              financially.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601785/financial-statement-support_kiu11f.png"
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
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-black font-helvetica text-center mb-6">
              Tax Support & Optimization
            </h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601793/tax-support_segdiq.png"
                  alt="Tax support"
                  className="w-[200px] sm:w-[260px] md:w-[360px] h-auto"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-black/60 font-helvetica leading-8 md:leading-9 mt-6 md:mt-8 text-center max-w-2xl mx-auto">
              Navigate tax regulations confidently with our expert tax team,
              ensuring your business is compliant and optimized for savings.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-right">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Tax Support & Optimization
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8 ml-24">
                Navigate tax regulations confidently with our expert tax team,
                ensuring your business is compliant and optimized for savings.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601793/tax-support_segdiq.png"
                alt="Tax support"
                className="w-full h-auto max-w-[519px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pokum Society Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-black font-helvetica text-center mb-6">
              Pokum Society
            </h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601792/pokum-society_hszmp5.png"
                  alt="Pokum Society"
                  className="w-[200px] sm:w-[260px] md:w-[360px] h-auto"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-black/60 font-helvetica leading-8 md:leading-9 mt-6 md:mt-8 text-center max-w-2xl mx-auto">
              Community for entrepreneurs, legal professionals, and tech
              innovators. Pokum Society supports leaders through education and
              collaboration. Connect with partners and explore ways to grow
              business.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601792/pokum-society_hszmp5.png"
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
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-black font-helvetica text-center mb-6">
              Asset Management Services
            </h3>
            <div className="flex justify-center items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601782/asset-management_u8hvzn.png"
                  alt="Asset management"
                  className="w-[200px] sm:w-[260px] md:w-[360px] h-auto"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-black/60 font-helvetica leading-8 md:leading-9 mt-6 md:mt-8 text-center max-w-2xl mx-auto">
              Secure your company's profitability with our tailored asset
              management solutions. We help businesses grow and maintain
              financial stability through strategic asset oversight and
              optimization.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-right">
              <h3 className="text-2xl font-bold text-black font-helvetica">
                Asset Management Services
              </h3>
              <p className="text-xl text-black/60 font-helvetica leading-8 ml-24">
                Secure your company's profitability with our tailored asset
                management solutions. We help businesses grow and maintain
                financial stability through strategic asset oversight and
                optimization.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758601782/asset-management_u8hvzn.png"
                alt="Asset management"
                className="w-full h-auto max-w-[587px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:pl-8 lg:pl-16">
          <div className="max-w-4xl">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="relative">
                <h2 className="text-7xl font-bold text-black font-helvetica-world tracking-tight leading-[0.9] max-w-[90%]">
                  Our Proven
                  <div className="relative">
                    <span>Process</span>
                    <div className="absolute left-full top-1/2 w-[50vw] sm:w-screen h-[1px] bg-black/40 ml-4 sm:ml-8 left-[256px]"></div>
                  </div>
                </h2>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="relative">
                <h2 className="text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap relative">
                  <div className="absolute right-full top-1/2 w-[100vw] h-px bg-black/30 -translate-y-1/2 mr-4"></div>
                  Our Proven Process
                </h2>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="text-[32px] font-bold text-black font-helvetica-world">
                How can we help you?
              </h3>
              <p className="text-[24px] text-black/60 font-helvetica max-w-4xl whitespace-nowrap">
                We provide end-to-end support from business formation to
                scaling. Here's what to expect:
              </p>
            </div>
          </div>

          <div className="max-w-4xl mt-16">
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
      <section className="py-20 bg-gradient-to-b from-white via-[#FEFEFE] via-[#FDFDFD] via-[#FCFCFC] via-[#FBFBFB] via-[#FAFAFA] via-[#F9F9F9] via-[#F8F8F8] to-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-helvetica-world">
              <span className="text-black/50">What they say about</span>{' '}
              <span className="text-black">pokum</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm flex-1 relative">
              {/* Vertical line that starts below the quote image */}
              <div className="absolute left-14 top-10 bottom-0 w-0.5 bg-black opacity-10 mt-12 mb-10"></div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-8 h-8">
                  <img 
                    src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758768482/double-quotes_r5yvtx.png" 
                    alt="Quote" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-helvetica leading-[1.5] text-black pl-12">
                  <span className="font-bold">pokum</span> helped me get my{" "}
                  <span className="font-bold">business off the ground</span>{" "}
                  quickly. <span className="font-bold">Their full-cycle service</span> made everything so much easier!
                </p>
              </div>
              <div className="mt-10 pl-12">
                <div className="font-bold text-2xl font-helvetica">John D.</div>
                <div className="text-xl text-black/60 font-helvetica">
                  Entrepreneur
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm flex-1 relative">
              {/* Vertical line that starts below the quote image */}
              <div className="absolute left-14 top-10 bottom-0 w-0.5 bg-black opacity-10 mt-12 mb-10"></div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-8 h-8">
                  <img 
                    src="https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758768482/double-quotes_r5yvtx.png" 
                    alt="Quote" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-2xl font-helvetica leading-[1.5] text-black pl-12">
                  From <span className="font-bold">legal</span> setup to{" "}
                  <span className="font-bold">marketing</span>, the team at{" "}
                  <span className="font-bold">pokum</span> made sure that we had{" "}
                  <span className="font-bold">everything in place</span> to thrive.
                </p>
              </div>
              <div className="mt-10 pl-12">
                <div className="font-bold text-2xl font-helvetica">Sarah L.</div>
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
