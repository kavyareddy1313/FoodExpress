import React from 'react';

export default function NoResults() {
  return (
    <>
<div>
  {/* TopNavBar (Shared Component) */}
  <nav className="bg-surface dark:bg-surface-container font-body-md text-body-md docked full-width top-0 sticky z-50 shadow-md dark:shadow-none flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto h-20">
    <div className="flex items-center gap-stack-lg">
      <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface cursor-pointer">FoodExpress</span>
      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-stack-md">
        <li><a className="text-secondary font-bold border-b-2 border-secondary pb-1 block" href="#">Restaurants</a></li>
        <li><a className="text-on-surface-variant hover:text-secondary transition-colors block" href="#">My Orders</a></li>
      </ul>
    </div>
    <div className="flex items-center gap-stack-md">
      {/* Search Bar (Placeholder for Right Search) */}
      <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant focus-within:border-secondary transition-colors">
        <span className="material-symbols-outlined text-on-surface-variant mr-2" style={{fontVariationSettings: '"FILL" 0'}}>search</span>
        <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface w-48 outline-none" placeholder="Search..." type="text" defaultValue="Sushi" />
      </div>
      {/* Trailing Actions */}
      <button className="hidden md:block text-secondary dark:text-secondary-fixed font-label-bold text-label-bold px-4 py-2 hover:bg-surface-container-high dark:hover:bg-inverse-surface rounded-lg scale-95 transition-transform duration-200">Login</button>
      <button className="bg-secondary text-on-secondary font-label-bold text-label-bold px-6 py-2 rounded-full shadow-md hover:-translate-y-[2px] transition-transform scale-95 duration-200 uppercase tracking-wide">JOIN NOW</button>
      <button className="text-on-surface-variant hover:text-secondary transition-colors p-2 hover:bg-surface-container-high rounded-full relative">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>shopping_cart</span>
      </button>
    </div>
  </nav>
  {/* Contextual Filter Row (Sticky below Nav) */}
  <div className="sticky top-20 z-40 bg-surface-bright/90 backdrop-blur-md border-b border-surface-container-high py-4 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
    <div className="flex items-center gap-stack-sm overflow-x-auto pb-2 scrollbar-hide">
      <button className="flex items-center gap-1 bg-surface-container-high px-4 py-2 rounded-full font-label-bold text-label-bold text-on-surface whitespace-nowrap hover:bg-surface-variant transition-colors">
        <span className="material-symbols-outlined text-[18px]">tune</span> Filters
      </button>
      <button className="flex items-center gap-1 bg-surface-container border border-outline-variant px-4 py-2 rounded-full font-label-bold text-label-bold text-on-surface whitespace-nowrap hover:bg-surface-variant transition-colors">
        Rating 4.0+
      </button>
      <button className="flex items-center gap-1 bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-label-bold text-label-bold whitespace-nowrap hover:opacity-90 transition-opacity">
        Cuisine: Sushi <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
      <button className="flex items-center gap-1 bg-surface-container border border-outline-variant px-4 py-2 rounded-full font-label-bold text-label-bold text-on-surface whitespace-nowrap hover:bg-surface-variant transition-colors">
        Delivery Time
      </button>
    </div>
  </div>
  {/* Main Content: Empty State */}
  <main className="flex-grow flex flex-col items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
    <div className="max-w-lg w-full text-center flex flex-col items-center">
      {/* Illustration Container */}
      <div className="relative w-64 h-64 mb-stack-lg animate-fade-in-up">
        {/* Abstract decorative background shapes */}
        <div className="absolute inset-0 bg-surface-container rounded-full opacity-50 scale-110 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary-container rounded-full opacity-30 mix-blend-multiply blur-2xl -z-10" />
        {/* Main Illustration Image */}
        <img className="w-full h-full object-contain" data-alt="A clean, flat, modern corporate illustration in light mode. A friendly character with a magnifying glass is peering into an empty, oversized brown paper food delivery bag. The color palette features a bright white background, deep navy outlines, and vibrant emerald green accents. The style is approachable, high-quality, and minimalist, suited for a premium food delivery app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1pFCUlM1O6ucFeAEs4zFgk_Gqm8c1eK_rPDoZ3UR0hg3hW8rySUNff_Pjl81p30pYYyKu3C-lwqABwS0mLoF3o3QZQMTfC166G0zU-Za4lBbwfVEVWe67BvsKve9VNpn_l9xPmj33tvOr1c1piW5ncJT5zDzWer862YYZQ1krJEnEm7nn_X4w3yw6QbhIjvONzVfWcwlTR0FnS2PTFjtLAJUjmz0tKEH7cj4rhyyo5TuRHDJPIGNcne4XKRRW8XBwbrHpOprqZCE" />
        {/* Floating decorative elements */}
        <div className="absolute top-4 -right-4 bg-surface shadow-md rounded-full p-2 glass-panel animate-bounce" style={{animationDelay: '0.2s'}}>
          <span className="material-symbols-outlined text-outline">search_off</span>
        </div>
      </div>
      {/* Text Content */}
      <h1 className="font-headline-md text-headline-md md:font-display-lg md:text-display-lg text-primary-container mb-stack-sm px-4">
        No results found for 'Sushi' in Hyderabad
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-md mx-auto">
        Try adjusting your filters, double-checking your spelling, or searching for a different cuisine.
      </p>
      {/* Action Button */}
      <button className="bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded-full shadow-md hover:-translate-y-[2px] transition-all duration-300 flex items-center gap-2 group hover:shadow-lg">
        <span className="material-symbols-outlined transition-transform group-hover:rotate-180 duration-500">filter_list_off</span>
        Clear All Filters
      </button>
      {/* Helpful Suggestions */}
      <div className="mt-section-gap w-full text-left">
        <h3 className="font-label-bold text-label-bold text-on-surface mb-stack-sm">Popular Searches in Hyderabad:</h3>
        <div className="flex flex-wrap gap-stack-sm justify-center md:justify-start">
          <span className="px-3 py-1 bg-surface-container rounded-md text-body-md font-body-md text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors border border-outline-variant">Biryani</span>
          <span className="px-3 py-1 bg-surface-container rounded-md text-body-md font-body-md text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors border border-outline-variant">Pizza</span>
          <span className="px-3 py-1 bg-surface-container rounded-md text-body-md font-body-md text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors border border-outline-variant">Dosa</span>
          <span className="px-3 py-1 bg-surface-container rounded-md text-body-md font-body-md text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors border border-outline-variant">Burgers</span>
        </div>
      </div>
    </div>
  </main>
  {/* Footer (Shared Component) */}
  <footer className="bg-primary-container dark:bg-tertiary-container font-body-md text-body-md full-width bottom-0 bg-primary-container flat no shadows grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg w-full max-w-container-max mx-auto mt-auto">
    <div className="col-span-1 md:col-span-1">
      <h2 className="font-headline-sm text-headline-sm font-extrabold text-on-primary-container mb-stack-sm">FoodExpress</h2>
      <p className="text-on-primary-container opacity-80 text-sm">© 2024 FoodExpress. Proudly serving Banjara Hills, Hyderabad.</p>
    </div>
    <div className="col-span-1">
      <h3 className="font-label-bold text-label-bold text-on-primary-container mb-stack-sm">Links</h3>
      <ul className="space-y-stack-sm">
        <li><a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Company</a></li>
        <li><a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Support</a></li>
        <li><a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">App Stores</a></li>
      </ul>
    </div>
    <div className="col-span-1 md:col-span-2 flex justify-start md:justify-end gap-stack-md items-start mt-stack-md md:mt-0">
      <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Facebook</a>
      <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Instagram</a>
      <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Twitter</a>
    </div>
  </footer>
  <style dangerouslySetInnerHTML={{__html: "\n        @keyframes fadeInUp {\n            from { opacity: 0; transform: translateY(20px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n        .animate-fade-in-up {\n            animation: fadeInUp 0.6s ease-out forwards;\n        }\n    " }} />
</div>

    </>
  );
}
