import InquiryForm from "@/components/forms/InquiryForm";
import { openLearnMorePopup } from "@/components/forms/LearnMorePopup";
export default async function Formcta() {

  return (
    <section
            className="py-24 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"
            id="contact"
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[3rem] p-5 lg:p-16 text-white relative overflow-hidden shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  {/* LEFT SIDE */}
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-6 pt-4 text-center sm:pt-4 sm:text-center md:pt-0 md:text-left">
                      Need a Custom Quote?
                    </h2>
    
                    <p className=" hidden md:block text-xl text-green-100 mb-8 max-w-lg">
                      Our experts are ready to assist you with technical
                      specifications, pricing, and bulk delivery logistics.
                    </p>
    
                    <div className="space-y-3 md:space-y-6">
                      {/* Phone Card */}
                      <div className="bg-white/10 backdrop-blur-md border-l-4 border-[#15803d] rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#15803d] text-white shadow-md">
                            <span className="material-symbols-outlined text-lg md:text-2xl">
                              call
                            </span>
                          </div>
    
                          <div>
                            <p className="text-base text-white">Phone Support</p>
                            <p className="text-xl md:text-2xl font-bold tracking-wide">
                              +91 98707 95121
                            </p>
                          </div>
                        </div>
                      </div>
    
                      {/* Email Card */}
                      <div className="bg-white/10 backdrop-blur-md border-l-4 border-[#15803d] rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#15803d] text-white shadow-md">
                            <span className="material-symbols-outlined text-lg md:text-2xl">
                              mail
                            </span>
                          </div>
    
                          <div>
                            <p className="text-base text-white">Email Support</p>
                            <p className="text-xl md:text-2xl font-bold tracking-wide">
                              info@panchamrut.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  {/* RIGHT SIDE FORM */}
                  <div className="lg:w-1/2 ">
                    <InquiryForm
                      source="home"
                      submitLabel="Send Inquiry"
                      className="bg-white p-8 rounded-3xl space-y-4 hidden md:block"
                    />
                    <button
                      type="button"
                      onClick={openLearnMorePopup}
                      className="md:hidden w-full bg-white text-[#15803d] font-bold py-4 rounded-3xl transition-all shadow-lg shadow-[#15803d]/20 border border-white/60"
                    >
                      Fill Enquiry Form 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
