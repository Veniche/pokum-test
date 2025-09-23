interface CtaBannerProps {
  title?: string;
  buttonText?: string;
  className?: string;
}

export function CtaBanner({
  title = "Ready to work with us ?",
  buttonText = "Start Free Consultation",
  className = "",
}: CtaBannerProps) {
  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0B1017] rounded-[32px] overflow-hidden h-[224px] md:h-[172px]">
          {/* Background SVG Effect */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <filter
                  id="filter0_f"
                  x="91.6896"
                  y="-233.766"
                  width="708.876"
                  height="596.216"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="85"
                    result="effect1_foregroundBlur"
                  />
                </filter>
                <clipPath id="clip0">
                  <rect width="1200" height="172" rx="32" fill="white" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip0)">
                <g filter="url(#filter0_f)">
                  <ellipse
                    cx="446.128"
                    cy="64.3422"
                    rx="214.917"
                    ry="64.9589"
                    transform="rotate(32.6025 446.128 64.3422)"
                    fill="#5A6372"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* Content - Mobile Layout */}
          <div className="md:hidden relative flex flex-col items-center justify-center h-full px-3 gap-[45px]">
            <h2 className="text-white font-helvetica-world text-[30px] font-bold leading-[160%] tracking-[-0.9px] text-center">
              {title}
            </h2>
            <button className="flex items-center justify-center gap-3 px-6 py-[14px] border-2 border-white rounded-xl bg-transparent hover:bg-white hover:text-[#0B1017] transition-colors group">
              <span className="text-white group-hover:text-[#0B1017] font-helvetica-world text-[14px] font-bold opacity-85">
                {buttonText}
              </span>
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 13.0007V11.0007H18.172L14.222 7.05072L15.636 5.63672L22 12.0007L15.636 18.3647L14.222 16.9507L18.172 13.0007H2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Content - Desktop Layout */}
          <div className="hidden md:flex relative items-center justify-between h-full px-12">
            <h2 className="text-white font-helvetica-world text-[40px] font-bold leading-[160%] tracking-[-1.2px]">
              {title}
            </h2>
            <button className="flex items-center justify-center gap-3 px-6 py-5 border-2 border-white rounded-xl bg-transparent hover:bg-white hover:text-[#0B1017] transition-colors group">
              <span className="text-white group-hover:text-[#0B1017] font-helvetica-world text-[16px] font-bold">
                {buttonText}
              </span>
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 13.0007V11.0007H18.172L14.222 7.05072L15.636 5.63672L22 12.0007L15.636 18.3647L14.222 16.9507L18.172 13.0007H2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
