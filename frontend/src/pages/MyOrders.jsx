import React from 'react';

export default function MyOrders() {
  return (
    <>
<div>
  {/* TopNavBar Component from JSON */}
  <header className="bg-primary-container dark:bg-tertiary-container shadow-md flex justify-between items-center px-margin-desktop py-4 w-full sticky top-0 z-50">
    <div className="font-headline-md text-headline-md text-secondary-container tracking-tight">FoodExpress</div>
    <nav className="hidden md:flex gap-6 items-center">
      <a className="text-on-primary-container hover:text-secondary transition-colors font-label-bold text-label-bold hover:translate-y-[-2px] duration-200 scale-95 active:scale-90" href="#">Restaurants</a>
      <a className="text-secondary border-b-2 border-secondary pb-1 font-label-bold text-label-bold hover:translate-y-[-2px] transition-transform duration-200 scale-95 active:scale-90" href="#">My Orders</a>
    </nav>
    <div className="flex items-center gap-4">
      <button className="text-secondary dark:text-secondary-fixed hover:translate-y-[-2px] transition-transform duration-200 scale-95 active:scale-90">
        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
      </button>
      <button className="text-secondary dark:text-secondary-fixed hover:translate-y-[-2px] transition-transform duration-200 scale-95 active:scale-90">
        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <img alt="User profile" className="w-10 h-10 rounded-full object-cover border border-outline-variant ml-2 shadow-sm" data-alt="A small circular user profile picture placeholder. A generic modern abstract geometric pattern in shades of deep navy and bright emerald green. Clean and simple corporate modern style. Highly detailed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTNniLcK_E6uVCiE6RnvmgOH7D2x8qsF0SbqYW3lTuP2Ox5JfqxNdMFui8xfdfEidd6yH-hc2Rc5FyjVSUPgTgb38ISzyQMkvlHGfiMFevWiNL0yQaFWSI7lLNRdzc-zcohwVWnlendpJB-CbKH2hYBbXgGzZCWK_p0Z5wxhM6DvcxBGAY21vSkjXFxSdtntEkRCrwJSmZZquqYZ423QJNzHVQ9g7epG13wYR3gVvvHAdlpgb3LxI1roeh8jesrq0-oB-9O151y8U" />
    </div>
  </header>
  <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-stack-lg">
    {/* Header Section */}
    <section className="flex flex-col gap-stack-md md:flex-row md:items-center justify-between">
      <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary-container">My Orders</h1>
      <div className="relative w-full md:w-auto mt-stack-sm md:mt-0">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input className="w-full md:w-[300px] bg-surface-container-lowest border-none rounded-xl py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none font-body-md text-body-md text-on-surface" placeholder="Search orders..." type="text" />
      </div>
    </section>
    {/* Filter Tabs */}
    <section className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-secondary text-on-secondary shadow-md hover:-translate-y-0.5 transition-transform font-label-bold text-label-bold">All</button>
      <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface hover:bg-surface-dim hover:-translate-y-0.5 transition-all font-label-bold text-label-bold">Active</button>
      <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface hover:bg-surface-dim hover:-translate-y-0.5 transition-all font-label-bold text-label-bold">Delivered</button>
      <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface hover:bg-surface-dim hover:-translate-y-0.5 transition-all font-label-bold text-label-bold">Cancelled</button>
    </section>
    {/* Order List */}
    <section className="flex flex-col gap-stack-md">
      {/* Card 2 (Active first to draw attention based on order type, though requested order was 1,2,3 - sticking to requested order for fidelity to prompt) */}
      {/* Card 1: Paradise Biryani (Delivered) */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/30 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-outline-variant/20 pb-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-surface-variant flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="A close up, high quality, appetizing shot of Hyderabadi Chicken Biryani in a traditional serving bowl. Rich warm lighting emphasizing the spices and rice texture. Corporate modern food photography style, vibrant colors. Highly detailed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmhqV2DkLq0xP6Z5JvwDGhbSvL7dAU4yTuBppRsIjnLAG27RcYenA7WWMEjSTwYODSLHjKceOQobHZ81X2YzNyOzamekBWBtcCcH4zX5e0T1K9X68dSQDpulhKFmtIuGJJEG23ixVRqVkhDzNtjHhFCFBZf9_Ny9zlxWt8-OOUulf4GzLpvcxoAo5e00NuZHdnDdHCv_Db59xib5HwuXW0dHWKqLDzwABBlnCKOygI3Azvai0C2wRJ8MEjhAdGyFu8twY-m50VLpo" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-primary-container">Paradise Biryani</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> Banjara Hills
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-secondary-container/20 text-on-tertiary-container px-2 py-0.5 rounded-md font-label-bold text-label-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Delivered
                </span>
                <span className="text-on-surface-variant text-sm border-l border-outline-variant/50 pl-2">24 Oct, 08:30 PM</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="font-price-tag text-price-tag text-primary-container">₹543</span>
            <a className="text-secondary font-label-bold text-label-bold mt-2 hover:underline" href="#">View Details</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
          <p className="font-body-md text-body-md text-on-surface line-clamp-2 max-w-xl">
            1x Hyderabadi Chicken Biryani, 1x Paneer Tikka
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-full border-2 border-outline-variant text-on-surface-variant font-label-bold text-label-bold hover:bg-surface-variant hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">star</span> Rate Order
            </button>
            <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-secondary text-on-secondary font-label-bold text-label-bold shadow-md hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">replay</span> Reorder
            </button>
          </div>
        </div>
      </div>
      {/* Card 2: Shah Ghouse (On the way) */}
      <div className="bg-primary-container rounded-2xl p-6 shadow-xl border border-secondary-container/20 flex flex-col gap-4 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        {/* Decorative glassmorphism blob */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-secondary-container rounded-full blur-[80px] opacity-20 pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-surface-variant/10 pb-4 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-inverse-surface flex-shrink-0 flex items-center justify-center shadow-lg overflow-hidden border border-surface-variant/20">
              <img className="w-full h-full object-cover opacity-90" data-alt="A close up, high quality, appetizing shot of rich Mutton Haleem garnished with fried onions and lemon wedges. Dark, moody, premium lighting. Corporate modern food photography style. Highly detailed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUVNnmm4aX_XOrOtf-kJlFyZZ_KMKn52ITeZ0SLhTYp2Sm8LrL7Xn-BQ8ygn2EKv78KMU21vetkeFM2GZUKzxtLgRpZPVMCCv1-YIWPPPCDMH6UQFtM60xGuUd5EznkRN1sP85TV0LNzZ784uJFnnnYQK6E4U5RcQTro8P0v2bdni_sZ4k4GjQ_QaS2Cv7bMSJfLSnxfIEi3ZDWdNap-zUmIiDCVHbhEaVXFqFjAFOsqpfkit6Kutigf7yc9ndy1QJxzqb2Q3i8Mc" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Shah Ghouse</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">storefront</span> Shah Ghouse
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[#ffeb3b]/20 text-[#fbc02d] px-2 py-0.5 rounded-md font-label-bold text-label-bold text-xs flex items-center gap-1 border border-[#fbc02d]/30">
                  <span className="material-symbols-outlined text-[14px] animate-pulse">local_shipping</span> On the way
                </span>
                <span className="text-primary-fixed-dim text-sm border-l border-surface-variant/20 pl-2">Today, 07:15 PM</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="font-price-tag text-price-tag text-secondary-container">₹820</span>
            <a className="text-secondary-fixed font-label-bold text-label-bold mt-2 hover:underline" href="#">View Details</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2 relative z-10">
          <div className="flex flex-col gap-1 w-full sm:w-auto">
            <p className="font-body-md text-body-md text-primary-fixed line-clamp-2 max-w-xl">
              2x Mutton Haleem, 4x Rumali Roti
            </p>
            <a className="text-sm text-primary-fixed-dim hover:text-on-primary underline decoration-primary-fixed-dim/50 underline-offset-2 w-fit" href="#">Get Help</a>
          </div>
          <div className="flex gap-3 w-full sm:w-auto mt-2 sm:mt-0">
            <button className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container font-label-bold text-label-bold shadow-[0_4px_14px_0_rgba(108,248,187,0.39)] hover:-translate-y-1 transition-transform duration-200 flex items-center justify-center gap-2 w-full sm:min-w-[160px]">
              <span className="material-symbols-outlined text-[20px]">location_on</span> Track Order
            </button>
          </div>
        </div>
      </div>
      {/* Card 3: Pizza Hut (Cancelled) */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/30 flex flex-col gap-4 opacity-75 grayscale-[20%]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-outline-variant/20 pb-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-surface-variant flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
              <img className="w-full h-full object-cover" data-alt="A simple top down shot of a Margherita Pizza with fresh basil leaves. Bright, clean lighting. Corporate modern food photography style. Highly detailed." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxismqESgUN0WyCfUrs3ntYUCSHQB92zVbpVAcUphZa5flxW9LpmWtzNxwRG1LdVUwKx8Ge_58h2dy7fwEb0Rn_e6IxLZmue4C4rR8yYAoFNVaUPsCOOqrQ-uFjWC6EQx7LejLGrhKjXbLS9Dmn9625dR9IRFE3Ch2THonZRkYOfSKtkVS38wjgwexpdQQTB5-9tSC_taD73ZPIGsxdc10dcjlPH5zuCZ6T2EnRb8U7IEU6uVdNZu2utcT747sUA6s5HvgrXvRPqE" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface-variant">Pizza Hut</h3>
              <p className="font-body-md text-body-md text-outline flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span> Jubilee Hills
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-error-container/50 text-on-error-container px-2 py-0.5 rounded-md font-label-bold text-label-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">cancel</span> Cancelled
                </span>
                <span className="text-outline text-sm border-l border-outline-variant/50 pl-2">20 Oct, 01:15 PM</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="font-price-tag text-price-tag text-on-surface-variant">₹450</span>
            <a className="text-on-surface-variant font-label-bold text-label-bold mt-2 hover:underline" href="#">View Details</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 max-w-xl">
            1x Margherita Pizza, 1x Garlic Bread
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-secondary text-on-secondary font-label-bold text-label-bold shadow-md hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">replay</span> Reorder
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer Component from JSON */}
  <footer className="bg-primary-container dark:bg-tertiary-container w-full px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between mt-auto">
    <div className="flex flex-col gap-4">
      <div className="font-headline-sm text-headline-sm text-secondary-container">FoodExpress</div>
      <p className="font-body-md text-body-md text-on-primary-container">© 2024 FoodExpress Inc. Rapid delivery, fresh flavors.</p>
    </div>
    <div className="flex flex-col sm:flex-row gap-6 mt-8 md:mt-0 items-start md:items-center">
      <a className="text-on-primary-container/80 hover:text-secondary transition-colors font-body-md text-body-md" href="#">About Us</a>
      <a className="text-on-primary-container/80 hover:text-secondary transition-colors font-body-md text-body-md" href="#">Partner with Us</a>
      <a className="text-on-primary-container/80 hover:text-secondary transition-colors font-body-md text-body-md" href="#">Support Center</a>
      <a className="text-on-primary-container/80 hover:text-secondary transition-colors font-body-md text-body-md" href="#">Privacy Policy</a>
      <a className="text-on-primary-container/80 hover:text-secondary transition-colors font-body-md text-body-md" href="#">Terms of Service</a>
    </div>
  </footer>
</div>

    </>
  );
}
