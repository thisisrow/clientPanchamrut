import InquiryForm from "@/components/forms/InquiryForm";

//bg-contactimg
export default function Contact() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Chemical Research Laboratory"
            className="w-full h-full object-cover opacity-20"
            src="/contactUs.png"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <div className="bg-[#ffffff] rounded-brand p-8 md:p-10 shadow-soft border border-[#e2e8f0]">
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
            <div className="space-y-8">
              <h2 className="text-3xl text-[#0f172a]">Office Information</h2>

              <div className="flex gap-5 group">
                <div className="size-12 bg-[#22c55e]/10 text-[#15803d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#15803d] group-hover:text-[#ffffff] transition-all rounded-lg">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-base uppercase tracking-wider text-[#0f172a] mb-1">
                    Our Location
                  </h4>
                  <p className="text-[#475569] leading-relaxed">
                    405, Industry House, MG Road,
                    <br />
                    Mumbai, Maharashtra 400001, India
                  </p>
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
                  <p className="text-[#475569] font-medium">+91 22 1234 5678</p>
                  <p className="text-[#475569]">+91 98765 43210</p>
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
                  <p className="text-[#475569] font-medium">
                    info@panchamrutchemicals.com
                  </p>
                  <p className="text-[#475569]">
                    sales@panchamrutchemicals.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-brand overflow-hidden border border-[#e2e8f0] shadow-soft h-[300px]">
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
