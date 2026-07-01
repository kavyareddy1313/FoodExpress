import React from 'react';

export default function Checkout() {
  return (
    <>
<div>
  {/* TopNavBar (Shared Component) */}
  <header className="bg-surface dark:bg-primary-container docked full-width top-0 shadow-md dark:bg-primary-container z-50 sticky">
    <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
      <div className="flex items-center gap-gutter">
        <a className="font-headline-md text-headline-md font-bold text-primary dark:text-on-primary-fixed" href="#">FoodExpress</a>
        <nav className="hidden md:flex gap-6 ml-8">
          <a className="text-secondary font-label-bold border-b-2 border-secondary pb-1 active:scale-95 transition-transform" href="#">Restaurants</a>
          <a className="text-on-surface-variant font-label-bold pb-1 hover:text-secondary transition-colors duration-200 active:scale-95 transition-transform" href="#">My Orders</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <button className="hidden md:flex bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-bold hover:-translate-y-0.5 transition-transform shadow-sm">
          JOIN NOW
        </button>
      </div>
    </div>
  </header>
  {/* Main Content Canvas */}
  <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg md:py-16">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-8">
      {/* Left Column: Cart Items */}
      <div className="lg:col-span-8 flex flex-col gap-stack-lg">
        <div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-md">Your Cart</h1>
        </div>
        {/* Restaurant Header */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
              <img alt="Restaurant Image" className="w-full h-full object-cover" data-alt="A high quality close up photograph of a steaming hot Hyderabadi biryani dish served in a traditional copper handi. The lighting is warm and inviting, highlighting the vibrant yellow and orange hues of the saffron-infused rice and tender meat. The setting is a clean, modern high-end restaurant table with a dark, sophisticated background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXOU6MNdBEyHGef-zOj1DZwxD0KwK5d_n1M2_j80C1O2T8V3Wrs5EPB5qANPuXoqcE5R83rdfh9xr8nutgZ-T3wKHUec0IFmigcXZaNiNOHvowWagp0yf1UXEUoqdS1CKLAaFbMe3zvUOisv91JpEGx2ORgmFQHwvPs-RKdYM_BcMqmGxDXWGt4tSNya4kM0P_2d3u05f_MI0jCyiqdi5GfSkoWUuwp7um48ziZ4VSjI-BtopoQGmjwtJNDSD0b0aXAbnzb85hqg8" />
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-1">Paradise Biryani</h2>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                <span>Delivery in 25-35 mins</span>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Items List */}
        <div className="bg-surface-container-lowest rounded-xl shadow-soft p-6 flex flex-col gap-6">
          {/* Item 1 */}
          <div className="flex items-start md:items-center gap-4 border-b border-surface-variant pb-6">
            <div className="w-20 h-20 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
              <img alt="Hyderabadi Chicken Biryani" className="w-full h-full object-cover" data-alt="A top-down view of a plate of rich, aromatic Hyderabadi Chicken Biryani. The rice is perfectly cooked, separated, and layered with tender pieces of marinated chicken. A side of raita in a small white bowl sits next to it. The lighting is bright and modern, contrasting against a clean, minimal white table surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDT5qrdZOuUiDQoFs5b_IclOSUs-3T22buAsRillMMDN1kJm8GLMR9N1kWGkqg6AdIdzqS87RrOBg0IBDtFpFvuPJKWdfXp2yQyOMI4dx7-VS-rqAHop9ftbUsUwqUj_VtHJcqLpCSIPwzXEPV-Pg0kkKg4SvzrIxz-6x66yyxwjlw0Zsnz5YU847tL6YAbEYxUAzYPczjYwRL3GGbwHaPAXWc7rNlSF-wG2mPSomNQmmbJgddzfMlBx-u-VxfXp9WcWVNzxc3bWM" />
            </div>
            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Hyderabadi Chicken Biryani</h3>
                <div className="font-price-tag text-price-tag text-primary">₹350</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-outline-variant rounded-lg bg-surface">
                  <button aria-label="Decrease quantity" className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">remove</span>
                  </button>
                  <span className="w-8 text-center font-label-bold text-primary">1</span>
                  <button aria-label="Increase quantity" className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
                <button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors p-2">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-start md:items-center gap-4 pb-2">
            <div className="w-20 h-20 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
              <img alt="Paneer Tikka" className="w-full h-full object-cover" data-alt="A close up shot of Paneer Tikka skewers placed on a modern matte black plate. The paneer cubes are brightly colored, charred at the edges, and garnished with fresh cilantro and lemon wedges. The background is a clean, bright, light-mode dining setting with natural daylight pouring in." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAleBWa20sI6Bpu0oJTeDjDWy8HlQj4vY9m3BhRDskDvCNVHXAHVuVfPYJMGAw0p2khCywCzLxUmlhpKPRgJ9m7LALQ2WBOVA5h7e8IeEDlQHM8EjdZhdOMFeCeVe1KXl8Cx0p8cGAm_gPppVWra10slwsqpe-Z82VaoFvFgivviENZhPck4sznoQzLXiIDR7PT3BX0ANEwbl9zvOlOyen7tC2DktqDY5kfJWlwu6Cj-zQTF4Op-TJ6XUv39_MLdAXYx8rbqR9BriE" />
            </div>
            <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-label-bold text-label-bold text-primary mb-1">Paneer Tikka</h3>
                <div className="font-price-tag text-price-tag text-primary">₹220</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-outline-variant rounded-lg bg-surface">
                  <button aria-label="Decrease quantity" className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">remove</span>
                  </button>
                  <span className="w-8 text-center font-label-bold text-primary">1</span>
                  <button aria-label="Increase quantity" className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
                <button aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors p-2">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-secondary font-label-bold text-label-bold self-start hover:text-on-secondary-container transition-colors mt-2">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            Add more items
          </button>
        </div>
        {/* Promo Code Section */}
        <div className="bg-surface-container-lowest rounded-xl shadow-soft p-6">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Offers &amp; Benefits</h3>
          <div className="flex gap-2 mb-4">
            <input className="flex-grow rounded-xl border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary px-4 py-3 font-body-md text-primary bg-surface outline-none transition-colors placeholder:text-on-surface-variant/50" placeholder="Enter promo code" type="text" defaultValue="WELCOME50" />
            <button className="bg-primary text-on-primary px-6 rounded-xl font-label-bold hover:bg-on-surface transition-colors">
              Apply
            </button>
          </div>
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-secondary px-3 py-1.5 rounded-lg text-sm font-label-bold">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>WELCOME50 applied (-₹100)</span>
            <button className="ml-2 text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </div>
      </div>
      {/* Right Column: Sticky Summary */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 flex flex-col gap-6">
          {/* Bill Details */}
          <div className="bg-surface-container-lowest rounded-xl shadow-floating p-6 border border-surface-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4 border-b border-surface-variant pb-4">Bill Details</h3>
            <div className="flex flex-col gap-3 font-body-md text-on-surface-variant mb-4">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span className="font-label-bold text-primary">₹570</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-label-bold text-primary">₹40</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span className="font-label-bold text-primary">₹5</span>
              </div>
              <div className="flex justify-between">
                <span>GST and Charges</span>
                <span className="font-label-bold text-primary">₹28</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Discount</span>
                <span className="font-label-bold">-₹100</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-surface-variant pt-4 mb-6">
              <span className="font-headline-sm text-headline-sm text-primary">To Pay</span>
              <span className="font-display-lg-mobile text-display-lg-mobile text-primary">₹543</span>
            </div>
            {/* Delivery Address */}
            <div className="bg-surface rounded-lg p-4 mb-6 border border-outline-variant">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-primary font-label-bold">
                  <span className="material-symbols-outlined text-secondary text-[20px]">location_on</span>
                  Home
                </div>
                <button className="text-secondary text-sm font-label-bold hover:underline">Change</button>
              </div>
              <p className="text-on-surface-variant text-sm pl-7">Banjara Hills, Hyderabad</p>
            </div>
            {/* Payment Selector */}
            <div className="mb-6">
              <h4 className="font-label-bold text-label-bold text-primary mb-3">Pay using</h4>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary bg-secondary/5 text-secondary font-label-bold transition-colors">
                  <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                  UPI
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">credit_card</span>
                  Card
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">payments</span>
                  Cash
                </button>
              </div>
            </div>
            <button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-headline-sm text-headline-sm hover:bg-on-secondary-container hover:-translate-y-0.5 transition-all shadow-md flex justify-center items-center gap-2">
              Place Order <span className="opacity-50 mx-1">·</span> ₹543
            </button>
          </div>
          {/* Trust Row */}
          <div className="flex justify-center gap-6 px-4 py-2">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="material-symbols-outlined text-outline text-[24px]">verified_user</span>
              <span className="text-xs text-on-surface-variant font-label-bold text-[10px] uppercase tracking-wider">100% Safe<br />Payments</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="material-symbols-outlined text-outline text-[24px]">local_shipping</span>
              <span className="text-xs text-on-surface-variant font-label-bold text-[10px] uppercase tracking-wider">On-time<br />Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Footer (Shared Component) */}
  <footer className="bg-primary-container dark:bg-surface-container-lowest w-full rounded-t-xl mt-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto font-body-md text-body-md">
      <div className="flex flex-col gap-4">
        <span className="font-headline-sm text-headline-sm text-on-primary">FoodExpress</span>
        <p className="text-on-primary-container text-sm">© 2024 FoodExpress. All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-3">
        <a className="text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Company Info</a>
      </div>
      <div className="flex flex-col gap-3">
        <a className="text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Support</a>
      </div>
      <div className="flex flex-col gap-3">
        <a className="text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">Admin Portal</a>
        <a className="text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100" href="#">App Store</a>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}
