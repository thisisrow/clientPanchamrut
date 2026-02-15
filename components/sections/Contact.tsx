import InquiryForm from "@/components/forms/InquiryForm";
import Image from "next/image";
//bg-contactimg
export default function Contact() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Chemical Research Laboratory"
            className="w-full h-full object-cover opacity-20"
            src="/contactUs.png"
            fill
            sizes="100vw"
          />
        </div>

        <div data-aos="zoom-in" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-6">
            Contact <span className="text-[#15803d]">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Partnering with India's Manufacturing Excellence through innovative
            chemical solutions.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div data-aos="fade-right" className="bg-[#ffffff] rounded-brand p-8 md:p-10 shadow-soft border border-[#e2e8f0]">
              <h2 className="text-3xl text-[#0f172a] mb-2">Send an Inquiry</h2>
              <p className="text-[#475569] mb-8">
                Our specialized team will respond to your request within 24
                hours.
              </p>

              <InquiryForm
                source="contact"
                submitLabel="Send Message"
                className="space-y-6"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div data-aos="fade-left" className="space-y-8">
              <h2 className="text-3xl text-[#0f172a]">Office Information</h2>

              <div className="flex gap-5 group">
                <div className="size-12 bg-[#22c55e]/10 text-[#15803d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803d] group-hover:text-[#ffffff] transition-all rounded-lg">
                  <a
                    href="https://maps.app.goo.gl/95e8F3qb3opYnmy37"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-base uppercase tracking-wider text-[#0f172a] mb-1">
                    Our Location
                  </h4>
                  <a
                    href="https://maps.app.goo.gl/95e8F3qb3opYnmy37"
                    target="_blank"
                    className="text-[#475569] leading-relaxed"
                  >
                    Shop No. 6, Shiv Darshan,
                    <br />
                    Satya Nagar Rd, Kandivali, Satya Nagar,
                    <br />
                    Borivali West, Mumbai, Maharashtra 400092
                  </a>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="size-12 bg-[#22c55e]/10 text-[#15803d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803d] group-hover:text-[#ffffff] transition-all rounded-lg">
                  <span className="material-symbols-outlined">call</span>
                </div>

                <div>
                  <h4 className="font-bold text-base uppercase tracking-wider text-[#0f172a] mb-1">
                    Call Us
                  </h4>

                  <div className="flex flex-col text-[#475569] font-medium space-y-1">
                    <a href="tel:+919870795121" className="hover:underline">
                      +91 98707 95121
                    </a>

                    <a href="tel:+919825242122" className="hover:underline">
                      +91 98252 42122
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="size-12 bg-[#22c55e]/10 text-[#15803d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803d] group-hover:text-[#ffffff] transition-all rounded-lg">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-base uppercase tracking-wider text-[#0f172a] mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:info@panchamrutchemicals.com?subject=Product Inquiry&body=Hi,%20I%20want%20to%20get%20in%20touch%20with%20you%20for%20product%20inquiry.%20Please%20call%20me."
                    className="text-[#475569] font-medium hover:underline"
                  >
                    info@panchamrutchemicals.com
                  </a>
                  <br />
                  <a
                    href="mailto:sales@panchamrutchemicals.com?subject=Product Inquiry&body=Hi,%20I%20want%20to%20get%20in%20touch%20with%20you%20for%20product%20inquiry.%20Please%20call%20me."
                    className="text-[#475569] hover:underline"
                  >
                    sales@panchamrutchemicals.com
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="flip-left" className="rounded-brand overflow-hidden border border-[#e2e8f0] shadow-soft h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.4843385743443!2d72.8414205!3d19.216943000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12ba53dd4fd%3A0xb0366b88a18a8765!2sPANCHAMRUT%20CHEMICALS!5e1!3m2!1sen!2sin!4v1770194382905!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
