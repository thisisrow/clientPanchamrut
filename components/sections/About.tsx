export default function Product() {
  return (
    <main>
      <section className="relative py-20 min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Chemical Research Laboratory"
            className="w-full h-full object-cover opacity-20"
            src="/aboutus.png"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-6">
            Redefining the Future of{" "}
            <span className="text-[#15803d]">Chemical Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Panchamrut Chemicals is a premier Mumbai-based trading house,
            bridging the gap between global manufacturers and diverse industrial
            needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-[#0f172a] flex items-center">
                <span className="w-10 h-1 bg-[#15803d] mr-4"></span>
                Who We Are
              </h2>

              <div className="space-y-4 text-[#475569] text-lg leading-relaxed">
                <p>
                  Founded in Mumbai, <strong>Panchamrut Chemicals</strong> has
                  emerged as a trusted name in the chemical trading industry.
                </p>
                <p>
                  With over a decade of experience, we have built a robust
                  supply chain that ensures quality and competitive pricing.
                </p>
                <p>
                  We pride ourselves on transparency, technical expertise, and
                  consistent delivery.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#22c55e]/10 rounded-full blur-2xl"></div>

                <img
                  alt="Our Warehouse Facility"
                  className="rounded-2xl shadow-2xl relative z-10 border-4 border-[#ffffff]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIXOSNH2LYQnGuH6zil3yFAANqZOyKdzJv1UDIAHNGd2mVFRHMYqtJIyYnLmEJZ2I3qat_pVmeAbp1XWjdu0EUAxT-h4MVqmttvlEMIo-Sbr2VHnjDWKEwKn23sc0auTaTeU16YGV-ATNYi6y6Rxv665FCSiW1aljKmxlwZg6W7JwPfMZHBNfbf0Fep4TRKfBjL-YjwrrL5kcThmmMvWPDNky3qhAv91uL6OJQ1OyZTbFxZj_88pgHYZxX37WEMoZb3LD4pgydaAo"
                />

                <div className="absolute -bottom-6 -right-6 bg-[#15803d] text-[#ffffff] p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-base opacity-90">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#15803d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-[#ffffff]/40 text-6xl mb-4">
            format_quote
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-[#ffffff] italic leading-relaxed">
            "Our mission is to be the global benchmark for chemical distribution
            through integrity and excellence."
          </h3>
          <div className="mt-8 flex justify-center items-center space-x-4">
            <div className="w-12 h-0.5 bg-white/30"></div>
            <span className="text-white font-semibold uppercase tracking-widest text-base">
              Mission Statement
            </span>
            <div className="w-12 h-0.5 bg-white/30"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a]">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-[#475569]">The pillars of our success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#ffffff] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
              <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#15803d]">
                  verified_user
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#0f172a]">
                Trustworthy Sourcing
              </h4>
              <p className="text-[#475569] text-base leading-relaxed">
                We partner exclusively with certified manufacturers ensuring
                every batch meets global safety standards.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
              <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#15803d]">
                  inventory_2
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#0f172a]">
                Bulk Capacity
              </h4>
              <p className="text-[#475569] text-base leading-relaxed">
                Ready inventory of 500+ chemical compounds with the capacity to
                handle large-scale industrial orders.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
              <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#15803d]">
                  local_shipping
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#0f172a]">
                Logistics Network
              </h4>
              <p className="text-[#475569] text-base leading-relaxed">
                Strategic Mumbai headquarters providing efficient transit by
                road, sea, and air to anywhere globally.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0]">
              <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#15803d]">
                  high_quality
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#0f172a]">
                Quality Assured
              </h4>
              <p className="text-[#475569] text-base leading-relaxed">
                In-house quality testing protocols to verify purity levels and
                specifications before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#0f172a]">
            Corporate Profile
          </h2>

          <div className="overflow-hidden rounded-xl border border-[#e2e8f0] shadow-sm">
            <table className="min-w-full divide-y divide-[#e2e8f0]">
              <tbody className="bg-[#ffffff] divide-y divide-[#e2e8f0]">
                <tr>
                  <td className="px-6 py-4 bg-[#f8fafc] text-base font-semibold text-[#475569]">
                    Legal Name
                  </td>
                  <td className="px-6 py-4 text-base text-[#475569]">
                    Panchamrut Chemicals Pvt. Ltd.
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-[#f8fafc] text-base font-semibold text-[#475569]">
                    Nature of Business
                  </td>
                  <td className="px-6 py-4 text-base text-[#475569]">
                    Importer, Trader &amp; Supplier
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-[#f8fafc] text-base font-semibold text-[#475569]">
                    HQ Location
                  </td>
                  <td className="px-6 py-4 text-base text-[#475569]">
                    Borivali West, Mumbai, Maharashtra, India
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-[#f8fafc] text-base font-semibold text-[#475569]">
                    GST Registration
                  </td>
                  <td className="px-6 py-4 text-base text-[#475569]">
                    27AHDPD1848D1ZR
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-[#f8fafc] text-base font-semibold text-[#475569]">
                    Total Workforce
                  </td>
                  <td className="px-6 py-4 text-base text-[#475569]">
                    26 to 50 People
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-[#f8fafc] text-base font-semibold text-[#475569]">
                    Year of Establishment
                  </td>
                  <td className="px-6 py-4 text-base text-[#475569]">2012</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
