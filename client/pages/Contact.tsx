import { ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Users, Home, Book, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
                    <Home className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Book className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="bg-blue-50 px-6 py-3 rounded-full">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold font-helvetica-world">Contact</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Book className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[151px] font-bold text-black font-helvetica-world tracking-tight leading-tight">
                  Contact Us
                </h1>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e0728f26d3bdf73e27a4231eca2857954f325cb7?width=1200" 
                  alt="Vintage rotary phone" 
                  className="w-full h-auto max-w-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-5">
                <h2 className="text-4xl font-bold text-black font-helvetica-world">Contact Information</h2>
                <p className="text-lg text-gray-500 font-helvetica-world leading-7">
                  Masih ada pertanyaan? Isi form berikut ini. Tim kami akan segera menghubungi Anda dalam kurun waktu 1 x 24 jam.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-500 font-helvetica-world">or contact us via other channels:</p>
                
                <div className="space-y-7">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">pohonhukum.id@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">+62 822-8386-3111</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-[#2556BA] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-lg text-gray-700 font-helvetica-world">Pohon Hukum Indonesia</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">Pohon Hukum ID</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">Pohon Hukum</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-8">
                {/* Name and Location Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-blue-50/30 p-4 rounded">
                    <input 
                      type="text" 
                      placeholder="My name is" 
                      className="w-full bg-transparent text-xl text-black/40 font-helvetica-world placeholder-black/40 border-none outline-none"
                    />
                  </div>
                  <div className="bg-blue-50/30 p-4 rounded flex items-center justify-between">
                    <input 
                      type="text" 
                      placeholder="I am based in" 
                      className="w-full bg-transparent text-xl text-black/40 font-helvetica-world placeholder-black/40 border-none outline-none"
                    />
                    <ChevronDown className="w-6 h-6 text-black ml-2" />
                  </div>
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-blue-50/30 p-4 rounded">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-transparent text-xl text-black/40 font-helvetica-world placeholder-black/40 border-none outline-none"
                    />
                  </div>
                  <div className="bg-blue-50/30 p-4 rounded">
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-transparent text-xl text-black/40 font-helvetica-world placeholder-black/40 border-none outline-none"
                    />
                  </div>
                </div>

                {/* Help Type Selection */}
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-gray-700 font-helvetica-world">I need help with:</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">Legal Services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">Tax and Financing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">Law Consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">Others</span>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea 
                    placeholder="Write your question or message here" 
                    rows={4}
                    className="w-full bg-blue-50/30 p-5 rounded text-xl text-black/40 font-helvetica-world placeholder-black/40 border-none outline-none resize-none"
                  />
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-black/20 transform rotate-45"></div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                    <span className="text-xl text-gray-700 font-helvetica-world">Opt in for the mailing list</span>
                  </div>

                  <Button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-5 rounded-xl font-bold text-lg group">
                    Send Inquiry
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
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
