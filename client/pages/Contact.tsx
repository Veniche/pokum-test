import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto relative">
          {/* Background decorative text - Desktop */}
          <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1440 634"
              fill="none"
            >
              <g opacity="0.02">
                <path
                  d="M1458.17 385.128C1458.17 371.06 1455.24 360.058 1449.38 352.122C1443.61 344.186 1434.86 340.218 1423.14 340.218C1412.22 340.218 1403.66 343.96 1397.43 351.445C1391.21 358.84 1388.1 370.068 1388.1 385.128C1388.1 399.918 1391.12 411.101 1397.16 418.676C1403.21 426.251 1411.86 430.039 1423.14 430.039C1434.77 430.039 1443.52 426.116 1449.38 418.27C1455.24 410.424 1458.17 399.377 1458.17 385.128ZM1498.08 385.128C1498.08 409.207 1491.13 428.19 1477.25 442.078C1463.45 455.876 1445.41 462.775 1423.14 462.775C1401.22 462.775 1383.23 455.921 1369.16 442.213C1355.18 428.416 1348.2 409.387 1348.2 385.128C1348.2 360.689 1355.18 341.661 1369.16 328.043C1383.23 314.426 1401.22 307.617 1423.14 307.617C1445.59 307.617 1463.67 314.606 1477.38 328.584C1491.18 342.472 1498.08 361.32 1498.08 385.128Z"
                  fill="black"
                />
                <path
                  d="M1233.06 388.51C1233.06 401.496 1236.04 411.822 1241.99 419.488C1247.94 427.063 1256.33 430.85 1267.15 430.85C1277.07 430.85 1284.87 426.612 1290.56 418.135C1296.24 409.568 1299.08 398.926 1299.08 386.21C1299.08 371.601 1296.15 360.464 1290.28 352.798C1284.51 345.043 1276.44 341.165 1266.07 341.165C1254.98 341.165 1246.68 345.223 1241.18 353.339C1235.77 361.365 1233.06 373.089 1233.06 388.51ZM1233.06 332.778H1233.74C1243.21 316.004 1257.86 307.617 1277.7 307.617C1295.38 307.617 1309.99 314.381 1321.53 327.908C1333.17 341.345 1338.98 359.877 1338.98 383.505C1338.98 406.682 1333.57 425.71 1322.75 440.59C1312.02 455.38 1296.73 462.775 1276.89 462.775C1257.5 462.775 1243.66 455.199 1235.36 440.049H1234.82V516.207H1196V311.405H1233.06V332.778Z"
                  fill="black"
                />
                <path
                  d="M1196 458.852H1157.18V368.625C1157.18 360.058 1155.47 353.204 1152.04 348.064C1148.61 342.833 1143.07 340.218 1135.4 340.218C1127.74 340.218 1121.56 342.608 1116.87 347.387C1112.18 352.167 1109.84 359.381 1109.84 369.031V458.852H1071.01V366.867C1071.01 357.668 1069.16 350.949 1065.47 346.711C1061.77 342.382 1055.86 340.218 1047.75 340.218C1039.63 340.218 1033.59 342.653 1029.62 347.523C1025.65 352.302 1023.67 359.472 1023.67 369.031V458.852H984.844V311.405H1022.04V333.048H1022.58C1031.24 316.094 1045.49 307.617 1065.33 307.617C1083.37 307.617 1096.71 315.463 1105.37 331.155C1115.2 315.463 1128.32 307.617 1144.74 307.617C1159.89 307.617 1172.2 311.946 1181.67 320.603C1191.22 329.171 1196 341.255 1196 356.856V458.852Z"
                  fill="black"
                />
                <path
                  d="M958.046 458.849H920.981V438.017H920.44C910.61 454.521 895.64 462.772 875.53 462.772C859.928 462.772 847.664 458.173 838.736 448.974C829.808 439.776 825.344 426.249 825.344 408.393V311.402H864.167V402.847C864.167 412.225 866.331 419.124 870.66 423.543C874.989 427.872 881.211 430.036 889.328 430.036C898.075 430.036 905.245 427.15 910.836 421.379C916.427 415.517 919.223 407.22 919.223 396.489V311.402H958.046V458.849Z"
                  fill="black"
                />
                <path
                  d="M720.901 458.851H682.078V260H720.901V367.406L769.599 311.404H817.351L765.271 368.489L818.703 458.851H772.17L736.999 395.678L720.901 412.317V458.851Z"
                  fill="black"
                />
                <path
                  d="M624.172 385.128C624.172 371.06 621.241 360.058 615.379 352.122C609.608 344.186 600.86 340.218 589.136 340.218C578.224 340.218 569.657 343.96 563.435 351.445C557.212 358.84 554.101 370.068 554.101 385.128C554.101 399.918 557.122 411.101 563.164 418.676C569.206 426.251 577.864 430.039 589.136 430.039C600.77 430.039 609.517 426.116 615.379 418.27C621.241 410.424 624.172 399.377 624.172 385.128ZM664.077 385.128C664.077 409.207 657.133 428.19 643.245 442.078C629.447 455.876 611.411 462.775 589.136 462.775C567.222 462.775 549.231 455.921 535.163 442.213C521.184 428.416 514.195 409.387 514.195 385.128C514.195 360.689 521.184 341.661 535.163 328.043C549.231 314.426 567.222 307.617 589.136 307.617C611.592 307.617 629.673 314.606 643.381 328.584C657.178 342.472 664.077 361.32 664.077 385.128Z"
                  fill="black"
                />
                <path
                  d="M399.065 388.51C399.065 401.496 402.041 411.822 407.993 419.488C413.945 427.063 422.332 430.85 433.153 430.85C443.073 430.85 450.874 426.612 456.555 418.135C462.237 409.568 465.078 398.926 465.078 386.21C465.078 371.601 462.147 360.464 456.285 352.798C450.513 345.043 442.442 341.165 432.071 341.165C420.979 341.165 412.682 345.223 407.181 353.339C401.77 361.365 399.065 373.089 399.065 388.51ZM399.065 332.778H399.741C409.21 316.004 423.865 307.617 443.705 307.617C461.38 307.617 475.99 314.381 487.533 327.908C499.166 341.345 504.983 359.877 504.983 383.505C504.983 406.682 499.572 425.71 488.75 440.59C478.019 455.38 462.733 462.775 442.893 462.775C423.504 462.775 409.661 455.199 401.364 440.049H400.823V516.207H362V311.405H399.065V332.778Z"
                  fill="black"
                />
                <path
                  d="M363.004 458.852H324.181V368.625C324.181 360.058 322.467 353.204 319.041 348.064C315.614 342.833 310.068 340.218 302.402 340.218C294.737 340.218 288.559 342.608 283.87 347.387C279.18 352.167 276.836 359.381 276.836 369.031V458.852H238.012V366.867C238.012 357.668 236.164 350.949 232.466 346.711C228.769 342.382 222.862 340.218 214.745 340.218C206.629 340.218 200.587 342.653 196.619 347.523C192.651 352.302 190.667 359.472 190.667 369.031V458.852H151.844V311.405H189.044V333.048H189.585C198.242 316.094 212.491 307.617 232.331 307.617C250.367 307.617 263.714 315.463 272.372 331.155C282.201 315.463 295.323 307.617 311.736 307.617C326.886 307.617 339.196 311.946 348.665 320.603C358.225 329.171 363.004 341.255 363.004 356.856V458.852Z"
                  fill="black"
                />
                <path
                  d="M125.046 458.849H87.9814V438.017H87.4403C77.6105 454.521 62.6403 462.772 42.5298 462.772C26.9284 462.772 14.6637 458.173 5.73572 448.974C-3.19226 439.776 -7.65625 426.249 -7.65625 408.393V311.402H31.1669V402.847C31.1669 412.225 33.3313 419.124 37.66 423.543C41.9887 427.872 48.2113 430.036 56.3276 430.036C65.0752 430.036 72.2447 427.15 77.8359 421.379C83.4272 415.517 86.2228 407.22 86.2228 396.489V311.402H125.046V458.849Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative w-[1440px] h-[634px]">
            {/* Contact Us Title - Positioned exactly as in Figma */}
            <div className="absolute" style={{ left: "169px", top: "181px" }}>
              <h1 className="text-[150.698px] font-bold text-black font-helvetica-world tracking-[-0.03em] leading-none whitespace-nowrap">
                Contact Us
              </h1>
            </div>

            {/* Phone Image - Positioned exactly as in Figma */}
            <div
              className="absolute"
              style={{
                left: "767px",
                top: "181px",
                width: "600px",
                height: "389px",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/483786050a79bb7db29e024e20080f6437bc7b2e?width=724"
                alt="Vintage rotary phone"
                className="w-full h-full object-cover"
                style={{ opacity: 0.3 }}
              />
            </div>

            {/* Separator Line - Positioned exactly as in Figma */}
            <div
              className="absolute w-full h-px bg-black"
              style={{ top: "472.5px", opacity: 0.4 }}
            ></div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative z-10 px-5 pt-20 pb-16">
            <div className="relative">
              {/* Phone image background for mobile */}
              <div className="absolute right-0 top-0 w-[362px] h-[235px] opacity-30">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/483786050a79bb7db29e024e20080f6437bc7b2e?width=724"
                  alt="Vintage rotary phone"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="relative text-[72px] font-bold text-black font-helvetica-world tracking-[-2.16px] leading-none w-[362px]">
                Contact Us
              </h1>
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
                <h2 className="text-4xl font-bold text-black font-helvetica-world">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-500 font-helvetica-world leading-7">
                  Masih ada pertanyaan? Isi form berikut ini. Tim kami akan
                  segera menghubungi Anda dalam kurun waktu 1 x 24 jam.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-500 font-helvetica-world">
                  or contact us via other channels:
                </p>

                <div className="space-y-7">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">
                      pohonhukum.id@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">
                      +62 822-8386-3111
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-[#2556BA] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="text-lg text-gray-700 font-helvetica-world">
                      Pohon Hukum Indonesia
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">
                      Pohon Hukum ID
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-[#2556BA]" />
                    <span className="text-lg text-gray-700 font-helvetica-world">
                      Pohon Hukum
                    </span>
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
                  <h3 className="text-xl font-bold text-gray-700 font-helvetica-world">
                    I need help with:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">
                        Legal Services
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">
                        Tax and Financing
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">
                        Law Consultation
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 border-2 border-black/60 rounded-full"></div>
                      <span className="text-xl text-gray-700/60 font-helvetica-world">
                        Others
                      </span>
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
                    <span className="text-xl text-gray-700 font-helvetica-world">
                      Opt in for the mailing list
                    </span>
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
    </div>
  );
}
