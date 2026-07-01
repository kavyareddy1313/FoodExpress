import React from 'react';

export default function RestaurantSearchResults() {
  return (
    <>
<div>
  {/* TopNavBar (Shared Component) */}
  <nav className="bg-surface dark:bg-surface-container font-body-md text-body-md docked full-width top-0 sticky z-50 shadow-md dark:shadow-none transition-transform duration-200">
    <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto h-20">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <a className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface" href="#">FoodExpress</a>
      </div>
      {/* Navigation Links (Web) */}
      <div className="hidden md:flex items-center gap-8">
        <a className="text-secondary font-bold border-b-2 border-secondary pb-1" href="#">Restaurants</a>
        <a className="text-on-surface-variant hover:text-secondary transition-colors pb-1" href="#">My Orders</a>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4">
        <button aria-label="shopping_cart" className="hidden md:flex text-on-surface-variant hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <a className="text-secondary dark:text-secondary-fixed font-label-bold text-label-bold hidden md:block" href="#">Login</a>
        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-bold text-label-bold shadow-md hover:-translate-y-0.5 transition-transform duration-200 uppercase tracking-wide">
          JOIN NOW
        </button>
      </div>
    </div>
  </nav>
  {/* Secondary Sticky Header: Search & Location */}
  <div className="sticky top-20 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 py-4 shadow-sm">
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search & Location Bar */}
        <div className="flex-1 w-full bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/20 flex items-center h-[56px] px-4 overflow-hidden focus-within:ring-2 focus-within:ring-secondary/50 transition-all">
          {/* Location Selector */}
          <button className="flex items-center gap-2 pr-4 border-r border-outline-variant/50 hover:text-secondary transition-colors flex-shrink-0">
            <span className="material-symbols-outlined text-secondary">location_on</span>
            <span className="font-label-bold text-label-bold truncate max-w-[120px]">Hyderabad</span>
            <span className="material-symbols-outlined text-on-surface-variant">arrow_drop_down</span>
          </button>
          {/* Search Input */}
          <div className="flex-1 flex items-center pl-4 gap-2">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input className="w-full bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70" placeholder="Search for restaurants or dishes" type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main Layout */}
  <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-gutter">
    {/* Left Sidebar Filters (Desktop) */}
    <aside className="hidden md:block w-64 flex-shrink-0 space-y-stack-lg">
      <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Filters</h2>
        <button className="font-label-bold text-label-bold text-secondary hover:underline">Clear All</button>
      </div>
      {/* Cuisines Filter */}
      <div className="space-y-stack-sm">
        <h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Cuisines</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" type="checkbox" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">North Indian</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input className="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" type="checkbox" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Chinese</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input defaultChecked className="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" type="checkbox" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">South Indian</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input className="rounded border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" type="checkbox" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Italian</span>
          </label>
        </div>
        <button className="font-label-bold text-label-bold text-secondary-container-on-secondary pt-2 hover:underline">+ View More</button>
      </div>
      {/* Price Range */}
      <div className="space-y-stack-sm">
        <h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Price</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input className="border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" name="price" type="radio" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Under ₹300</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input defaultChecked className="border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" name="price" type="radio" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">₹300 - ₹600</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input className="border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" name="price" type="radio" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Above ₹600</span>
          </label>
        </div>
      </div>
      {/* Rating */}
      <div className="space-y-stack-sm">
        <h3 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Rating</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input defaultChecked className="border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" name="rating" type="radio" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Rating 4.0+</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input className="border-outline-variant text-secondary focus:ring-secondary w-5 h-5 transition-colors" name="rating" type="radio" />
            <span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Rating 3.5+</span>
          </label>
        </div>
      </div>
    </aside>
    {/* Main Content Area */}
    <div className="flex-1 flex flex-col gap-stack-lg min-w-0">
      {/* Quick Filters (Scrollable) */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 overflow-x-auto no-scrollbar flex gap-3 pb-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container-high transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            <span className="font-label-bold text-label-bold">Filter</span>
          </button>
          <button className="px-4 py-2 rounded-full border border-secondary bg-secondary/10 text-secondary font-label-bold text-label-bold hover:bg-secondary/20 transition-colors whitespace-nowrap">
            Rating 4.0+
          </button>
          <button className="px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container-high transition-colors font-label-bold text-label-bold whitespace-nowrap">
            Pure Veg
          </button>
          <button className="px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container-high transition-colors font-label-bold text-label-bold whitespace-nowrap">
            Offers
          </button>
          <button className="px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container-high transition-colors font-label-bold text-label-bold whitespace-nowrap">
            Under ₹300
          </button>
          <button className="px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container-high transition-colors font-label-bold text-label-bold whitespace-nowrap">
            Fast Delivery
          </button>
        </div>
        {/* Sort Dropdown */}
        <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/50 bg-surface-container-lowest hover:bg-surface-container-high transition-colors whitespace-nowrap flex-shrink-0">
          <span className="font-label-bold text-label-bold text-on-surface-variant">Sort By:</span>
          <span className="font-label-bold text-label-bold text-on-surface">Relevance</span>
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
        </button>
      </div>
      {/* Result Count */}
      <div className="font-headline-sm text-headline-sm text-on-background">
        120 restaurants found near you
      </div>
      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Card 1 */}
        <a className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-outline-variant/10" href="#">
          <div className="relative h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High quality food photography of a lavish Indian Biryani from Bawarchi restaurant, featuring fragrant basmati rice, tender meat pieces, and rich spices served in a traditional copper pot, set on a modern white dining table. The lighting is bright and appetizing, highlighting the steam and texture of the dish within a corporate modern, clean aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw_Kt7a3ISCd9K4Eq0xmr5-WcPcxzWdjyB6E--sBcUKHZjEsw7r7aPsCdBB4mePZQHmmZmSnYjO-UEpVwRSvQjZIwK3gbAbp6sb_HVEJtP0xbNZKBor7W5x7rou8xt6laE2qEpN_Pb8zBegYH6iJnGUPaKgSqLSZ7uVvA6_6QSdB4V35a-_uXGSvO5OnUzxGj5T20nINveLHMXv6GQ2ufW7MuzFVz4Po5jl5qXa-EerFAG4bifPcrcf_IO1V0ZMIrKdt4lsQS4n2Y" />
            <div className="absolute top-4 left-0 bg-primary-container text-on-primary text-label-bold font-label-bold px-3 py-1 rounded-r-full shadow-md uppercase tracking-wider text-xs">
              Promoted
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-surface/90 backdrop-blur-sm text-secondary font-headline-sm text-headline-sm px-3 py-1 rounded-lg shadow-sm">
                50% OFF
                <span className="block text-xs font-label-bold text-on-surface-variant uppercase mt-0.5">Up to ₹100</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-on-background truncate pr-2">Bawarchi</h3>
              <div className="flex items-center gap-1 bg-secondary text-on-secondary px-2 py-0.5 rounded-md font-label-bold text-label-bold shrink-0 shadow-sm">
                <span>4.2</span>
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant truncate mb-4">North Indian, Biryani, Mughlai</p>
            <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-bold text-label-bold text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                30 mins
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                Banjara Hills
              </div>
            </div>
          </div>
        </a>
        {/* Card 2 */}
        <a className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-outline-variant/10" href="#">
          <div className="relative h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Appetizing food photography of a large, crispy golden South Indian dosa from Chutneys restaurant, served on a banana leaf plate alongside multiple small bowls of vibrant, colorful chutneys and rich sambar. The scene is brightly lit with a clean, modern aesthetic, highlighting the crisp texture of the dosa and the freshness of the accompaniments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh6oKEdNFpY4uQizAp1GUN2MMbNwk8t2lmF9mu6OHDEg4Q7_wbbshf2eGw-Ueubp5sq0e4XrlCaYLaplRbjbMyA7NjAHCGYqvKKmZQlwSt7QSiNbcU3YwrEfPgI4T3xs7dN3HCGI9KWXe9KvFW8ISlSxq77HcHoNyGILJcmU_NayQvjFdiGdWu1U9HnfwyVYwB7NNeC7I8OPhE8PucS63OSNi_7_CdGQdCeiATYAL-5yyLynSlkvHSAUcPpcJsMLm2l55Rcm45M4k" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-surface/90 backdrop-blur-sm text-secondary font-headline-sm text-headline-sm px-3 py-1 rounded-lg shadow-sm">
                20% OFF
                <span className="block text-xs font-label-bold text-on-surface-variant uppercase mt-0.5">On all orders</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-on-background truncate pr-2">Chutneys</h3>
              <div className="flex items-center gap-1 bg-secondary text-on-secondary px-2 py-0.5 rounded-md font-label-bold text-label-bold shrink-0 shadow-sm">
                <span>4.5</span>
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant truncate mb-4">South Indian, Tiffins, Beverages</p>
            <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-bold text-label-bold text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                25 mins
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                Jubilee Hills
              </div>
            </div>
          </div>
        </a>
        {/* Card 3 */}
        <a className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-outline-variant/10" href="#">
          <div className="relative h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up food photography of rich, creamy Haleem from Pista House restaurant, garnished with fried onions, fresh mint leaves, and cashew nuts, served in an elegant dark ceramic bowl. The lighting is moody yet bright enough to showcase the rich texture of the dish, fitting a premium corporate modern design language with high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbMArGNgu198vT-VE_SJBl4iQeuG9enCzfSd-02LeGsJDTKWCJzvDhZg75y5WKe83V7pDE8pOwisIMOnSmScsOhQWXav6wswNSJrAKZRzsrty-kSZKTWSHrv4D-QgbGunqPW4X5zTMtNbYM-Y1edWuvpsg_TVKhxmj7G7TGVFOxXGEhD5IJFlHjoJjowu_UkDxeYYqPczXr2BFWwh0nTFe0raaptmPJHZL9XXtcHfqB-nWCNOwTcy0m5aU3ktPkku4FCBtMZSTSHM" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-surface/90 backdrop-blur-sm text-secondary font-headline-sm text-headline-sm px-3 py-1 rounded-lg shadow-sm">
                Free Delivery
                <span className="block text-xs font-label-bold text-on-surface-variant uppercase mt-0.5">Above ₹200</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-on-background truncate pr-2">Pista House</h3>
              <div className="flex items-center gap-1 bg-secondary text-on-secondary px-2 py-0.5 rounded-md font-label-bold text-label-bold shrink-0 shadow-sm">
                <span>4.0</span>
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant truncate mb-4">Mughlai, Desserts, Bakery</p>
            <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-bold text-label-bold text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                40 mins
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                Tolichowki
              </div>
            </div>
          </div>
        </a>
        {/* Card 4 (Duplicate for filler) */}
        <a className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-outline-variant/10" href="#">
          <div className="relative h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Gourmet food photography of a classic Italian wood-fired Margherita pizza with fresh basil leaves, melting mozzarella cheese, and rich tomato sauce, served on a sleek wooden paddle. The setting implies a modern, high-end restaurant environment with bright, clean lighting and a focus on appetizing textures, fitting a corporate modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi1P65veyKk9ZtOjzGisHiJWHGPxDdGS5299ZsBp7tR-6o1_-x40oX9cYO5gysC-k8bi9z_OJioGhBbAMQbxIooX7KksoO9GnbqoEfouqw3KydaEK-cm5cIuAmBKwJZ1DJ4mPZfgyv3hEIibbkFSEVktKiw-dMgnGPOGz9MVJ1ks2C8YXkECzhgAUomPR2hhzWdEFEH-OQ9SWCehp5xthWsjdicrWWpS98UspZ4yMW8a1-b0GQY4b-X-mTDFCp766UanzVnJO_xvg" />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-on-background truncate pr-2">Little Italy</h3>
              <div className="flex items-center gap-1 bg-secondary text-on-secondary px-2 py-0.5 rounded-md font-label-bold text-label-bold shrink-0 shadow-sm">
                <span>4.6</span>
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant truncate mb-4">Italian, Pizzas, Pastas</p>
            <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-bold text-label-bold text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                45 mins
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                Hitech City
              </div>
            </div>
          </div>
        </a>
        {/* Card 5 (Duplicate for filler) */}
        <a className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-outline-variant/10" href="#">
          <div className="relative h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Vibrant food photography of a North Indian Thali featuring multiple small stainless steel bowls filled with colorful curries, dal, paneer, and a central serving of fluffy rice and naan bread. The thali is placed on a pristine white marble table, illuminated by bright, clean light to emphasize a premium, appetizing, and highly organized dining experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4O4-MxjbzCSfAijv2kR_3FWsUM3xPSA1EeRCqFXeB1Dg-F5KE2ApVfOewLXSJABHOSuQPHDDe2_0LlQ4K_hSFsgHWRvyj_KgjdbgPK8n7pKlYQ-sbb7hrOYkpnkR6tAhv_KKwkz82Wx2wgoFpCiZpi3Q29pvitR6ij_I42fVE7Jx3DmWB4P7PeItRE_KLhhEHG1_6dAWpmHG2-suBRDR3m4cw5Hh1LJ7kvci6pAhVx_AKddfWwbZKaOkGUW6IDIk2y-Uf7ZMVAg" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-surface/90 backdrop-blur-sm text-secondary font-headline-sm text-headline-sm px-3 py-1 rounded-lg shadow-sm">
                10% OFF
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-on-background truncate pr-2">Ohri's Jiva</h3>
              <div className="flex items-center gap-1 bg-secondary text-on-secondary px-2 py-0.5 rounded-md font-label-bold text-label-bold shrink-0 shadow-sm">
                <span>4.1</span>
                <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant truncate mb-4">North Indian, Thalis, Pure Veg</p>
            <div className="mt-auto pt-4 border-t border-outline-variant/20 flex items-center justify-between text-on-surface-variant font-label-bold text-label-bold text-sm">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                35 mins
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                Begumpet
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* Load More Button */}
      <div className="flex justify-center mt-stack-lg">
        <button className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-3 rounded-full font-label-bold text-label-bold transition-colors">
          Load More Restaurants
        </button>
      </div>
    </div>
  </main>
  {/* Footer (Shared Component) */}
  <footer className="bg-primary-container dark:bg-tertiary-container font-body-md text-body-md text-on-primary-container dark:text-on-tertiary-container full-width bottom-0 grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg w-full max-w-container-max mx-auto mt-auto">
    <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
      <span className="font-headline-sm text-headline-sm font-extrabold text-on-primary-container">FoodExpress</span>
      <p className="text-on-primary-container opacity-80">© 2024 FoodExpress. Proudly serving Banjara Hills, Hyderabad.</p>
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
  </footer>
</div>

    </>
  );
}
