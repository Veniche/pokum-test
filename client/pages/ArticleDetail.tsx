import { ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, FileText } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();

  // This would typically come from an API or database
  const article = {
    id: id,
    category: "TIPS & TRICKS",
    title: "5 Alasan Mengapa Anda Harus Memanfaatkan Layanan PohonHukum.id",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/6bc21aeeb8fb553accb7f40a3f7ff2bb6d237ff1?width=2000",
    content: {
      intro: "Dalam dunia yang semakin digital, kebutuhan akan akses hukum yang cepat, tepat, dan efisien menjadi semakin mendesak. PohonHukum.id hadir sebagai solusi modern untuk membantu Anda mendapatkan layanan hukum terbaik dengan mudah. Berikut ini adalah lima alasan utama mengapa Anda harus memanfaatkan layanan dari PohonHukum.id:",
      sections: [
        {
          title: "1. Akses Mudah ke Informasi Hukum",
          content: "PohonHukum.id menyediakan berbagai informasi hukum yang lengkap dan mudah diakses. Dengan platform yang dirancang untuk kenyamanan pengguna, Anda dapat dengan cepat menemukan jawaban atas pertanyaan hukum yang mungkin Anda miliki, baik itu terkait kontrak, pajak, hak kekayaan intelektual, hingga masalah litigasi."
        },
        {
          title: "2. Tim Ahli Hukum yang Berpengalaman",
          content: "Layanan PohonHukum.id didukung oleh tim ahli hukum yang profesional dan berpengalaman di berbagai bidang. Dengan keahlian mereka, Anda dapat yakin bahwa setiap saran dan solusi yang diberikan akan sesuai dengan kebutuhan Anda serta mengikuti regulasi terbaru."
        },
        {
          title: "3. Solusi Hukum yang Disesuaikan",
          content: "Setiap masalah hukum memiliki keunikan tersendiri. PohonHukum.id memahami hal ini dan menawarkan solusi yang dirancang khusus sesuai dengan kebutuhan klien. Baik Anda seorang individu, pelaku bisnis kecil, atau perusahaan besar, kami siap membantu dengan pendekatan yang personal dan tepat sasaran."
        },
        {
          title: "4. Efisiensi Waktu dan Biaya",
          content: "Menggunakan layanan hukum konvensional seringkali membutuhkan waktu yang lama dan biaya yang tidak sedikit. Dengan PohonHukum.id, Anda dapat menghemat waktu dan biaya tanpa mengurangi kualitas layanan. Proses yang cepat dan transparan menjadi salah satu keunggulan utama platform ini."
        },
        {
          title: "5. Keamanan dan Kerahasiaan Data",
          content: "Kami memahami betapa pentingnya keamanan dan kerahasiaan data dalam urusan hukum. PohonHukum.id menggunakan teknologi terkini untuk memastikan bahwa semua informasi Anda aman dan terlindungi dari akses yang tidak sah."
        }
      ],
      conclusion: {
        title: "Kesimpulan",
        content: "PohonHukum.id adalah solusi modern untuk kebutuhan hukum Anda. Dengan berbagai keunggulan yang ditawarkan, mulai dari akses mudah, tim ahli yang berpengalaman, hingga efisiensi biaya, tidak ada alasan untuk tidak memanfaatkan layanan ini. Kunjungi PohonHukum.id hari ini dan rasakan sendiri manfaatnya!"
      }
    }
  };

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
      </div>

      {/* Article Content */}
      <article className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-14">
          {/* Article Header */}
          <div className="space-y-12">
            <div className="space-y-3">
              <span className="text-[#2556BA] font-bold text-lg font-helvetica-world uppercase tracking-wide">
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05060C] font-helvetica-world leading-tight">
                {article.title}
              </h1>
            </div>

            <div className="space-y-4">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[560px] object-cover rounded-lg"
              />
              <p className="text-lg sm:text-xl text-[#757575] font-helvetica-world leading-8">
                {article.content.intro}
              </p>
            </div>
          </div>

          {/* Article Sections */}
          <div className="space-y-14">
            <div className="space-y-10">
              {article.content.sections.map((section, index) => (
                <div key={index} className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#05060C] font-helvetica-world leading-9">
                    {section.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-[#757575] font-helvetica-world leading-8">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#05060C] font-helvetica-world leading-9">
                {article.content.conclusion.title}
              </h2>
              <p className="text-lg sm:text-xl text-[#757575] font-helvetica-world leading-8">
                {article.content.conclusion.content}
              </p>
            </div>
          </div>
        </div>
      </article>

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
                  <div><a href="/blog" className="hover:text-white transition-colors">Blog</a></div>
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
