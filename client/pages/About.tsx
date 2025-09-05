import { ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Building, TrendingUp, Bot, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="text-4xl font-bold text-[#3971E3] font-helvetica-world">pokum</a>
              <div className="ml-8 flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded opacity-80"></div>
                  </div>
                </div>
                <div className="bg-blue-50 px-6 py-3 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold font-helvetica-world">About</span>
                  </div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-blue-600" />
                </div>
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-blue-600" />
                </div>
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-blue-600" />
                </div>
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Background decorative text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden">
            <div className="text-[180px] font-bold text-black font-helvetica-world tracking-tight whitespace-nowrap">
              pokumpokumpokum
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-[120px] font-bold text-black font-helvetica-world tracking-tight leading-tight mb-8">
                We Help
                <br />
                Companies
              </h1>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-black/50 font-helvetica leading-relaxed">
                  At <span className="font-bold text-black">pokum</span> we are dedicated to empowering entrepreneurs and businesses to thrive by providing seamless, end-to-end business incorporation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-black font-helvetica-world">Who are we?</h2>
              
              <div className="space-y-6">
                <p className="text-2xl text-black/50 font-helvetica leading-relaxed">
                  <span className="font-bold text-black">pokum</span> is a full-cycle business incorporation service that specializes in providing comprehensive solutions to businesses of all sizes.
                </p>
                
                <p className="text-2xl text-black/50 font-helvetica leading-relaxed">
                  If you're just starting out or looking to scale your operations, our expert team offers comprehensive legal, marketing, financial, and tax services to ensure your business is set up for success. From entity creation to ongoing support, we guide you through every stage of the process.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/0de7fc7e5897d6463620a9d0ccc79cb50011ea2d?width=984" 
                alt="Pokum laptop" 
                className="w-full h-auto max-w-[492px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-b from-gray-50 to-transparent py-20">
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
              To become the <span className="font-bold text-black">leading global partner</span> for entrepreneurs, providing innovative, reliable, and holistic solutions for business formation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-b from-gray-50 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black font-helvetica-world">Our Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#2556BA] rounded flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
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
                  <div className="w-8 h-8 bg-[#2556BA] rounded flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
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
                  <div className="w-8 h-8 bg-[#2556BA] rounded flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
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
                  <div className="w-8 h-8 bg-[#2556BA] rounded flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1017] rounded-[32px] px-12 py-16 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-48 w-96 h-32 bg-gray-600 rounded-full blur-3xl transform rotate-45"></div>
            </div>
            
            <div className="relative flex items-center justify-between">
              <h2 className="text-5xl font-bold text-white font-helvetica-world tracking-tight">Ready to work with us ?</h2>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-4 rounded-xl font-bold text-lg group">
                Start Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black font-helvetica-world leading-tight">Frequently Asked Questions</h2>
              <div className="flex items-center space-x-3 text-[#2556BA]">
                <span className="font-bold text-lg font-helvetica">Have Other Questions?</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-black font-helvetica-world">How long does the business formation process take?</h3>
                  <ChevronDown className="h-7 w-7 text-gray-400" />
                </div>
                <p className="text-xl text-black/65 font-helvetica-world leading-relaxed">
                  Typically, it takes X weeks depending on your business type and location.
                </p>
                <hr className="border-gray-200" />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black font-helvetica-world">What types of businesses can you help incorporate?</h3>
                <ChevronDown className="h-7 w-7 text-gray-400 rotate-180" />
              </div>
              <hr className="border-gray-200" />

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black font-helvetica-world">Do you offer ongoing support after incorporation?</h3>
                <ChevronDown className="h-7 w-7 text-gray-400 rotate-180" />
              </div>
              <hr className="border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C0B0E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo and Contact */}
            <div className="space-y-8">
              <div className="text-4xl font-bold text-[#3971E3] font-helvetica-world">pokum</div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white/70" />
                  <span className="text-white/70 font-helvetica-world text-lg">pohonhukum.id@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white/70" />
                  <span className="text-white/70 font-helvetica-world text-lg">+62 822-8386-3111</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-white/70 mt-1" />
                  <div className="text-white/70 font-helvetica-world text-lg leading-relaxed">
                    PT Pohon Hukum Indonesia<br />
                    Jl. Tawakal Raya 39C,<br />
                    Grogol Petamburan, West Jakarta,<br />
                    DKI Jakarta, Indonesia.
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <div className="text-white/70 font-helvetica-world text-xl leading-relaxed space-y-3">
                <div><a href="/about" className="hover:text-white transition-colors">About Us</a></div>
                <div><a href="/services" className="hover:text-white transition-colors">Services</a></div>
                <div><a href="/blog" className="hover:text-white transition-colors">Blog</a></div>
                <div><a href="/contact" className="hover:text-white transition-colors">Contact</a></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-white/70 font-helvetica-world text-xl leading-relaxed">
                Privacy Policy<br />
                Terms Of Service
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-5">
              <div className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
                <Facebook className="h-4 w-4 text-black" />
              </div>
              <div className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
                <Twitter className="h-4 w-4 text-black" />
              </div>
              <div className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
                <Instagram className="h-4 w-4 text-black" />
              </div>
              <div className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
                <Linkedin className="h-4 w-4 text-black" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
