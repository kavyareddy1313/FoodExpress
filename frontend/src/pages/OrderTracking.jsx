import React from 'react';

export default function OrderTracking() {
  return (
    <>
<div>
  {/* Top Navigation (Mobile & Desktop) */}
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-primary shadow-md">
    <a className="flex items-center text-headline-md font-headline-md font-extrabold text-secondary hover:opacity-80 transition-opacity active:scale-95 transition-transform" href="#">
      FoodExpress
    </a>
    <div className="flex items-center space-x-4">
      <button className="text-on-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: '"FILL" 0'}}>help</span>
      </button>
      <button className="text-on-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: '"FILL" 0'}}>notifications</span>
      </button>
    </div>
  </nav>
  <main className="max-w-[800px] mx-auto p-margin-mobile md:p-margin-desktop space-y-stack-lg">
    {/* Hero Tracking Card */}
    <section className="bg-primary-container text-on-primary rounded-2xl p-6 shadow-lg relative overflow-hidden flex flex-col md:flex-row justify-between items-center">
      {/* decorative background */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary rounded-full opacity-10 blur-3xl" />
      <div className="z-10 space-y-2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="font-headline-md text-headline-md text-on-primary">Your food is being prepared!</h1>
        <p className="font-body-md text-body-md text-on-primary-container">Order #FE9283 from <span className="font-label-bold text-label-bold text-on-primary">Paradise Biryani</span></p>
      </div>
      <div className="z-10 bg-secondary-container/20 rounded-xl px-6 py-4 border border-secondary-container/30 text-center backdrop-blur-sm shadow-[0px_4px_20px_rgba(11,18,32,0.1)]">
        <p className="font-label-bold text-label-bold text-secondary-container mb-1 uppercase tracking-wider text-xs">Estimated Arrival</p>
        <div className="font-display-lg-mobile text-display-lg-mobile text-secondary-fixed">24 Mins</div>
      </div>
    </section>
    {/* Progress Stepper */}
    <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-surface-variant">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[15px] top-[24px] bottom-[24px] w-[2px] bg-surface-variant" />
        {/* Active Line */}
        <div className="absolute left-[15px] top-[24px] h-[33%] w-[2px] bg-secondary transition-all duration-500 ease-in-out" />
        <div className="space-y-6 relative">
          {/* Step 1 */}
          <div className="flex items-start">
            <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-4 border-surface-container-lowest shadow-sm">
              <span className="material-symbols-outlined text-on-secondary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-label-bold text-label-bold text-on-surface">Order Placed</h3>
              <p className="font-body-md text-[13px] text-on-surface-variant mt-1">7:32 PM</p>
            </div>
          </div>
          {/* Step 2 (Active) */}
          <div className="flex items-start">
            <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-4 border-surface-container-lowest shadow-sm animate-pulse">
              <span className="material-symbols-outlined text-on-secondary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>skillet</span>
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-label-bold text-label-bold text-on-surface">Preparing</h3>
              <p className="font-body-md text-[13px] text-on-surface-variant mt-1">Your food is being packed</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start opacity-50">
            <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border-4 border-surface-container-lowest">
              <span className="material-symbols-outlined text-outline text-sm">directions_bike</span>
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-label-bold text-label-bold text-on-surface">Out for Delivery</h3>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start opacity-50">
            <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border-4 border-surface-container-lowest">
              <span className="material-symbols-outlined text-outline text-sm">home</span>
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-label-bold text-label-bold text-on-surface">Delivered</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Map View */}
    <section className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-surface-variant">
      <div className="relative h-64 w-full bg-surface-container">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" data-alt="A clean, modern, stylized UI map interface showing streets of Banjara Hills, Hyderabad. Light mode aesthetic with soft grey roads and subtle pastel green parks. A prominent dotted route line connecting a restaurant to a home location. Minimalist and high-end delivery app feel." data-location="Banjara Hills, Hyderabad" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK5cdUpT2hsFEGOeyl329Y3C8W6pevZVLDfpcarYC3Z7Ph4uK_2Mjm9Os9aCfakS38OzEjUzhxUKZaHpW4Ms60nZyCEbycNSW8efOZyUUk381PUHX_bI38G5tvUxRSrmpzukaWCrglwIIk50h248NQ9KLkvvkueyDg9f4EgQA6ooGIB2MbNw5uB6_2oHJisDVJi6lQALgjxLBQrAfJSbkrTkUfzL8kBPNj36gr5uR5-RzUgHhGinNzySMsIClqAQ2dLRj31Bz3RhY")'}} />
        {/* Overlay Elements on Map (Simulated) */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="bg-primary text-on-primary rounded-full p-2 shadow-lg border-2 border-surface-container-lowest">
            <span className="material-symbols-outlined text-lg">restaurant</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 z-10 flex flex-col items-center">
          <div className="bg-on-surface text-surface-container-lowest rounded-full p-2 shadow-lg border-2 border-surface-container-lowest">
            <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>home</span>
          </div>
        </div>
        {/* Simulated moving bike */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-surface-container-lowest rounded-full p-2 shadow-xl border border-secondary-container">
            <span className="material-symbols-outlined text-secondary text-2xl">directions_bike</span>
          </div>
        </div>
      </div>
      {/* Delivery Partner Info inside Map Card */}
      <div className="p-4 bg-surface-container-lowest border-t border-surface-variant flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-surface-variant bg-surface-container">
            <img className="object-cover w-full h-full" data-alt="A realistic, friendly, high-quality portrait photograph of a young Indian male delivery partner looking professional and reliable. He is wearing a subtle uniform, taken in bright, natural daylight against a clean, soft background. The lighting is warm and trustworthy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdmKaPokHkF7WNLA0awdmWSQSA57gk5ovcnbPsgtEW3YoqxUptERiOZ40tClJ0qv7GdEi08bIQ4AOR8yuLLGwIuGuxzGVrD5VZTg8KYj-oJqypE41vdvb5E0gQ5r7JI3AKmnBRB4OxxEANEVczag9ZVge6dWl3VRI-S4WkDXkLiJfS4rErX0dR8lvBotMeH0ysZ2QAhF7H-QewnBUh-36tWQdfoPdP53QySpglnqp2kMLp0b4q98tluEgvqOD4xoczL2jhz7oZkjE" />
          </div>
          <div>
            <h4 className="font-label-bold text-label-bold text-on-surface">Ramesh Kumar</h4>
            <div className="flex items-center text-on-surface-variant text-sm mt-0.5">
              <span className="material-symbols-outlined text-[16px] text-secondary mr-1" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              <span className="font-label-bold">4.8</span>
              <span className="mx-2 text-outline-variant">•</span>
              <span>TS 09 EQ 1234</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm">
            <span className="material-symbols-outlined text-lg">call</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm shadow-[0_2px_8px_rgba(0,108,73,0.3)] hover:-translate-y-0.5 transition-transform">
            <span className="material-symbols-outlined text-lg">chat</span>
          </button>
        </div>
      </div>
    </section>
    {/* Order Summary (Collapsible) */}
    <section className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-surface-variant overflow-hidden" x-data="{ expanded: false }">
      <button className="w-full p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors group focus:outline-none" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.arrow').classList.toggle('rotate-180');">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">receipt_long</span>
          <h3 className="font-label-bold text-label-bold text-on-surface">Order Summary</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-price-tag text-price-tag text-on-surface">₹543</span>
          <span className="material-symbols-outlined text-outline arrow transition-transform duration-300">expand_more</span>
        </div>
      </button>
      <div className="hidden px-4 pb-4 border-t border-surface-variant pt-4">
        <ul className="space-y-3">
          <li className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
            <span>Hyderabadi Chicken Biryani x1</span>
            <span className="font-label-bold text-label-bold text-on-surface">₹350</span>
          </li>
          <li className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
            <span>Paneer Tikka x1</span>
            <span className="font-label-bold text-label-bold text-on-surface">₹220</span>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t border-surface-variant border-dashed flex justify-between items-center">
          <span className="font-label-bold text-label-bold text-on-surface">Total Amount</span>
          <span className="font-price-tag text-price-tag text-on-surface">₹543</span>
        </div>
      </div>
    </section>
    {/* Help / Footer Actions */}
    <section className="flex flex-col items-center justify-center space-y-4 pt-4 pb-8">
      <a className="flex items-center text-on-surface-variant hover:text-secondary transition-colors text-sm font-label-bold border border-surface-variant rounded-full px-6 py-2 bg-surface-container-lowest shadow-sm hover:shadow-md" href="#">
        <span className="material-symbols-outlined text-[18px] mr-2">help_outline</span>
        Need help?
      </a>
      <button className="text-error font-body-md text-sm hover:underline hover:opacity-80 transition-all opacity-80">
        Cancel Order
      </button>
    </section>
  </main>
  {/* Bottom Navigation (Mobile Only) */}
  <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-2 bg-surface shadow-[0px_-10px_30px_rgba(11,18,32,0.1)] rounded-t-xl">
    <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-colors w-1/4" href="#">
      <span className="material-symbols-outlined mb-1">home</span>
      <span className="font-label-bold text-[10px]">Home</span>
    </a>
    <a className="flex flex-col items-center justify-center text-secondary w-1/4" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: '"FILL" 1'}}>receipt_long</span>
      <span className="font-label-bold text-[10px]">Orders</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-colors w-1/4" href="#">
      <span className="material-symbols-outlined mb-1">local_offer</span>
      <span className="font-label-bold text-[10px]">Offers</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-colors w-1/4" href="#">
      <span className="material-symbols-outlined mb-1">person</span>
      <span className="font-label-bold text-[10px]">Account</span>
    </a>
  </nav>
</div>

    </>
  );
}
