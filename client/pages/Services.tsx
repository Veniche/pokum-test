import { ArrowRight, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Plus, Book } from "lucide-react";

export default function Services() {
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
                    <Book className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600 font-bold font-helvetica-world">Services</span>
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
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-black font-helvetica-world tracking-tight -ml-1">
              Services
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-black/50 font-helvetica-world max-w-2xl">
              Committed to help you build your dream company.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            
            {/* Legality Section */}
            <div className="space-y-20">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-[#05060C] font-helvetica-world tracking-tight">
                    Legality
                  </h2>
                  <Plus className="w-8 h-8 text-black" />
                </div>
                <p className="text-xl text-[#383A46]/65 font-helvetica-world max-w-4xl">
                  Handle essential legal documents and business permits. We ensure your company complies with regulations, from business registration to operational licenses.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                {/* Service Card 1 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b2a1ab12dd8d678d4bf5b14c352e9672d6310c75?width=640" 
                    alt="Pendirian PT(PMDN)" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pendirian PT(PMDN)
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 8,500,000.00
                  </p>
                </div>

                {/* Service Card 2 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/2938cc9eb2f558311a2df3fb1af33796fa29a790?width=640" 
                      alt="Pendirian PT(PMA)" 
                      className="w-80 h-80 object-cover absolute"
                    />
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3888ef847733068e17ed5d570efb82f680e5b5bd?width=310" 
                      alt="" 
                      className="w-40 h-40 absolute top-0 left-1/2 transform -translate-x-1/2 rotate-180"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pendirian PT(PMA)
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 11,000,000.00
                  </p>
                </div>

                {/* Service Card 3 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1864b9955126e81208d95c0c789d029fc327e44c?width=640" 
                    alt="Pendirian PT(Perorangan)" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pendirian PT(Perorangan)
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 1,500,000.00
                  </p>
                </div>

                {/* Service Card 4 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f1b866b5d25f74e78c697bd74a386b87f14f8358?width=640" 
                    alt="Perubahan Akta" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Perubahan Akta
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 6,000,000.00
                  </p>
                </div>

                {/* Service Card 5 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1b9873818bbad31b6e32e6244f51658c2eb60557?width=640" 
                    alt="Pendirian CV" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pendirian CV
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 6,000,000.00
                  </p>
                </div>

                {/* Service Card 6 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b4814a3492b77d30c889bc54169d0d89a0a8978b?width=640" 
                    alt="Perubahan CV" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Perubahan CV
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 5,500,000.00
                  </p>
                </div>

                {/* Service Card 7 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4254a5625b7bf0ddc05139edfff14c6d20ee96bb?width=640" 
                    alt="Pendirian Firma" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pendirian Firma
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 6,000,000.00
                  </p>
                </div>

                {/* Service Card 8 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2886e00d9cb29f11484196afc9ee0bfdf216c46c?width=640" 
                    alt="Pendaftaran Merek" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pendaftaran Merek
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 3,500,000.00
                  </p>
                </div>

                {/* Service Card 9 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2c7a8b985e3e02f9cf1a4d82592132878d6ecf19?width=640" 
                    alt="Perpanjangan Merek" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Perpanjangan Merek
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 2,000,000.00
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Section */}
            <div className="space-y-20">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-[#05060C] font-helvetica-world tracking-tight">
                    Tax
                  </h2>
                  <Plus className="w-8 h-8 text-black" />
                </div>
                <p className="text-xl text-[#383A46]/65 font-helvetica-world max-w-4xl">
                  Stay compliant and stress-free. Our team helps you manage business taxes, from reporting and filing to optimizing tax strategies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                {/* Tax Service Card 1 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/40d83233792d3c5beef6e97029870ed2e349f235?width=334" 
                      alt="" 
                      className="w-40 h-80 absolute -left-2"
                    />
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a58b7c886be6c958ba42947b58a3fb17a523e956?width=482" 
                      alt="NPWP Perusahaan" 
                      className="w-60 h-60 absolute top-20 right-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    NPWP Perusahaan
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 8,500,000.00
                  </p>
                </div>

                {/* Tax Service Card 2 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3a7308ae320b6e949349161295ef4fadcf504439?width=330" 
                      alt="" 
                      className="w-40 h-[26rem] absolute left-5 -top-27"
                    />
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/62541ab90271f5626c57aa4b1ca22fdfab660e23?width=482" 
                      alt="NPWP Perorangan" 
                      className="w-60 h-60 absolute top-16 right-0"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    NPWP Perorangan
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 11,000,000.00
                  </p>
                </div>

                {/* Tax Service Card 3 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6ca0a07c856a53581d9f503a4dddc96ff381d80a?width=640" 
                    alt="Laporan Pajak Bulanan" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Laporan Pajak Bulanan
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 1,500,000.00
                  </p>
                </div>

                {/* Tax Service Card 4 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/526823435ef7a6c8948f844279a160ddba1edabc?width=640" 
                      alt="Laporan Pajak Tahunan" 
                      className="w-80 h-80 object-cover"
                    />
                    <div className="absolute top-10 left-20 w-35 h-18 transform rotate-1">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/1ee8ab17ff5ace4a86db7fc978e110e9eb86ef05?width=252" 
                        alt="" 
                        className="w-32 h-26 transform rotate-1"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Laporan Pajak Tahunan
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 6,000,000.00
                  </p>
                </div>

                {/* Tax Service Card 5 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2d769bb2eb8adf1b337afcdac7eed08155cdc7f2?width=640" 
                    alt="Pengembalian Pajak" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Pengembalian Pajak
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 6,000,000.00
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Section */}
            <div className="space-y-20">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-[#05060C] font-helvetica-world tracking-tight">
                    Consultation
                  </h2>
                  <Plus className="w-8 h-8 text-black" />
                </div>
                <p className="text-xl text-[#383A46]/65 font-helvetica-world max-w-4xl">
                  Discuss your business goals with our experts. We offer insights and tailored guidance across legal, operational, and branding challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                {/* Consultation Service Card 1 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5634fb80dec005fdb3dcf508d1dc1634a5ebbaeb?width=640" 
                    alt="Advokat" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Advokat
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 8,500,000.00
                  </p>
                </div>

                {/* Consultation Service Card 2 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/14a5000a62b696eb2433a1ff1cf25a211c361021?width=640" 
                    alt="Notaris" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Notaris
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 11,000,000.00
                  </p>
                </div>

                {/* Consultation Service Card 3 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/367a6a5d72423077fd87b52f6061cc5a0afe1dfb?width=640" 
                    alt="Mediator" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Mediator
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 1,500,000.00
                  </p>
                </div>
              </div>
            </div>

            {/* Office Rent Section */}
            <div className="space-y-20">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-[#05060C] font-helvetica-world tracking-tight">
                    Office Rent
                  </h2>
                  <Plus className="w-8 h-8 text-black" />
                </div>
                <p className="text-xl text-[#383A46]/65 font-helvetica-world max-w-4xl">
                  Need a workspace to ease your operational process? We assist in finding and securing office rentals that match your business scale, budget, and location needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                {/* Office Rent Service Card 1 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d6d92996449ceab1fc46ccf74942a5a9271ee5b3?width=640" 
                    alt="Virtual Office" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Virtual Office
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 8,500,000.00
                  </p>
                </div>

                {/* Office Rent Service Card 2 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/435727131dbcd27e5887633dad54d051bb74af37?width=640" 
                    alt="Sewa Kantor" 
                    className="w-80 h-80 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Sewa Kantor
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 11,000,000.00
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Section */}
            <div className="space-y-20">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-[#05060C] font-helvetica-world tracking-tight">
                    Marketing
                  </h2>
                  <Plus className="w-8 h-8 text-black" />
                </div>
                <p className="text-xl text-[#383A46]/65 font-helvetica-world max-w-4xl">
                  Build a brand that connects. From strategy to execution, we support your growth with marketing services that are creative, data-driven, and effective.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                {/* Marketing Service Card 1 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f853320b7264f83b11181f8b1078688bb247d1ab?width=638" 
                      alt="Paket Video Satuan Essentials" 
                      className="w-80 h-78 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Paket Video Satuan Essentials
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 8,500,000.00
                  </p>
                </div>

                {/* Marketing Service Card 2 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a264071f16d6a9247623e6236fedf390b46b1c1c?width=592" 
                      alt="Paket Video Satuan Advanced" 
                      className="w-74 h-73 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Paket Video Satuan Advanced
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 11,000,000.00
                  </p>
                </div>

                {/* Marketing Service Card 3 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8ae0c0b1325397a813246171dcf4bc2404cf80df?width=556" 
                      alt="Paket Video Satuan Premium" 
                      className="w-70 h-75 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Paket Video Satuan Premium
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 1,500,000.00
                  </p>
                </div>

                {/* Marketing Service Card 4 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute w-72 h-62 top-0 left-4">
                        <div className="absolute w-70 h-60 top-6 left-0">
                          <img 
                            src="https://api.builder.io/api/v1/image/assets/TEMP/60ba27d31a45514959a7373986bd0c299c9679bd?width=386" 
                            alt="" 
                            className="w-48 h-55 absolute top-0 left-11"
                          />
                        </div>
                        <img 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/4ebd9043144c4e56efb44f83fd77374a4f87b35a?width=533" 
                          alt="Paket Video Bulk Essentials" 
                          className="w-66 h-65 absolute bottom-0 left-0"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Paket Video Bulk Essentials
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 6,000,000.00
                  </p>
                </div>

                {/* Marketing Service Card 5 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute w-78 h-72 top-2 left-5">
                        <div className="absolute w-70 h-60 top-0 left-8">
                          <img 
                            src="https://api.builder.io/api/v1/image/assets/TEMP/50d969c77b596cde7cff18b45d224d86a4f7746b?width=386" 
                            alt="" 
                            className="w-48 h-55 absolute top-0 left-11"
                          />
                        </div>
                        <img 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/c59a7f8b5614fe0d79bc5d3a5382b2cd07fdf49e?width=530" 
                          alt="Paket Video Bulk Advanced" 
                          className="w-66 h-65 absolute bottom-0 left-0"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Paket Video Bulk Advanced
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 8,500,000.00
                  </p>
                </div>

                {/* Marketing Service Card 6 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute w-77 h-72 top-2 left-7">
                        <div className="absolute w-70 h-60 top-0 left-6">
                          <img 
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b7f36c03e38f654c9649ab5d3c24037167d5bd64?width=386" 
                            alt="" 
                            className="w-48 h-55 absolute top-0 left-11"
                          />
                        </div>
                        <img 
                          src="https://api.builder.io/api/v1/image/assets/TEMP/3a1520c5138f31b4de3eb0b5a1f4ef0d25b53381?width=485" 
                          alt="Paket Video Bulk Premium" 
                          className="w-60 h-65 absolute bottom-0 left-1"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Paket Video Bulk Premium
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 11,000,000.00
                  </p>
                </div>

                {/* Marketing Service Card 7 */}
                <div className="bg-[#F5F8FC] rounded-3xl p-8 pb-14 flex flex-col items-center text-center">
                  <div className="w-80 h-80 relative mb-3 flex items-center justify-center">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/799ba80339acd88dd873b031d4ee850f4dd50b1b?width=598" 
                      alt="Peluncuran Website" 
                      className="w-75 h-74 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#05060C] font-helvetica-world mb-5 leading-9">
                    Peluncuran Website
                  </h3>
                  <p className="text-xl text-[#757575] font-helvetica-world">
                    IDR 1,500,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-50 bg-white">
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
