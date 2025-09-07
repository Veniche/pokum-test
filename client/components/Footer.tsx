import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
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
                  PT Pohon Hukum Indonesia
                  <br />
                  Jl. Tawakal Raya 39C,
                  <br />
                  Grogol Petamburan, West Jakarta,
                  <br />
                  DKI Jakarta, Indonesia.
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <div className="text-white/70 font-helvetica-world text-xl leading-relaxed">
              About Us
              <br />
              Services
              <br />
              Contact
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-white/70 font-helvetica-world text-xl leading-relaxed">
              Privacy Policy
              <br />
              Terms Of Service
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-5">
            <a href="#" className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
              <Facebook className="h-4 w-4 text-black" />
            </a>
            <a href="#" className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
              <Twitter className="h-4 w-4 text-black" />
            </a>
            <a href="#" className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
              <Instagram className="h-4 w-4 text-black" />
            </a>
            <a href="#" className="w-6 h-6 bg-white/70 rounded-full flex items-center justify-center">
              <Linkedin className="h-4 w-4 text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
