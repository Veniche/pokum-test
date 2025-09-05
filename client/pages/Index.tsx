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
  Home,
  User,
  Briefcase,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="text-3xl font-bold text-[#2556BA] font-helvetica-world">
              pokum
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="flex items-center space-x-2 text-black/70 hover:text-black font-helvetica-world"
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a
                href="/about"
                className="flex items-center space-x-2 text-black/70 hover:text-black font-helvetica-world"
              >
                <User className="h-5 w-5" />
                <span>About Us</span>
              </a>
              <a
                href="/services"
                className="flex items-center space-x-2 text-black/70 hover:text-black font-helvetica-world"
              >
                <Briefcase className="h-5 w-5" />
                <span>Services</span>
              </a>
              <a
                href="/blog"
                className="flex items-center space-x-2 text-black/70 hover:text-black font-helvetica-world"
              >
                <FileText className="h-5 w-5" />
                <span>Blog</span>
              </a>
              <a
                href="/contact"
                className="flex items-center space-x-2 text-black/70 hover:text-black font-helvetica-world"
              >
                <Phone className="h-5 w-5" />
                <span>Contact</span>
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#2556BA] hover:text-blue-700">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#2556BA] hover:text-blue-700">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#2556BA] hover:text-blue-700">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#2556BA] hover:text-blue-700">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Large pokum title */}
              <div className="space-y-4">
                <h1 className="text-8xl md:text-9xl font-bold text-black font-helvetica-world leading-none">
                  pokum
                </h1>
                <p className="text-2xl md:text-3xl text-black/70 font-helvetica-world">
                  Your Full-Cycle Business Incorporation Experts
                </p>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-black/50 font-helvetica leading-9">
                  We guide your business from entity creation to marketing,
                  finance, tax support, and more — combining legal expertise
                  with AI-powered solutions. You can focus on what matters most:{" "}
                  <span className="font-bold text-black">
                    growing your products
                  </span>
                  .
                </p>
              </div>

              {/* CTA Button */}
              <Button className="bg-white border-2 border-black text-black hover:bg-black hover:text-white px-6 py-4 rounded-xl font-bold text-lg group">
                Start Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Gavel Image */}
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/59d45f696386a7b116e2dfd9d41e778ef00c8b9f?width=1292"
                alt="Legal consultation"
                className="w-full h-auto max-w-[646px] mx-auto"
              />
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1017] rounded-[32px] px-12 py-16 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-48 w-96 h-32 bg-gray-600 rounded-full blur-3xl transform rotate-45"></div>
            </div>

            <div className="relative flex items-center justify-between">
              <h2 className="text-5xl font-bold text-white font-helvetica-world tracking-tight">
                Ready to work with us ?
              </h2>
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
              <h2 className="text-4xl font-bold text-black font-helvetica-world leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="flex items-center space-x-3 text-[#2556BA]">
                <span className="font-bold text-lg font-helvetica">
                  Have Other Questions?
                </span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-black font-helvetica-world">
                    How long does the business formation process take?
                  </h3>
                  <ChevronDown className="h-7 w-7 text-gray-400" />
                </div>
                <p className="text-xl text-black/65 font-helvetica-world leading-relaxed">
                  Typically, it takes X weeks depending on your business type
                  and location.
                </p>
                <hr className="border-gray-200" />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black font-helvetica-world">
                  What types of businesses can you help incorporate?
                </h3>
                <ChevronDown className="h-7 w-7 text-gray-400 rotate-180" />
              </div>
              <hr className="border-gray-200" />

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black font-helvetica-world">
                  Do you offer ongoing support after incorporation?
                </h3>
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
              <div className="text-4xl font-bold text-[#3971E3] font-helvetica-world">
                pokum
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white/70" />
                  <span className="text-white/70 font-helvetica-world text-lg">
                    pohonhukum.id@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white/70" />
                  <span className="text-white/70 font-helvetica-world text-lg">
                    +62 822-8386-3111
                  </span>
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
