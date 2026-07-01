import React from 'react';

export default function RestaurantDetail() {
  return (
    <>
<div>
  {/* Top Navigation (Visible on Desktop) */}
  <nav className="hidden md:flex bg-surface text-secondary font-body-md shadow-md docked full-width top-0 sticky z-50 flex justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto h-20">
    <div className="flex items-center gap-6">
      <a className="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2" href="#">
        <img alt="FoodExpress Logo" className="h-10" src="https://lh3.googleusercontent.com/aida/AP1WRLur-HFo1Fx0xQ5wmpGjonI7vpS3nVg565R-6h6a9hdktx0MFMBPIA0W2hDaMGkSMcRJlFri4cIVNbk6IEqmohDWgimlipxUqA0ZxDc4pSQvXcefOXxA9RGFYOMPmnr6D69fgnefCJGxrAUPmQmEBPZ7y2ARu8_0Tao9iF8Y81Jb68GRA4MxB3cSiVZ5GwZsHrntplyo4cCG3ShnWRUjuHl_i1AMoLVkVssOo0nFVpQlcUDVtqU15BkdJac" />
      </a>
      {/* Search Bar */}
      <div className="relative ml-8 w-96 hidden lg:block">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{fontVariationSettings: '"FILL" 0'}}>search</span>
        <input className="w-full bg-surface-container-high rounded-full py-2 pl-10 pr-4 text-body-md text-on-surface border-none focus:ring-2 focus:ring-secondary focus:bg-surface outline-none transition-colors" placeholder="Search in Paradise Biryani..." type="text" />
      </div>
    </div>
    <div className="flex items-center gap-gutter">
      <div className="flex items-center gap-6">
        <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-bold" href="#">Restaurants</a>
        <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-bold" href="#">My Orders</a>
      </div>
      <div className="flex items-center gap-4 border-l border-outline-variant pl-4">
        <a className="text-on-surface font-label-bold hover:text-secondary transition-colors" href="#">Login</a>
        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-bold hover:shadow-lg transition-all transform hover:-translate-y-0.5">JOIN NOW</button>
        <button className="text-on-surface hover:text-secondary transition-colors p-2 hover:bg-surface-container-high rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>shopping_cart</span>
        </button>
      </div>
    </div>
  </nav>
  {/* Mobile Header */}
  <header className="md:hidden fixed top-0 w-full z-40 bg-surface shadow-md">
    <div className="flex items-center justify-between px-4 h-16">
      <button className="text-on-surface p-2 rounded-full bg-surface-container-high">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>arrow_back</span>
      </button>
      <div className="font-label-bold truncate max-w-[200px]">Paradise Biryani</div>
      <button className="text-on-surface p-2 rounded-full bg-surface-container-high">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 0'}}>favorite_border</span>
      </button>
    </div>
  </header>
  <main className="w-full max-w-container-max mx-auto md:px-margin-desktop md:pt-8 md:pb-16 mt-0 md:mt-0">
    {/* Hero Banner Area */}
    <div className="relative w-full h-[280px] md:h-[400px] md:rounded-3xl overflow-hidden shadow-lg z-10 group">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A high-quality, appetizing flat lay photograph of a large, steaming pot of authentic Hyderabadi Dum Biryani. The biryani is richly spiced with saffron, garnished with fried onions, fresh mint leaves, and a perfectly cooked chicken leg piece visible on top. Served in a traditional copper handi, placed on a dark rustic wooden table. The lighting is warm and dramatic, highlighting the steam rising from the hot food, creating a mouth-watering and premium dining aesthetic perfect for a food delivery platform hero image." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfmyqqEmE-bpxTVNEEjBvfz-GfYygI9IjKBXZ5lSomb__q1NFOAignAbv6eidKfUKftAJdFZZZc5E6BvfQtiI7rSaamo6MobTACVpR2sMHy6GMeb6_D9W6w6fXFGiygkyBto4k_D6bR8NCmubiUjpPjyRC8qqZOUoCFJ1J4vFpTdGWpgkytsDVPB_DqoL5OwL2sItB7LsMmVjyCBWpOM0mkToSVPWH8h9bb-TUroECqyC3_u6gB5u0kvdYIi04zkIuddSGswL8dpc")'}} />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent" />
      {/* Desktop Action Buttons (Floating) */}
      <div className="hidden md:flex absolute top-6 right-6 gap-4">
        <button className="bg-surface/90 backdrop-blur-sm text-on-surface p-3 rounded-full hover:bg-surface transition-colors shadow-md group/btn">
          <span className="material-symbols-outlined transition-transform group-hover/btn:scale-110" style={{fontVariationSettings: '"FILL" 0'}}>share</span>
        </button>
        <button className="bg-surface/90 backdrop-blur-sm text-on-surface p-3 rounded-full hover:bg-surface transition-colors shadow-md group/btn">
          <span className="material-symbols-outlined text-on-surface transition-transform group-hover/btn:scale-110" style={{fontVariationSettings: '"FILL" 0'}}>favorite_border</span>
        </button>
      </div>
    </div>
    {/* Restaurant Info Card (Overlapping) */}
    <div className="relative -mt-16 md:-mt-24 z-20 px-4 md:px-0 max-w-4xl mx-auto mb-8">
      <div className="bg-surface rounded-2xl md:rounded-[24px] shadow-[0px_10px_30px_rgba(11,18,32,0.1)] p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 border border-outline-variant/30">
        <div className="flex-1">
          <h1 className="font-headline-md md:font-display-lg text-headline-md md:text-display-lg font-bold text-primary-container mb-2">Paradise Biryani - Banjara Hills</h1>
          <p className="text-on-surface-variant font-body-md mb-4 flex items-center gap-2">
            <span>Biryani, North Indian, Kebabs</span>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm font-label-bold">
            <div className="flex items-center gap-1.5 bg-secondary-container/20 text-secondary px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
              <span>4.3 (5k+ ratings)</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '"FILL" 0'}}>schedule</span>
              <span>30-35 mins</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '"FILL" 0'}}>payments</span>
              <span>₹400 for two</span>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-center justify-between md:justify-start gap-4 md:border-l border-outline-variant/50 md:pl-8 pt-4 md:pt-0 border-t md:border-t-0">
          {/* Veg / Non-Veg Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-on-surface-variant font-label-bold text-xs uppercase">Veg Only</span>
            <div className="w-10 h-5 bg-surface-container-high rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute left-1 top-1 w-3 h-3 bg-outline rounded-full transition-transform" />
            </div>
          </div>
          <div className="flex gap-2">
            {/* Veg Indicator */}
            <div className="w-5 h-5 border-2 border-secondary flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-secondary rounded-full" />
            </div>
            {/* Non-Veg Indicator */}
            <div className="w-5 h-5 border-2 border-error flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-error rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Offers Section */}
    <div className="px-4 md:px-0 max-w-6xl mx-auto mb-12">
      <h2 className="font-headline-sm text-headline-sm font-bold text-primary-container mb-4">Available Offers</h2>
      <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        {/* Offer Card 1 */}
        <div className="flex-none w-[280px] bg-secondary-container/10 border-2 border-dashed border-secondary/30 rounded-xl p-4 flex items-start gap-3 hover:bg-secondary-container/20 transition-colors cursor-pointer">
          <div className="bg-secondary/10 p-2 rounded-full text-secondary mt-1">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>local_offer</span>
          </div>
          <div>
            <div className="font-label-bold text-primary-container text-sm">50% OFF up to ₹100</div>
            <div className="text-on-surface-variant text-xs mt-1">USE WELCOME50 | Above ₹199</div>
          </div>
        </div>
        {/* Offer Card 2 */}
        <div className="flex-none w-[280px] bg-surface-container-high border-2 border-dashed border-outline-variant rounded-xl p-4 flex items-start gap-3 hover:bg-surface-container-highest transition-colors cursor-pointer">
          <div className="bg-primary-container/10 p-2 rounded-full text-primary-container mt-1">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>delivery_dining</span>
          </div>
          <div>
            <div className="font-label-bold text-primary-container text-sm">Free Delivery</div>
            <div className="text-on-surface-variant text-xs mt-1">On orders above ₹199</div>
          </div>
        </div>
        {/* Offer Card 3 */}
        <div className="flex-none w-[280px] bg-surface-container-high border-2 border-dashed border-outline-variant rounded-xl p-4 flex items-start gap-3 hover:bg-surface-container-highest transition-colors cursor-pointer">
          <div className="bg-primary-container/10 p-2 rounded-full text-primary-container mt-1">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 1'}}>redeem</span>
          </div>
          <div>
            <div className="font-label-bold text-primary-container text-sm">Flat ₹150 OFF</div>
            <div className="text-on-surface-variant text-xs mt-1">USE HDFC150 | Above ₹500</div>
          </div>
        </div>
      </div>
    </div>
    {/* Menu Layout */}
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4 md:px-0">
      {/* Left Sidebar (Sticky Category Nav) */}
      <aside className="md:w-64 flex-none hidden md:block">
        <div className="sticky top-28 bg-surface rounded-2xl shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-outline-variant/30 overflow-hidden">
          <div className="p-4 border-b border-outline-variant/30">
            <h3 className="font-label-bold text-on-surface uppercase tracking-wider">Menu</h3>
          </div>
          <nav className="flex flex-col">
            <a className="px-6 py-4 border-r-4 border-transparent hover:bg-surface-container-high text-on-surface-variant hover:text-primary-container font-label-bold transition-colors" href="#category-starters">Starters</a>
            <a className="px-6 py-4 border-r-4 border-secondary bg-surface-container-low text-secondary font-label-bold transition-colors" href="#category-biryani">Biryani</a>
            <a className="px-6 py-4 border-r-4 border-transparent hover:bg-surface-container-high text-on-surface-variant hover:text-primary-container font-label-bold transition-colors" href="#category-main">Main Course</a>
            <a className="px-6 py-4 border-r-4 border-transparent hover:bg-surface-container-high text-on-surface-variant hover:text-primary-container font-label-bold transition-colors" href="#category-desserts">Desserts</a>
            <a className="px-6 py-4 border-r-4 border-transparent hover:bg-surface-container-high text-on-surface-variant hover:text-primary-container font-label-bold transition-colors" href="#category-beverages">Beverages</a>
          </nav>
        </div>
      </aside>
      {/* Mobile Category Scroll (Sticky) */}
      <div className="md:hidden sticky top-16 bg-surface z-30 -mx-4 px-4 py-3 shadow-sm border-b border-outline-variant/30 overflow-x-auto hide-scrollbar flex gap-3">
        <button className="flex-none px-4 py-2 bg-surface-container-high rounded-full font-label-bold text-sm text-on-surface-variant">Starters</button>
        <button className="flex-none px-4 py-2 bg-secondary text-on-secondary rounded-full font-label-bold text-sm shadow-md">Biryani</button>
        <button className="flex-none px-4 py-2 bg-surface-container-high rounded-full font-label-bold text-sm text-on-surface-variant">Main Course</button>
        <button className="flex-none px-4 py-2 bg-surface-container-high rounded-full font-label-bold text-sm text-on-surface-variant">Desserts</button>
      </div>
      {/* Right Content (Menu Items) */}
      <div className="flex-1 pb-24">
        {/* Category Section: Biryani */}
        <div className="mb-12 scroll-mt-32" id="category-biryani">
          <h3 className="font-headline-sm text-headline-sm font-bold text-primary-container mb-6 flex items-center gap-2">
            Biryani
            <span className="text-sm font-normal text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md">6 Items</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Menu Item Card 1 */}
            <div className="bg-surface rounded-2xl p-4 shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex gap-4 group">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Non-Veg Indicator */}
                  <div className="w-4 h-4 border-2 border-error flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-error rounded-full" />
                  </div>
                  <h4 className="font-label-bold text-[16px] text-primary-container mb-1">Hyderabadi Chicken Biryani</h4>
                  <div className="font-price-tag text-price-tag text-on-surface mb-2">₹350</div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">Authentic Dum Biryani cooked with fragrant basmati rice, tender chicken pieces, and secret spices.</p>
                </div>
              </div>
              <div className="relative w-32 h-32 flex-none">
                <div className="w-full h-full rounded-xl bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-300" data-alt="A close-up, appetizing shot of a serving of Hyderabadi Chicken Dum Biryani in a dark rustic bowl. The biryani rice is distinct and fluffy, with a rich saffron color. Pieces of tender chicken are visible, garnished with fresh cilantro and crispy fried onions. The lighting is warm and directional, emphasizing the texture and steam rising from the dish, set against a blurred dark background. Studio food photography style." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4JAhc_CQ2gp2nP5JSSSvqdUAcpxXB7T0ZLzfD3UnxoivEU3NAHvwMxTvIcqL2E27fw1rzdsTjXWZv18_491eQYhlF4zyRanRS2c_LEIYQOuiAli2FjfvYT3oPszN-roa2u2RaYtqC_jm7qSXFHSwtEBEXf-iT_FsAAOfELP4eZgomOKGJdq1nocgbDm8IJVR4iBHYJUfrhBswGdA7QR72pOxoO8vaJh7xZntt8s6E-bPSG3xtsmfdQw2UfoqJXQK2hvZq-wmiClI")'}} />
                <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-surface text-secondary border border-outline-variant/30 font-label-bold px-6 py-1.5 rounded-lg shadow-md hover:bg-secondary-container/10 transition-colors">
                  ADD
                </button>
              </div>
            </div>
            {/* Menu Item Card 2 */}
            <div className="bg-surface rounded-2xl p-4 shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex gap-4 group">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Non-Veg Indicator */}
                  <div className="w-4 h-4 border-2 border-error flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-error rounded-full" />
                  </div>
                  <h4 className="font-label-bold text-[16px] text-primary-container mb-1">Mutton Dum Biryani</h4>
                  <div className="font-price-tag text-price-tag text-on-surface mb-2">₹450</div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">Slow-cooked mutton layered with basmati rice, saffron, and aromatic spices in a sealed handi.</p>
                </div>
              </div>
              <div className="relative w-32 h-32 flex-none bg-surface-container-high rounded-xl border border-dashed border-outline-variant flex items-center justify-center flex-col gap-2">
                {/* Example of item without image, showing ADD button positioned differently */}
                <span className="material-symbols-outlined text-outline text-3xl" style={{fontVariationSettings: '"FILL" 0'}}>restaurant</span>
                <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-surface text-secondary border border-outline-variant/30 font-label-bold px-6 py-1.5 rounded-lg shadow-md hover:bg-secondary-container/10 transition-colors">
                  ADD
                </button>
              </div>
            </div>
            {/* Menu Item Card 3 */}
            <div className="bg-surface rounded-2xl p-4 shadow-[0px_4px_20px_rgba(11,18,32,0.05)] border border-outline-variant/20 hover:border-outline-variant/50 transition-colors flex gap-4 group">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Veg Indicator */}
                  <div className="w-4 h-4 border-2 border-secondary flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                  </div>
                  <h4 className="font-label-bold text-[16px] text-primary-container mb-1">Paneer Tikka Biryani</h4>
                  <div className="font-price-tag text-price-tag text-on-surface mb-2">₹320</div>
                  <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">Smoky paneer tikka tossed in spicy masala layered with long grain basmati rice.</p>
                </div>
              </div>
              <div className="relative w-32 h-32 flex-none">
                <div className="w-full h-full rounded-xl bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-300" data-alt="A vibrant shot of Veg Paneer Tikka Biryani served on a contemporary white plate. Cubes of grilled paneer with charred edges are mixed with saffron-infused basmati rice, green peas, and cashews. Garnished with fresh mint. The lighting is bright and clean (light mode aesthetic), highlighting the fresh colors of the ingredients. Professional food styling." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1svVbN4CTzAt3ssgNe22MSmvTfcQiLS3wbKSAZa0Pu5vVzKPUJgCHZ9c8lsF4cQbYZCdh4DvJEdhneN8FAygVHno0EPMck5cTjUeJrx1O8_OYBuuYcVG4awlh8ZMeHX9n9kBchGHYjryjwxh4jd3brC_OTWPTlrgMIeWqcvSH6eHigKsbwigPaGqWuSzrWfuOqQxz57UQdHiSZ7KKHoV9nyjdmHnNt1LxC40kxwy_2eW-FXuOZrEb5ed_rKA7hQ0F0uMa0A9o7pw")'}} />
                <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-surface text-secondary border border-outline-variant/30 font-label-bold px-6 py-1.5 rounded-lg shadow-md hover:bg-secondary-container/10 transition-colors">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* Sticky Bottom Cart Bar */}
  <div className="fixed bottom-0 left-0 w-full z-50 transform translate-y-0 transition-transform duration-300">
    <div className="bg-primary-container text-on-primary-container shadow-[0px_-10px_30px_rgba(11,18,32,0.15)] md:px-margin-desktop py-4 px-4 w-full h-[80px]">
      <div className="max-w-6xl mx-auto h-full flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm font-body-md text-tertiary-fixed-dim">1 Item added</span>
          <span className="font-price-tag text-price-tag text-surface-container-lowest flex items-center gap-2">
            ₹350
            <span className="text-xs font-normal text-on-primary-container/80 bg-inverse-surface px-2 py-0.5 rounded">plus taxes</span>
          </span>
        </div>
        <button className="bg-secondary text-on-secondary px-8 py-3 rounded-xl font-label-bold flex items-center gap-2 hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-colors shadow-lg shadow-secondary/20">
          View Cart
          <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '"FILL" 0'}}>arrow_forward</span>
        </button>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="bg-primary-container dark:bg-tertiary-container text-on-primary-container dark:text-on-tertiary-container font-body-md text-body-md full-width bottom-0 grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg w-full max-w-container-max mx-auto pb-32 md:pb-12 mt-12">
    <div className="col-span-1 md:col-span-1">
      <div className="font-headline-sm text-headline-sm font-extrabold text-on-primary-container mb-4">FoodExpress</div>
      <p className="opacity-80">Delivering happiness to your doorstep.</p>
    </div>
    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="flex flex-col gap-2">
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Company</a>
      </div>
      <div className="flex flex-col gap-2">
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Support</a>
      </div>
      <div className="flex flex-col gap-2">
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">App Stores</a>
      </div>
      <div className="flex flex-col gap-2">
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Facebook</a>
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Instagram</a>
        <a className="text-on-primary-container opacity-80 hover:opacity-100 hover:underline transition-all" href="#">Twitter</a>
      </div>
    </div>
    <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-on-primary-container/20 text-center opacity-60 text-sm">
      © 2024 FoodExpress. Proudly serving Banjara Hills, Hyderabad.
    </div>
  </footer>
</div>

    </>
  );
}
