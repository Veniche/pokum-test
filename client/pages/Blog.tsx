import { ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, FileText } from "lucide-react";

const articles = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b1470b78b193bfa6e77f8b8ddbf308cd52689e0a?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[680px]"
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/5f4e7377f01bb3550599c4c4f6f873698dcc0468?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[584px]"
  },
  {
    id: 3,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0e47515af6adb21b1d833adb20a535c8c330caa6?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[356px]"
  },
  {
    id: 4,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ff1801e3358315b58032378004e1f8d21bf5cf49?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[364px]"
  },
  {
    id: 5,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d2afa3049c74e7e4c82397aa988ab9e6a8904898?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[424px]"
  },
  {
    id: 6,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e377661191bbda62fc641546a50428423c654fd6?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[284px]"
  },
  {
    id: 7,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a9420bce7f0334e6f7ed260e4b4ac9c59cec2c71?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[424px]"
  },
  {
    id: 8,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9a73eae2e299cfdb55e33e46aa4aa0e2316854eb?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[364px]"
  },
  {
    id: 9,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/3ca4fa103d90db564a287bb3684a6dee8c6d2607?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Layanan PohonHukum.id",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[500px]"
  },
  {
    id: 10,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7a286e4c49312e452cf758bed406532bca3bcfd4?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[424px]"
  },
  {
    id: 11,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/781ff4b985077c4e87e1d338afba66f03a88aadb?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[364px]"
  },
  {
    id: 12,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/d1ccfddd7d1af85a7dc83f49f98aeae57d5d97f9?width=747",
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan",
    excerpt: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
    height: "h-[424px]"
  }
];

export default function Blog() {
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
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded opacity-80"></div>
                  </div>
                </div>
                <div className="bg-blue-50 px-6 py-3 rounded-full">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold font-helvetica-world">Blog</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded opacity-80"></div>
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
                    <div className="h-48 sm:h-64 lg:h-80 overflow-hidden">
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
                      <p className="text-[#757575] font-helvetica-world text-lg leading-7 line-clamp-3 flex-1">
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
                    <div className="h-48 sm:h-64 lg:h-80 overflow-hidden">
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
                      <p className="text-[#757575] font-helvetica-world text-lg leading-7 line-clamp-3 flex-1">
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
                    <div className="h-48 sm:h-64 lg:h-80 overflow-hidden">
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
                      <p className="text-[#757575] font-helvetica-world text-lg leading-7 line-clamp-3 flex-1">
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

      {/* Footer */}
      <footer className="bg-[#0C0B0E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="flex justify-between items-start">
            <div className="space-y-7">
              <div className="text-4xl font-bold text-[#3971E3] font-helvetica-world">
                pokum
              </div>
              
              <div className="space-y-6 max-w-md">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <span className="text-white/70 font-helvetica-world">pohonhukum.id@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <span className="text-white/70 font-helvetica-world">+62 822-8386-3111</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                  <div className="text-white/70 font-helvetica-world">
                    PT Pohon Hukum Indonesia<br />
                    Jl. Tawakal Raya 39C,<br />
                    Grogol Petamburan, West Jakarta,<br />
                    DKI Jakarta, Indonesia.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-15">
              <div className="space-y-6">
                <div className="text-white/70 font-helvetica-world text-lg space-y-6">
                  <div><a href="/about" className="hover:text-white transition-colors">About Us</a></div>
                  <div><a href="/services" className="hover:text-white transition-colors">Services</a></div>
                  <div><a href="/contact" className="hover:text-white transition-colors">Contact</a></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-white/70 font-helvetica-world text-lg space-y-6">
                  <div>Privacy Policy</div>
                  <div>Terms Of Service</div>
                </div>
              </div>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
