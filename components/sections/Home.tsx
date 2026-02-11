import OurCatagory from "./page_component/OurCatagory";
import Formcta from "./page_component/Formcta";
import { openLearnMorePopup } from "@/components/forms/LearnMorePopup";

export default function Home() {
  return (
    <main>
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="bg-[#15803d]/90 text-white px-4 py-1.5 rounded-full text-base font-semibold mb-6 inline-block">
              Established 2004
            </span>
            <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
              Your Trusted Partner for Chemical{" "}
              <span className="text-[#16a34a]">Trading &amp; Supply</span>
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
              Leading Mumbai-based industrial chemical supplier delivering
              quality and consistency across various industry sectors for over
              20 years.
            </p>
            <div className="flex flex-wrap gap-4 mb-[10%] md:mb-0">
              <a
                className="bg-[#15803d] hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2"
                href="/catagory"
              >
                Explore Categories
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <button
                type="button"
                onClick={openLearnMorePopup}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all hidden md:block mb-5 md:mb-0"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#15803d] text-3xl">
                  handshake
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-base font-medium uppercase tracking-wider">
                  Business Type
                </p>
                <h3 className="font-bold text-lg">Trader &amp; Supplier</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#15803d] text-3xl">
                  event_available
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-base font-medium uppercase tracking-wider">
                  Established
                </p>
                <h3 className="font-bold text-lg">Since 2004</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#15803d] text-3xl">
                  location_on
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-base font-medium uppercase tracking-wider">
                  Location
                </p>
                <h3 className="font-bold text-lg">Mumbai, India</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#15803d] text-3xl">
                  inventory_2
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-base font-medium uppercase tracking-wider">
                  Range
                </p>
                <h3 className="font-bold text-lg">500+ Products</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 md:py-24 overflow-hidden" id="about">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10"></div>
              <img
                alt="Scientist in lab"
                className="rounded-3xl shadow-2xl relative z-10 w-full"
                src="/sciencelab.png"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#15803d] text-white p-8 rounded-2xl shadow-xl z-20 max-w-[240px] ">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p className="text-base font-medium text-green-100">
                  Years of excellence in chemical distribution
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-[#15803d] font-bold tracking-widest uppercase text-base mb-4 block">
                About Us
              </span>
              <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
                A Premier Name in Chemical Trading
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Established in 2004, Panchamrut Chemicals has grown into a
                premier trading house specializing in industrial,
                pharmaceutical, and specialty chemicals. Based in Mumbai, we
                serve as a critical bridge between global manufacturers and
                diverse industrial end-users.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our legacy of 20 years is built on transparency, quality
                assurance, and an unwavering commitment to meeting the precise
                requirements of our clients across India.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#15803d]">
                    verified
                  </span>
                  <span className="font-semibold">ISO Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#15803d]">
                    speed
                  </span>
                  <span className="font-semibold">Timely Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#15803d]">
                    package_2
                  </span>
                  <span className="font-semibold">Secure Packaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#15803d]">
                    support_agent
                  </span>
                  <span className="font-semibold">Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurCatagory />
      <Formcta />
    </main>
  );
}
