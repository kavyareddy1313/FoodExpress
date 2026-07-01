import React from 'react';

export default function LoadingResults() {
  return (
    <>
<div>
  {/* TopNavBar (Shared Component) */}
  <header className="bg-surface dark:bg-surface-container font-body-md text-body-md docked full-width top-0 sticky z-50 shadow-md">
    <div className="flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-20">
      {/* Brand */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full shimmer" />
        <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface">FoodExpress</span>
      </div>
      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8">
        <a className="text-secondary font-bold border-b-2 border-secondary pb-1" href="#">Restaurants</a>
        <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">My Orders</a>
      </nav>
      {/* Actions */}
      <div className="flex items-center gap-6">
        <button aria-label="shopping_cart" className="text-on-surface-variant hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <button className="text-on-surface-variant hover:text-secondary transition-colors hidden md:block">Login</button>
        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-bold text-label-bold hover:-translate-y-[2px] transition-transform shadow-md hidden md:block">JOIN NOW</button>
      </div>
    </div>
  </header>
  {/* Main Layout */}
  <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-gutter">
    {/* Sidebar Filters Skeleton */}
    <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-stack-md hidden md:flex"><div className="flex flex-col gap-stack-md">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">Filters</h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded border-outline text-secondary focus:ring-secondary" defaultChecked />
            <span className="text-body-md">Pure Veg</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded border-outline text-secondary focus:ring-secondary" />
            <span className="text-body-md">Fast Delivery</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded border-outline text-secondary focus:ring-secondary" />
            <span className="text-body-md">Great Offers</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="rounded border-outline text-secondary focus:ring-secondary" />
            <span className="text-body-md">Ratings 4.0+</span>
          </label>
        </div>
        <div className="mt-6">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Cuisines</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-1 rounded-full border border-outline text-body-md hover:bg-secondary-container transition-colors">Biryani</button>
            <button className="px-4 py-1 rounded-full border border-outline text-body-md hover:bg-secondary-container transition-colors">Chinese</button>
            <button className="px-4 py-1 rounded-full border border-outline text-body-md hover:bg-secondary-container transition-colors">South Indian</button>
            <button className="px-4 py-1 rounded-full border border-outline text-body-md hover:bg-secondary-container transition-colors">Desserts</button>
          </div>
        </div>
      </div></aside>
    {/* Main Content Area */}
    <section className="flex-grow">
      {/* Search & Filter Bar Skeleton */}
      <div className="relative w-full mb-stack-lg">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input type="text" placeholder="Search for restaurants, cuisines or dishes" className="w-full h-16 pl-12 pr-4 rounded-xl border-none bg-surface-container-low focus:ring-2 focus:ring-secondary text-body-md shadow-sm" />
      </div>
      <div className="flex justify-between items-center mb-6"><h2 className="font-headline-md text-headline-md text-on-surface">120 restaurants found near you</h2>
        <div className="flex items-center gap-2 cursor-pointer text-on-surface-variant hover:text-secondary transition-colors">
          <span className="text-label-bold font-label-bold">Sort by: Relevance</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div></div>
      {/* Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">{/* Card 1: Bawarchi */}
        <div className="bg-surface-lowest rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="relative w-full h-48">
            <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80" alt="Bawarchi Biryani" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-lg">50% OFF UP TO ₹100</span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Bawarchi</h3>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded flex items-center gap-1 text-label-bold">
                <span className>4.2</span>
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md">Biryani, North Indian, Chinese</p>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-label-bold">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className>25-30 mins</span>
              <span className="mx-1">•</span>
              <span className>Banjara Hills</span>
            </div>
          </div>
        </div>
        {/* Card 2: Chutneys */}
        <div className="bg-surface-lowest rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="relative w-full h-48">
            <img src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80" alt="Chutneys South Indian" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-lg">FREE DELIVERY</span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Chutneys</h3>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded flex items-center gap-1 text-label-bold">
                <span className>4.5</span>
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md">South Indian, Tiffins</p>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-label-bold">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className>20-25 mins</span>
              <span className="mx-1">•</span>
              <span className>Jubilee Hills</span>
            </div>
          </div>
        </div>
        {/* Card 3: Pista House */}
        <div className="bg-surface-lowest rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="relative w-full h-48">
            <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80" alt="Pista House Haleem" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-lg">₹125 OFF ABOVE ₹499</span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Pista House</h3>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded flex items-center gap-1 text-label-bold">
                <span className>4.3</span>
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md">Haleem, Biryani, Desserts</p>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-label-bold">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className>35-40 mins</span>
              <span className="mx-1">•</span>
              <span className>Gachibowli</span>
            </div>
          </div>
        </div>
        {/* Card 4: Little Italy */}
        <div className="bg-surface-lowest rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="relative w-full h-48">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" alt="Little Italy Pizza" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-lg">20% OFF</span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Little Italy</h3>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded flex items-center gap-1 text-label-bold">
                <span className>4.1</span>
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md">Italian, Pizza, Pasta</p>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-label-bold">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className>40-45 mins</span>
              <span className="mx-1">•</span>
              <span className>Hitech City</span>
            </div>
          </div>
        </div>
        {/* Card 5: Ohri's Jiva */}
        <div className="bg-surface-lowest rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="relative w-full h-48">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" alt="Ohri's Jiva Buffet" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-lg">BUY 1 GET 1 FREE</span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Ohri's Jiva</h3>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded flex items-center gap-1 text-label-bold">
                <span className>4.4</span>
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md">North Indian, Continental</p>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-label-bold">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className>30-35 mins</span>
              <span className="mx-1">•</span>
              <span className>Begumpet</span>
            </div>
          </div>
        </div>
        {/* Card 6: Paradise Biryani */}
        <div className="bg-surface-lowest rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer group">
          <div className="relative w-full h-48">
            <img src="https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=800&q=80" alt="Paradise Biryani" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-lg">FLAT ₹100 OFF</span>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">Paradise</h3>
              <div className="bg-secondary text-on-secondary px-2 py-0.5 rounded flex items-center gap-1 text-label-bold">
                <span className>4.0</span>
                <span className="material-symbols-outlined text-[14px] fill-1">star</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md">Biryani, Kebabs, Desserts</p>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-label-bold">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className>25-30 mins</span>
              <span className="mx-1">•</span>
              <span className>Secunderabad</span>
            </div>
          </div>
        </div></div>
    </section>
  </main>
  {/* Footer (Shared Component) */}
  <footer className="bg-primary-container dark:bg-tertiary-container text-on-primary-container dark:text-on-tertiary-container font-body-md text-body-md full-width bottom-0 mt-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg w-full max-w-container-max mx-auto">
      <div className="flex flex-col gap-4">
        <span className="font-headline-sm text-headline-sm font-extrabold text-on-primary-container">FoodExpress</span>
        <p className>© 2024 FoodExpress. Proudly serving Banjara Hills, Hyderabad.</p>
      </div>
      <div className="flex flex-col gap-2">
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Company</a>
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Support</a>
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">App Stores</a>
      </div>
      <div className="flex flex-col gap-2">
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Facebook</a>
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Instagram</a>
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Twitter</a>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}
