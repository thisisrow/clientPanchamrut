import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/logo.png"
                  alt="Panchamrut logo"
                  width={44}
                  height={44}
                  priority
                  className="h-11 w-11"
                />
              </div>
              <h1 className="font-display font-bold text-lg tracking-tight text-[#15803d] leading-none uppercase">
                Panchamrut
              </h1>
            </div>
            <p className="text-slate-500">
              A dedicated chemical trading house since 2004, providing reliable
              supply chain solutions for industries worldwide.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#15803d] hover:text-white transition-all"
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0-2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#15803d] hover:text-white transition-all"
                href="#"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Product Categories</h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Industrial Chemicals
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Pharmaceutical Excipients
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Specialty Compounds
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Organic Compounds
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  About Our Legacy
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Global Logistics
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-[#15803d] transition-colors"
                  href="#"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Head Office</h3>
            <address className="not-italic text-slate-500 space-y-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#15803d]">
                  location_on
                </span>
                <span>
                  203, Gangotri Apartment,
                  <br />
                  Shimpoli Road, Haridas Nagar,
                  <br />
                  Borivali West, Mumbai - 400092
                </span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#15803d]">
                  call
                </span>
                <span>+91 98707 95121</span>
              </div>
            </address>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-slate-500">
          <p>© 2024 Panchamrut Chemicals Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-[#15803d] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-[#15803d] transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
