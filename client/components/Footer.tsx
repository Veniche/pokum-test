import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0C0B0E] text-white">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-[120px] py-[116px]">
          <div className="relative">
            {/* Logo */}
            <div className="absolute top-0 left-0">
              <svg width="117" height="37" viewBox="0 0 118 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M117.39 27.9902H111.925V15.2903C111.925 14.0844 111.684 13.1197 111.202 12.3962C110.72 11.66 109.939 11.2919 108.86 11.2919C107.781 11.2919 106.911 11.6282 106.251 12.301C105.591 12.9737 105.261 13.9892 105.261 15.3474V27.9902H99.7967V15.0428C99.7967 13.7481 99.5365 12.8024 99.016 12.2058C98.4956 11.5965 97.6642 11.2919 96.5217 11.2919C95.3793 11.2919 94.5288 11.6346 93.9703 12.32C93.4118 12.9928 93.1326 14.0019 93.1326 15.3474V27.9902H87.668V7.23625H92.9041V10.2827H92.9802C94.1988 7.89632 96.2044 6.70312 98.997 6.70312C101.536 6.70312 103.414 7.80747 104.633 10.0161C106.017 7.80747 107.863 6.70312 110.174 6.70312C112.306 6.70312 114.039 7.31242 115.372 8.531C116.717 9.73689 117.39 11.4378 117.39 13.6338V27.9902Z" fill="#3971E3"/>
                <path d="M83.8973 27.9884H78.6803V25.0561H78.6041C77.2205 27.3791 75.1134 28.5405 72.2827 28.5405C70.0867 28.5405 68.3604 27.8932 67.1037 26.5984C65.8471 25.3037 65.2188 23.3996 65.2188 20.8863V7.23438H70.6833V20.1057C70.6833 21.4258 70.988 22.3968 71.5973 23.0188C72.2066 23.6281 73.0824 23.9328 74.2248 23.9328C75.4561 23.9328 76.4653 23.5266 77.2523 22.7142C78.0393 21.8891 78.4328 20.7213 78.4328 19.2108V7.23438H83.8973V27.9884Z" fill="#3971E3"/>
                <path d="M50.5193 27.9893H45.0547V0H50.5193V15.118L57.3738 7.23533H64.095L56.7645 15.2704L64.2855 27.9893H57.7356L52.7851 19.0975L50.5193 21.4394V27.9893Z" fill="#3971E3"/>
                <path d="M36.9017 17.6132C36.9017 15.6331 36.4891 14.0844 35.6641 12.9674C34.8517 11.8504 33.6204 11.2919 31.9702 11.2919C30.4343 11.2919 29.2284 11.8186 28.3526 12.8722C27.4767 13.9131 27.0388 15.4934 27.0388 17.6132C27.0388 19.695 27.464 21.269 28.3145 22.3353C29.165 23.4015 30.3835 23.9346 31.9702 23.9346C33.6077 23.9346 34.839 23.3825 35.6641 22.2781C36.4891 21.1738 36.9017 19.6188 36.9017 17.6132ZM42.5186 17.6132C42.5186 21.0024 41.5412 23.6744 39.5864 25.6292C37.6443 27.5714 35.1055 28.5424 31.9702 28.5424C28.8857 28.5424 26.3533 27.5777 24.3731 25.6483C22.4056 23.7062 21.4219 21.0278 21.4219 17.6132C21.4219 14.1733 22.4056 11.4949 24.3731 9.57822C26.3533 7.66149 28.8857 6.70312 31.9702 6.70312C35.1309 6.70312 37.676 7.68688 39.6054 9.65438C41.5475 11.6092 42.5186 14.2621 42.5186 17.6132Z" fill="#3971E3"/>
                <path d="M5.21706 18.0893C5.21706 19.9171 5.63595 21.3705 6.47372 22.4495C7.3115 23.5158 8.492 24.0489 10.0152 24.0489C11.4115 24.0489 12.5095 23.4523 13.3092 22.2591C14.1089 21.0532 14.5088 19.5554 14.5088 17.7656C14.5088 15.7092 14.0962 14.1416 13.2711 13.0626C12.4587 11.971 11.3227 11.4251 9.86291 11.4251C8.3016 11.4251 7.13379 11.9963 6.35948 13.1388C5.59787 14.2685 5.21706 15.9187 5.21706 18.0893ZM5.21706 10.2446H5.31226C6.64509 7.88363 8.70779 6.70312 11.5004 6.70312C13.9883 6.70312 16.0447 7.65514 17.6695 9.55918C19.3069 11.4505 20.1257 14.059 20.1257 17.3848C20.1257 20.647 19.364 23.3254 17.8408 25.4198C16.3303 27.5015 14.1787 28.5424 11.3861 28.5424C8.65702 28.5424 6.70855 27.4762 5.54074 25.3436H5.46458V36.6462H0V7.23625H5.21706V10.2446Z" fill="#3971E3"/>
              </svg>
            </div>
            
            {/* Navigation Links */}
            <div className="absolute top-[21px] left-[543px] flex gap-[59px]">
              <div className="text-white/70 font-helvetica-world text-xl leading-[120%] tracking-[-0.2px]">
                <div>About Us</div>
                <div>Services</div>
                <div>Contact</div>
              </div>
              <div className="text-white/70 font-helvetica-world text-xl leading-[120%] tracking-[-0.2px]">
                <div>Privacy Policy</div>
                <div>Terms Of Service</div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="absolute top-[30px] right-0 flex items-center gap-5">
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="absolute top-[69px] left-0 flex flex-col gap-7 w-[453px]">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/70" />
                <span className="text-white/70 font-helvetica-world text-xl">pohonhukum.id@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/70" />
                <span className="text-white/70 font-helvetica-world text-xl">+62 822-8386-3111</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                <div className="text-white/70 font-helvetica-world text-xl">
                  PT Pohon Hukum Indonesia<br />
                  Jl. Tawakal Raya 39C,<br />
                  Grogol Petamburan, West Jakarta,<br />
                  DKI Jakarta, Indonesia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="w-full px-11 py-16">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <svg width="117" height="37" viewBox="0 0 118 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M117.39 27.9902H111.925V15.2903C111.925 14.0844 111.684 13.1197 111.202 12.3962C110.72 11.66 109.939 11.2919 108.86 11.2919C107.781 11.2919 106.911 11.6282 106.251 12.301C105.591 12.9737 105.261 13.9892 105.261 15.3474V27.9902H99.7967V15.0428C99.7967 13.7481 99.5365 12.8024 99.016 12.2058C98.4956 11.5965 97.6642 11.2919 96.5217 11.2919C95.3793 11.2919 94.5288 11.6346 93.9703 12.32C93.4118 12.9928 93.1326 14.0019 93.1326 15.3474V27.9902H87.668V7.23625H92.9041V10.2827H92.9802C94.1988 7.89632 96.2044 6.70312 98.997 6.70312C101.536 6.70312 103.414 7.80747 104.633 10.0161C106.017 7.80747 107.863 6.70312 110.174 6.70312C112.306 6.70312 114.039 7.31242 115.372 8.531C116.717 9.73689 117.39 11.4378 117.39 13.6338V27.9902Z" fill="#3971E3"/>
                <path d="M83.8973 27.9884H78.6803V25.0561H78.6041C77.2205 27.3791 75.1134 28.5405 72.2827 28.5405C70.0867 28.5405 68.3604 27.8932 67.1037 26.5984C65.8471 25.3037 65.2188 23.3996 65.2188 20.8863V7.23438H70.6833V20.1057C70.6833 21.4258 70.988 22.3968 71.5973 23.0188C72.2066 23.6281 73.0824 23.9328 74.2248 23.9328C75.4561 23.9328 76.4653 23.5266 77.2523 22.7142C78.0393 21.8891 78.4328 20.7213 78.4328 19.2108V7.23438H83.8973V27.9884Z" fill="#3971E3"/>
                <path d="M50.5193 27.9893H45.0547V0H50.5193V15.118L57.3738 7.23533H64.095L56.7645 15.2704L64.2855 27.9893H57.7356L52.7851 19.0975L50.5193 21.4394V27.9893Z" fill="#3971E3"/>
                <path d="M36.9017 17.6132C36.9017 15.6331 36.4891 14.0844 35.6641 12.9674C34.8517 11.8504 33.6204 11.2919 31.9702 11.2919C30.4343 11.2919 29.2284 11.8186 28.3526 12.8722C27.4767 13.9131 27.0388 15.4934 27.0388 17.6132C27.0388 19.695 27.464 21.269 28.3145 22.3353C29.165 23.4015 30.3835 23.9346 31.9702 23.9346C33.6077 23.9346 34.839 23.3825 35.6641 22.2781C36.4891 21.1738 36.9017 19.6188 36.9017 17.6132ZM42.5186 17.6132C42.5186 21.0024 41.5412 23.6744 39.5864 25.6292C37.6443 27.5714 35.1055 28.5424 31.9702 28.5424C28.8857 28.5424 26.3533 27.5777 24.3731 25.6483C22.4056 23.7062 21.4219 21.0278 21.4219 17.6132C21.4219 14.1733 22.4056 11.4949 24.3731 9.57822C26.3533 7.66149 28.8857 6.70312 31.9702 6.70312C35.1309 6.70312 37.676 7.68688 39.6054 9.65438C41.5475 11.6092 42.5186 14.2621 42.5186 17.6132Z" fill="#3971E3"/>
                <path d="M5.21706 18.0893C5.21706 19.9171 5.63595 21.3705 6.47372 22.4495C7.3115 23.5158 8.492 24.0489 10.0152 24.0489C11.4115 24.0489 12.5095 23.4523 13.3092 22.2591C14.1089 21.0532 14.5088 19.5554 14.5088 17.7656C14.5088 15.7092 14.0962 14.1416 13.2711 13.0626C12.4587 11.971 11.3227 11.4251 9.86291 11.4251C8.3016 11.4251 7.13379 11.9963 6.35948 13.1388C5.59787 14.2685 5.21706 15.9187 5.21706 18.0893ZM5.21706 10.2446H5.31226C6.64509 7.88363 8.70779 6.70312 11.5004 6.70312C13.9883 6.70312 16.0447 7.65514 17.6695 9.55918C19.3069 11.4505 20.1257 14.059 20.1257 17.3848C20.1257 20.647 19.364 23.3254 17.8408 25.4198C16.3303 27.5015 14.1787 28.5424 11.3861 28.5424C8.65702 28.5424 6.70855 27.4762 5.54074 25.3436H5.46458V36.6462H0V7.23625H5.21706V10.2446Z" fill="#3971E3"/>
              </svg>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/pokum/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col items-center gap-8 w-full max-w-[340px]">
              <div className="text-center text-white/70 font-helvetica-world text-xl">
                pohonhukum.id@gmail.com
              </div>
              <div className="text-center text-white/70 font-helvetica-world text-xl">
                +62 822-8386-3111
              </div>
              <div className="text-center text-white/70 font-helvetica-world text-xl">
                PT Pohon Hukum Indonesia<br />
                Jl. Tawakal Raya 39C,<br />
                Grogol Petamburan, West Jakarta,<br />
                DKI Jakarta, Indonesia.
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex gap-[59px] pt-8">
              <div className="text-center text-white/70 font-helvetica-world text-xl leading-[120%] tracking-[-0.2px]">
                <div>About Us</div>
                <div>Services</div>
                <div>Contact</div>
              </div>
              <div className="text-center text-white/70 font-helvetica-world text-xl leading-[120%] tracking-[-0.2px]">
                <div>Privacy Policy</div>
                <div>Terms Of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
