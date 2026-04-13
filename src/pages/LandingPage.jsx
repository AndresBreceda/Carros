import React from 'react';

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover brightness-50" alt="Side profile of a sleek black luxury grand tourer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQ3fcBB5vKFMu8_E3ntramEYq7RACzX7WcxDiKIKjO3jyExwxcfDF26iD9AYC69LEGa9Li8vbMRQG3GLVXTeaFOa_8ZeXFe0Z5GYWU-s1UmtuY3ni_bNnFHgMqAB0amRxeQjPLJ2iObOd6oORRVTKcat3hThNwXpufY7GtMRij7EBaWTdmqG0oZDZ6gCfyB8cTss-7cxB2PTrXRUfw1gKNaEQtECNrFLaQiq9q7Xv5PCnHVboiZkNZQChuA3BuT-ynX_XEbQwuylt" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 px-12 md:px-24 max-w-4xl pt-24">
          <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs mb-4 block">Excellence in Motion</span>
          <h1 className="font-headline text-5xl md:text-8xl text-on-background leading-tight mb-8">The Ultimate Luxury Experience</h1>
          <div className="flex items-center space-x-8">
            <a href="/catalog" className="gold-gradient text-on-secondary px-10 py-4 font-label uppercase tracking-widest text-xs rounded-sm font-bold transition-transform active:scale-95">Explore the Collection</a>
            <div className="h-[1px] w-24 bg-outline-variant"></div>
            <span className="font-label text-on-surface-variant uppercase tracking-widest text-[10px]">Since 2024</span>
          </div>
        </div>
      </section>

      {/* Featured Fleet (Asymmetric Editorial Layout) */}
      <section className="py-32 px-12 md:px-24 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-6xl mb-6 italic">The Fleet</h2>
            <p className="text-on-surface-variant font-light leading-relaxed">Curated for the connoisseur, our collection represents the pinnacle of automotive engineering and bespoke luxury interiors.</p>
          </div>
          <div className="mt-8 md:mt-0 font-label text-secondary uppercase tracking-[0.2em] text-[10px] border-b border-secondary/30 pb-2">View All Models</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Car 1: Large Feature */}
          <div className="md:col-span-8 group">
            <div className="relative aspect-[16/9] overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Phantom Ghost" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo8Nk936Gi0XEudmT1gH37kccSvgLy7vz40Itk7yzYc9DKBN-Z3RlXeZsAIUA-cpOyLTieMW25GfzRto1GmaNVkGisRrOQxefVLQikxmbBtmNAWw9SDRUQabZYNAyU24a-CiL7Dx7jmZE7JgundJFuFjSLluIfwwNQ5r_zZhPSHOlIVeAr_lbcBpn-T6-S1Okr_xMNQ7sSRJVTsYBs_80FWip261M903R8q2cyiGJk7ZCYZNDG5nWfQY6dB_s3sQCvh-re79OUB4S3" />
              <div className="absolute bottom-0 left-0 right-0 glass-panel p-8 flex justify-between items-center">
                <div>
                  <h3 className="font-headline text-2xl text-on-background">Phantom Ghost</h3>
                  <p className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mt-1">Available in Black Diamond</p>
                </div>
                <div className="text-right">
                  <span className="font-label text-xs text-secondary">$1,200</span>
                  <span className="font-label text-[10px] text-on-surface-variant block uppercase tracking-tighter">Per Day</span>
                </div>
              </div>
            </div>
          </div>
          {/* Specs Grid (Asymmetric Right) */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-12 pl-0 md:pl-12">
            <div className="border-l border-outline-variant/30 pl-6">
              <span className="font-label text-secondary text-[10px] uppercase tracking-widest">Performance</span>
              <p className="font-headline text-2xl mt-2 italic">0-60 in 3.4s</p>
            </div>
            <div className="border-l border-outline-variant/30 pl-6">
              <span className="font-label text-secondary text-[10px] uppercase tracking-widest">Engine</span>
              <p className="font-headline text-2xl mt-2 italic">V12 Twin-Turbo</p>
            </div>
            <div className="border-l border-outline-variant/30 pl-6">
              <span className="font-label text-secondary text-[10px] uppercase tracking-widest">Cabin</span>
              <p className="font-headline text-2xl mt-2 italic">Bespoke Silk</p>
            </div>
          </div>
          {/* Car 2 & 3: Smaller Cards */}
          <div className="md:col-span-6 group">
            <div className="bg-surface-container-low p-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Starlight SUV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGQUxCibqCfih9zBgadQmCX1SjK5bb8lC_Kq2E05VUFMBjlxduTRsEfu7ZE2HxbitzdfnRAvinIRaxyeXzHm1sZQf1flZ46D7TJZqOkPP_XsW2ch0jnm8ckPvWZEj9sVZoEPX6nbiccORfUEpO-AjoyprN67p68-RSxKAyr21GG_B7rSr6qELWlSr-QASC4bbrFHhTq_FuLRXSN3b5Eyxvs9Lpw2LVy7rio5Y7qo8HjqJosLTYEoaeczKE7yasW0tY79aEWnT11CK" />
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl">Starlight SUV</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Chauffeur Ready</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase tracking-widest">V-VIP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 group mt-0 md:mt-24">
            <div className="bg-surface-container-low p-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Azure Convertible" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZXEDD0Hj53N3e3JtBEaCmDY4Y73kigBgxJCTOxLFahfsY1o4R_5vsGkhz2KVVLCUw37zu1hojZqGVNE4oz2UzMT110FvV6RfTTpEGGw9mYkhmhrspXwYKj_RXpjQ_jBKHZRLaLulpdsBMr0XHLpbkvxhGhN7MH6VANaN2mOl0-_sP9DHk8MKyTVm0KnwmLZcLCFtiWJnCcad90_s0QZM-IfsZMW-VZrFBVYE9Mge5kJicCPB1OVcP95u7L-xIR33q0wxqv1Bdkfo" />
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl">Azure Convertible</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Coastal Special</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Manual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="px-12 md:px-24">
          <div className="max-w-xl mb-24">
            <h2 className="font-headline text-4xl md:text-6xl mb-6">Beyond the Wheel</h2>
            <p className="text-on-surface-variant font-light">We provide more than just transportation. We provide the infrastructure for a seamless, luxurious lifestyle on the move.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline-variant/10">
            {/* Service 1 */}
            <div className="bg-surface-container-lowest p-12 transition-colors hover:bg-surface-container-low group">
              <span className="material-symbols-outlined text-secondary text-4xl mb-8 group-hover:scale-110 transition-transform inline-block">person_pin_circle</span>
              <h3 className="font-headline text-2xl mb-4">Private Chauffeur</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-8">Professional, discreet, and highly trained drivers available 24/7 to navigate you through the city or across the country.</p>
              <a className="font-label text-xs uppercase tracking-widest text-on-background border-b border-on-background/20 pb-1" href="#">Inquire</a>
            </div>
            {/* Service 2 */}
            <div className="bg-surface-container-lowest p-12 transition-colors hover:bg-surface-container-low group">
              <span className="material-symbols-outlined text-secondary text-4xl mb-8 group-hover:scale-110 transition-transform inline-block">flight_takeoff</span>
              <h3 className="font-headline text-2xl mb-4">Airport Transfers</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-8">Tarmac-side pickup and delivery. We synchronize with your private flight manifest to ensure zero wait time upon arrival.</p>
              <a className="font-label text-xs uppercase tracking-widest text-on-background border-b border-on-background/20 pb-1" href="#">Schedule</a>
            </div>
            {/* Service 3 */}
            <div className="bg-surface-container-lowest p-12 transition-colors hover:bg-surface-container-low group">
              <span className="material-symbols-outlined text-secondary text-4xl mb-8 group-hover:scale-110 transition-transform inline-block">event_seat</span>
              <h3 className="font-headline text-2xl mb-4">Event Concierge</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-8">Red carpet arrivals, wedding galas, or corporate summits. Our fleet management ensures your guests arrive in synchronized style.</p>
              <a className="font-label text-xs uppercase tracking-widest text-on-background border-b border-on-background/20 pb-1" href="#">Contact</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Bento Grid Style) */}
      <section className="py-32 px-12 md:px-24">
        <h2 className="font-headline text-4xl text-center mb-24 italic">Voices of Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-high p-12 flex flex-col justify-between">
            <div>
              <div className="flex text-secondary mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-headline text-xl leading-relaxed italic">"The attention to detail is simply unmatched. From the scent of the cabin to the punctuality of the concierge."</p>
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <div className="h-10 w-10 bg-outline-variant/30 rounded-full"></div>
              <div>
                <p className="font-label uppercase tracking-widest text-[10px]">Alistair Vaughn</p>
                <p className="font-label text-[8px] text-on-surface-variant uppercase">Global CEO</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-surface-container-low p-12 relative overflow-hidden flex items-center">
            <div className="relative z-10 max-w-lg">
              <p className="font-headline text-2xl leading-relaxed">"NAOROBI isn't a rental service. It's an extension of one's own standard of living. I won't use anyone else for my London stays."</p>
              <div className="mt-12">
                <p className="font-label uppercase tracking-widest text-[10px]">Elena Rodriguez</p>
                <p className="font-label text-[8px] text-on-surface-variant uppercase">Creative Director</p>
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-surface-container-highest/20 flex items-center justify-center opacity-10">
              <span className="material-symbols-outlined text-[200px]">format_quote</span>
            </div>
          </div>
          <div className="md:col-span-3 bg-surface-container-highest p-12 text-center">
            <p className="font-headline text-3xl max-w-3xl mx-auto italic">"An uncompromising dedication to the art of the journey. Simply the gold standard."</p>
            <div className="mt-8 font-label uppercase tracking-[0.4em] text-[10px] text-secondary">The Financial Times Review</div>
          </div>
        </div>
      </section>
    </>
  );
}
