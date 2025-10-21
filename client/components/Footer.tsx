import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function Footer() {
  return (
    <footer className="bg-[#0C0B0E] text-white py-16 lg:py-28">
      <ScrollToTop />
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="px-[120px]">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
            {/* Left Section - Logo and Contact Info */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="w-[130px] h-[37px]">
                <svg
                  width="130"
                  height="37"
                  viewBox="0 0 130 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M117.39 27.9902H111.925V15.2903C111.925 14.0844 111.684 13.1197 111.202 12.3962C110.72 11.66 109.939 11.2919 108.86 11.2919C107.781 11.2919 106.911 11.6282 106.251 12.301C105.591 12.9737 105.261 13.9892 105.261 15.3474V27.9902H99.7967V15.0428C99.7967 13.7481 99.5365 12.8024 99.016 12.2058C98.4956 11.5965 97.6642 11.2919 96.5217 11.2919C95.3793 11.2919 94.5288 11.6346 93.9703 12.32C93.4118 12.9928 93.1326 14.0019 93.1326 15.3474V27.9902H87.668V7.23625H92.9041V10.2827H92.9802C94.1988 7.89632 96.2044 6.70312 98.997 6.70312C101.536 6.70312 103.414 7.80747 104.633 10.0161C106.017 7.80747 107.863 6.70312 110.174 6.70312C112.306 6.70312 114.039 7.31242 115.372 8.531C116.717 9.73689 117.39 11.4378 117.39 13.6338V27.9902Z"
                    fill="#3971E3"
                  />
                  <path
                    d="M83.8973 27.9884H78.6803V25.0561H78.6041C77.2205 27.3791 75.1134 28.5405 72.2827 28.5405C70.0867 28.5405 68.3604 27.8932 67.1037 26.5984C65.8471 25.3037 65.2188 23.3996 65.2188 20.8863V7.23438H70.6833V20.1057C70.6833 21.4258 70.988 22.3968 71.5973 23.0188C72.2066 23.6281 73.0824 23.9328 74.2248 23.9328C75.4561 23.9328 76.4653 23.5266 77.2523 22.7142C78.0393 21.8891 78.4328 20.7213 78.4328 19.2108V7.23438H83.8973V27.9884Z"
                    fill="#3971E3"
                  />
                  <path
                    d="M50.5193 27.9893H45.0547V0H50.5193V15.118L57.3738 7.23533H64.095L56.7645 15.2704L64.2855 27.9893H57.7356L52.7851 19.0975L50.5193 21.4394V27.9893Z"
                    fill="#3971E3"
                  />
                  <path
                    d="M36.9017 17.6132C36.9017 15.6331 36.4891 14.0844 35.6641 12.9674C34.8517 11.8504 33.6204 11.2919 31.9702 11.2919C30.4343 11.2919 29.2284 11.8186 28.3526 12.8722C27.4767 13.9131 27.0388 15.4934 27.0388 17.6132C27.0388 19.695 27.464 21.269 28.3145 22.3353C29.165 23.4015 30.3835 23.9346 31.9702 23.9346C33.6077 23.9346 34.839 23.3825 35.6641 22.2781C36.4891 21.1738 36.9017 19.6188 36.9017 17.6132ZM42.5186 17.6132C42.5186 21.0024 41.5412 23.6744 39.5864 25.6292C37.6443 27.5714 35.1055 28.5424 31.9702 28.5424C28.8857 28.5424 26.3533 27.5777 24.3731 25.6483C22.4056 23.7062 21.4219 21.0278 21.4219 17.6132C21.4219 14.1733 22.4056 11.4949 24.3731 9.57822C26.3533 7.66149 28.8857 6.70312 31.9702 6.70312C35.1309 6.70312 37.676 7.68688 39.6054 9.65438C41.5475 11.6092 42.5186 14.2621 42.5186 17.6132Z"
                    fill="#3971E3"
                  />
                  <path
                    d="M5.21706 18.0893C5.21706 19.9171 5.63595 21.3705 6.47372 22.4495C7.3115 23.5158 8.492 24.0489 10.0152 24.0489C11.4115 24.0489 12.5095 23.4523 13.3092 22.2591C14.1089 21.0532 14.5088 19.5554 14.5088 17.7656C14.5088 15.7092 14.0962 14.1416 13.2711 13.0626C12.4587 11.971 11.3227 11.4251 9.86291 11.4251C8.3016 11.4251 7.13379 11.9963 6.35948 13.1388C5.59787 14.2685 5.21706 15.9187 5.21706 18.0893ZM5.21706 10.2446H5.31226C6.64509 7.88363 8.70779 6.70312 11.5004 6.70312C13.9883 6.70312 16.0447 7.65514 17.6695 9.55918C19.3069 11.4505 20.1257 14.059 20.1257 17.3848C20.1257 20.647 19.364 23.3254 17.8408 25.4198C16.3303 27.5015 14.1787 28.5424 11.3861 28.5424C8.65702 28.5424 6.70855 27.4762 5.54074 25.3436H5.46458V36.6462H0V7.23625H5.21706V10.2446Z"
                    fill="#3971E3"
                  />
                  <rect x="122" y="22" width="6" height="6" fill="#3971E3" />
                </svg>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5013 2.50269H17.5013C17.7223 2.50269 17.9343 2.59048 18.0906 2.74676C18.2468 2.90304 18.3346 3.11501 18.3346 3.33602V16.6694C18.3346 16.8904 18.2468 17.1023 18.0906 17.2586C17.9343 17.4149 17.7223 17.5027 17.5013 17.5027H2.5013C2.28029 17.5027 2.06833 17.4149 1.91205 17.2586C1.75577 17.1023 1.66797 16.8904 1.66797 16.6694V3.33602C1.66797 3.11501 1.75577 2.90304 1.91205 2.74676C2.06833 2.59048 2.28029 2.50269 2.5013 2.50269ZM10.0513 9.73852L4.70797 5.20102L3.6288 6.47102L10.0621 11.9335L16.3796 6.46685L15.2896 5.20602L10.0513 9.73852Z" fill="white" fill-opacity="0.7"></path></svg>
                  <span className="text-white/70 font-helvetica-world text-xl">
                  corporate@pokum.id
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 13.6815V16.6282C17.5001 16.8392 17.4202 17.0423 17.2763 17.1967C17.1325 17.351 16.9355 17.4451 16.725 17.4598C16.3611 17.4854 16.0639 17.4982 15.8333 17.4982C8.46917 17.4982 2.5 11.529 2.5 4.16484C2.5 3.93484 2.51278 3.63761 2.53833 3.27317C2.5531 3.06271 2.64715 2.86568 2.8015 2.72184C2.95585 2.57801 3.15902 2.49807 3.37 2.49817H6.31667C6.42003 2.49806 6.51975 2.53638 6.59644 2.60569C6.67313 2.67499 6.72133 2.77032 6.73167 2.87317C6.75056 3.06428 6.76833 3.21761 6.785 3.33317C6.9506 4.48894 7.28999 5.61303 7.79167 6.66734C7.87083 6.834 7.81917 7.03317 7.66917 7.13984L5.87083 8.42484C6.97059 10.9867 9.01227 13.0284 11.5742 14.1282L12.8575 12.3332C12.9097 12.2596 12.9863 12.2068 13.0736 12.1841C13.161 12.1613 13.2535 12.1702 13.335 12.209C14.3892 12.7097 15.513 13.0483 16.6683 13.2132C16.7839 13.2298 16.9367 13.2476 17.1267 13.2665C17.2294 13.277 17.3245 13.3253 17.3936 13.402C17.4628 13.4787 17.5001 13.5783 17.5 13.6815Z" fill="white" fill-opacity="0.7"></path></svg>
                  <span className="text-white/70 font-helvetica-world text-xl">
                  +62 822-8386-3111
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 flex-shrink-0 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66797 4.16553L7.5013 1.66553L12.5013 4.16553L17.7538 1.91469C17.8172 1.88751 17.8864 1.8765 17.9551 1.88265C18.0238 1.88879 18.0899 1.9119 18.1475 1.9499C18.2051 1.9879 18.2523 2.0396 18.285 2.10036C18.3176 2.16112 18.3347 2.22904 18.3346 2.29803V15.8322L12.5013 18.3322L7.5013 15.8322L2.2488 18.083C2.1854 18.1102 2.11623 18.1212 2.04752 18.1151C1.97881 18.1089 1.9127 18.0858 1.85512 18.0478C1.79755 18.0098 1.75031 17.9581 1.71764 17.8974C1.68498 17.8366 1.66791 17.7687 1.66797 17.6997V4.16553ZM12.5013 16.4689V5.97886L12.4471 6.00219L7.5013 3.52886V14.0189L7.55547 13.9955L12.5013 16.4689Z" fill="white" fill-opacity="0.7"></path></svg>
                  <span className="text-white/70 font-helvetica-world text-xl">
                  Jakarta Barat, Indonesia.
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Section - Navigation Links */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-x-20 gap-y-8">
                <div className="text-white/70 font-helvetica-world text-lg space-y-6">
                  <div><Link to="/about" className="block hover:text-white transition-colors">About Us</Link></div>
                  <div><Link to="/services" className="block hover:text-white transition-colors">Services</Link></div>
                  <div><Link to="/contact" className="block hover:text-white transition-colors">Contact</Link></div>
                </div>
                <div className="text-white/70 font-helvetica-world text-lg space-y-6">
                  <div><a href="#" className="block hover:text-white transition-colors">Privacy Policy</a></div>
                  <div className="whitespace-nowrap"><a href="#" className="block hover:text-white transition-colors">Terms Of Service</a></div>
                </div>
              </div>
            </div>

            {/* Right Section - Social Media Icons */}
            <div className="flex justify-end items-start">
              <div className="flex items-center gap-6">
                <a href="https://www.facebook.com/share/1Baj8So5Tq/" className="w-6 h-6 hover:opacity-80 transition-opacity">
                  <img src="/pokum/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
                  <img src="/pokum/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/pokum.id" className="w-6 h-6 hover:opacity-80 transition-opacity">
                  <img src="/pokum/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/pokum-id" className="w-6 h-6 hover:opacity-80 transition-opacity">
                  <img src="/pokum/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="w-full px-4 sm:px-8 py-16">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="w-[130px] h-[37px] relative">
              <svg
                width="130"
                height="37"
                viewBox="0 0 130 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M117.39 27.9902H111.925V15.2903C111.925 14.0844 111.684 13.1197 111.202 12.3962C110.72 11.66 109.939 11.2919 108.86 11.2919C107.781 11.2919 106.911 11.6282 106.251 12.301C105.591 12.9737 105.261 13.9892 105.261 15.3474V27.9902H99.7967V15.0428C99.7967 13.7481 99.5365 12.8024 99.016 12.2058C98.4956 11.5965 97.6642 11.2919 96.5217 11.2919C95.3793 11.2919 94.5288 11.6346 93.9703 12.32C93.4118 12.9928 93.1326 14.0019 93.1326 15.3474V27.9902H87.668V7.23625H92.9041V10.2827H92.9802C94.1988 7.89632 96.2044 6.70312 98.997 6.70312C101.536 6.70312 103.414 7.80747 104.633 10.0161C106.017 7.80747 107.863 6.70312 110.174 6.70312C112.306 6.70312 114.039 7.31242 115.372 8.531C116.717 9.73689 117.39 11.4378 117.39 13.6338V27.9902Z"
                  fill="#3971E3"
                />
                <path
                  d="M83.8973 27.9884H78.6803V25.0561H78.6041C77.2205 27.3791 75.1134 28.5405 72.2827 28.5405C70.0867 28.5405 68.3604 27.8932 67.1037 26.5984C65.8471 25.3037 65.2188 23.3996 65.2188 20.8863V7.23438H70.6833V20.1057C70.6833 21.4258 70.988 22.3968 71.5973 23.0188C72.2066 23.6281 73.0824 23.9328 74.2248 23.9328C75.4561 23.9328 76.4653 23.5266 77.2523 22.7142C78.0393 21.8891 78.4328 20.7213 78.4328 19.2108V7.23438H83.8973V27.9884Z"
                  fill="#3971E3"
                />
                <path
                  d="M50.5193 27.9893H45.0547V0H50.5193V15.118L57.3738 7.23533H64.095L56.7645 15.2704L64.2855 27.9893H57.7356L52.7851 19.0975L50.5193 21.4394V27.9893Z"
                  fill="#3971E3"
                />
                <path
                  d="M36.9017 17.6132C36.9017 15.6331 36.4891 14.0844 35.6641 12.9674C34.8517 11.8504 33.6204 11.2919 31.9702 11.2919C30.4343 11.2919 29.2284 11.8186 28.3526 12.8722C27.4767 13.9131 27.0388 15.4934 27.0388 17.6132C27.0388 19.695 27.464 21.269 28.3145 22.3353C29.165 23.4015 30.3835 23.9346 31.9702 23.9346C33.6077 23.9346 34.839 23.3825 35.6641 22.2781C36.4891 21.1738 36.9017 19.6188 36.9017 17.6132ZM42.5186 17.6132C42.5186 21.0024 41.5412 23.6744 39.5864 25.6292C37.6443 27.5714 35.1055 28.5424 31.9702 28.5424C28.8857 28.5424 26.3533 27.5777 24.3731 25.6483C22.4056 23.7062 21.4219 21.0278 21.4219 17.6132C21.4219 14.1733 22.4056 11.4949 24.3731 9.57822C26.3533 7.66149 28.8857 6.70312 31.9702 6.70312C35.1309 6.70312 37.676 7.68688 39.6054 9.65438C41.5475 11.6092 42.5186 14.2621 42.5186 17.6132Z"
                  fill="#3971E3"
                />
                <path
                  d="M5.21706 18.0893C5.21706 19.9171 5.63595 21.3705 6.47372 22.4495C7.3115 23.5158 8.492 24.0489 10.0152 24.0489C11.4115 24.0489 12.5095 23.4523 13.3092 22.2591C14.1089 21.0532 14.5088 19.5554 14.5088 17.7656C14.5088 15.7092 14.0962 14.1416 13.2711 13.0626C12.4587 11.971 11.3227 11.4251 9.86291 11.4251C8.3016 11.4251 7.13379 11.9963 6.35948 13.1388C5.59787 14.2685 5.21706 15.9187 5.21706 18.0893ZM5.21706 10.2446H5.31226C6.64509 7.88363 8.70779 6.70312 11.5004 6.70312C13.9883 6.70312 16.0447 7.65514 17.6695 9.55918C19.3069 11.4505 20.1257 14.059 20.1257 17.3848C20.1257 20.647 19.364 23.3254 17.8408 25.4198C16.3303 27.5015 14.1787 28.5424 11.3861 28.5424C8.65702 28.5424 6.70855 27.4762 5.54074 25.3436H5.46458V36.6462H0V7.23625H5.21706V10.2446Z"
                  fill="#3971E3"
                />
                <rect x="122" y="22" width="6" height="6" fill="#3971E3" />
              </svg>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/share/1Baj8So5Tq/" className="w-6 h-6 hover:opacity-80 transition-opacity">
                <img src="/pokum/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
                <img src="/pokum/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/pokum.id" className="w-6 h-6 hover:opacity-80 transition-opacity">
                <img src="/pokum/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/pokum-id" className="w-6 h-6 hover:opacity-80 transition-opacity">
                <img src="/pokum/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>


            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5013 2.50269H17.5013C17.7223 2.50269 17.9343 2.59048 18.0906 2.74676C18.2468 2.90304 18.3346 3.11501 18.3346 3.33602V16.6694C18.3346 16.8904 18.2468 17.1023 18.0906 17.2586C17.9343 17.4149 17.7223 17.5027 17.5013 17.5027H2.5013C2.28029 17.5027 2.06833 17.4149 1.91205 17.2586C1.75577 17.1023 1.66797 16.8904 1.66797 16.6694V3.33602C1.66797 3.11501 1.75577 2.90304 1.91205 2.74676C2.06833 2.59048 2.28029 2.50269 2.5013 2.50269ZM10.0513 9.73852L4.70797 5.20102L3.6288 6.47102L10.0621 11.9335L16.3796 6.46685L15.2896 5.20602L10.0513 9.73852Z" fill="white" fill-opacity="0.7"></path></svg>
                <span className="text-white/70 font-helvetica-world text-xl">
                corporate@pokum.id
                </span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 13.6815V16.6282C17.5001 16.8392 17.4202 17.0423 17.2763 17.1967C17.1325 17.351 16.9355 17.4451 16.725 17.4598C16.3611 17.4854 16.0639 17.4982 15.8333 17.4982C8.46917 17.4982 2.5 11.529 2.5 4.16484C2.5 3.93484 2.51278 3.63761 2.53833 3.27317C2.5531 3.06271 2.64715 2.86568 2.8015 2.72184C2.95585 2.57801 3.15902 2.49807 3.37 2.49817H6.31667C6.42003 2.49806 6.51975 2.53638 6.59644 2.60569C6.67313 2.67499 6.72133 2.77032 6.73167 2.87317C6.75056 3.06428 6.76833 3.21761 6.785 3.33317C6.9506 4.48894 7.28999 5.61303 7.79167 6.66734C7.87083 6.834 7.81917 7.03317 7.66917 7.13984L5.87083 8.42484C6.97059 10.9867 9.01227 13.0284 11.5742 14.1282L12.8575 12.3332C12.9097 12.2596 12.9863 12.2068 13.0736 12.1841C13.161 12.1613 13.2535 12.1702 13.335 12.209C14.3892 12.7097 15.513 13.0483 16.6683 13.2132C16.7839 13.2298 16.9367 13.2476 17.1267 13.2665C17.2294 13.277 17.3245 13.3253 17.3936 13.402C17.4628 13.4787 17.5001 13.5783 17.5 13.6815Z" fill="white" fill-opacity="0.7"></path></svg>
                <span className="text-white/70 font-helvetica-world text-xl">
                +62 822-8386-3111
                </span>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 flex-shrink-0 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66797 4.16553L7.5013 1.66553L12.5013 4.16553L17.7538 1.91469C17.8172 1.88751 17.8864 1.8765 17.9551 1.88265C18.0238 1.88879 18.0899 1.9119 18.1475 1.9499C18.2051 1.9879 18.2523 2.0396 18.285 2.10036C18.3176 2.16112 18.3347 2.22904 18.3346 2.29803V15.8322L12.5013 18.3322L7.5013 15.8322L2.2488 18.083C2.1854 18.1102 2.11623 18.1212 2.04752 18.1151C1.97881 18.1089 1.9127 18.0858 1.85512 18.0478C1.79755 18.0098 1.75031 17.9581 1.71764 17.8974C1.68498 17.8366 1.66791 17.7687 1.66797 17.6997V4.16553ZM12.5013 16.4689V5.97886L12.4471 6.00219L7.5013 3.52886V14.0189L7.55547 13.9955L12.5013 16.4689Z" fill="white" fill-opacity="0.7"></path></svg>
                <span className="text-white/70 font-helvetica-world text-xl">
                Jakarta Barat, Indonesia.
                </span>
              </div>
            </div>
            {/* Contact Information */}
            {/* <div className="flex flex-col items-center gap-6 w-full max-w-[340px]">
              <div className="text-center text-white/70 font-helvetica-world">
                corporate@pokum.id
              </div>
              <div className="text-center text-white/70 font-helvetica-world">
                +62 822-8386-3111
              </div>
              <div className="text-center text-white/70 font-helvetica-world">
                Jakarta Barat, Indonesia.
              </div>
            </div> */}

            {/* Navigation Links */}
            <div className="flex gap-16 pt-8">
              <div className="text-white/70 font-helvetica-world space-y-4">
                <div><Link to="/about" className="hover:text-white transition-colors">About Us</Link></div>
                <div><Link to="/services" className="hover:text-white transition-colors">Services</Link></div>
                <div><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></div>
              </div>
              <div className="text-white/70 font-helvetica-world space-y-4">
                <div><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Terms Of Service</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
