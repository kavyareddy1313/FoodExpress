import React from 'react';

export default function AdminDashboard() {
  return (
    <>
<div>
  {/* SideNavBar */}
  <aside className="fixed left-0 top-0 h-full w-sidebar-width bg-surface-container-low border-r border-outline-variant flex flex-col py-6 px-4 z-50">
    <div className="flex items-center gap-3 mb-10 px-2">
      <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
        <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
      </div>
      <div>
        <h1 className="font-display-lg text-headline-md font-bold text-primary leading-none">FoodExpress</h1>
        <p className="text-secondary text-[10px] uppercase tracking-widest mt-1">Admin Terminal</p>
      </div>
    </div>
    <nav className="flex-1 space-y-1">
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary font-bold border-l-2 border-primary bg-primary/10 transition-all" href="#">
        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
        <span className="font-body-md text-body-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
        <span className="font-body-md text-body-md">Orders</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
        <span className="font-body-md text-body-md">Menu Management</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="storefront">storefront</span>
        <span className="font-body-md text-body-md">Vendors</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
        <span className="font-body-md text-body-md">Logistics</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
        <span className="font-body-md text-body-md">Analytics</span>
      </a>
    </nav>
    <div className="mt-auto pt-6 border-t border-outline-variant space-y-1">
      <button className="w-full mb-4 bg-primary text-on-primary py-2.5 rounded-lg font-bold text-body-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[18px]" data-icon="confirmation_number">confirmation_number</span>
        Support Ticket
      </button>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-variant transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="settings">settings</span>
        <span className="font-body-md text-body-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-tertiary hover:bg-error-container/50 transition-colors duration-200" href="#">
        <span className="material-symbols-outlined" data-icon="logout">logout</span>
        <span className="font-body-md text-body-md">Logout</span>
      </a>
    </div>
  </aside>
  {/* Main Content Area */}
  <main className="flex-1 ml-[260px] flex flex-col h-screen overflow-hidden">
    {/* TopNavBar */}
    <header className="h-16 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between px-container-padding sticky top-0 z-40">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-primary/50 rounded-lg bg-surface-container">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
          <input className="w-full bg-transparent border-none rounded-lg py-2 pl-10 text-body-md text-on-surface focus:ring-0" placeholder="Search orders, restaurants, or logistics..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-6">
        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold text-body-md hover:opacity-90 transition-all">
          Create Order
        </button>
        <div className="flex gap-2">
          <button className="p-2 text-secondary hover:text-primary transition-all relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
          <button className="p-2 text-secondary hover:text-primary transition-all">
            <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
          </button>
        </div>
        <div className="h-8 w-[1px] bg-outline-variant mx-2" />
        <div className="flex items-center gap-3">
          <div className="text-right hidden lg:block">
            <p className="text-body-md font-bold text-on-surface leading-none">Admin User</p>
            <p className="text-body-sm text-secondary">Hyderabad Terminal</p>
          </div>
          <img className="w-10 h-10 rounded-full border-2 border-primary/20" data-alt="A professional headshot of a corporate logistics administrator in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhxaX8E_73cykEw-0G29RmUF8jG-KCAfUSRxqN7xZxZKqxPuXodu5ocTRR3HZ-ZajEUW0nBx4_Ge6zS3_0TV7Vqo1EOMaATHkfHPAS36OMLiTstT7fMeXid00naCt8PuHzCJVpPkTHCqWVeEcW8ZFIUEM8tNJjvpfbxRte1RLRfc-7qYRw26ycTwEMpk2OyIToY5dua2NAm-K2cQjC-ztm2kiZ1sWfJ5pTG9LJuC_xNT-YFeNNpSNfaicisYyVloz-JfoWNPiZQPM" />
        </div>
      </div>
    </header>
    {/* Scrollable Dashboard Content */}
    <div className="flex-1 overflow-y-auto custom-scrollbar p-container-padding bg-background relative">
      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-card-gap mb-8 relative z-10">
        {/* Stat Card 1 */}
        <div className="glass-card p-5 rounded-xl border-l-4 border-l-primary">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
            </div>
            <span className="flex items-center text-primary text-body-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
              12%
            </span>
          </div>
          <p className="text-secondary text-label-caps uppercase">Total Orders Today</p>
          <h3 className="font-display-lg text-display-lg mt-1 text-on-surface">1,245</h3>
        </div>
        {/* Stat Card 2 */}
        <div className="glass-card p-5 rounded-xl border-l-4 border-l-primary">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <span className="material-symbols-outlined" data-icon="payments">payments</span>
            </div>
            <span className="flex items-center text-primary text-body-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
              8%
            </span>
          </div>
          <p className="text-secondary text-label-caps uppercase">Revenue Today</p>
          <h3 className="font-display-lg text-display-lg mt-1 text-on-surface">₹4,52,000</h3>
        </div>
        {/* Stat Card 3 */}
        <div className="glass-card p-5 rounded-xl border-l-4 border-l-tertiary">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
              <span className="material-symbols-outlined" data-icon="store">store</span>
            </div>
            <span className="text-secondary text-body-sm">Live Now</span>
          </div>
          <p className="text-secondary text-label-caps uppercase">Active Restaurants</p>
          <h3 className="font-display-lg text-display-lg mt-1 text-on-surface">850</h3>
        </div>
        {/* Stat Card 4 */}
        <div className="glass-card p-5 rounded-xl border-l-4 border-l-error">
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-error/10 rounded-lg text-error">
              <span className="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
            </div>
            <span className="text-error text-body-sm font-bold">Action Needed</span>
          </div>
          <p className="text-secondary text-label-caps uppercase">Pending Orders</p>
          <h3 className="font-display-lg text-display-lg mt-1 text-on-surface">42</h3>
        </div>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-card-gap mb-8 relative z-10">
        {/* Line Chart Card */}
        <div className="lg:col-span-2 glass-card p-6 rounded-xl h-96 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-headline-md text-title-sm text-on-surface">Orders This Week</h3>
              <p className="text-body-sm text-secondary">Daily performance tracking across Hyderabad</p>
            </div>
            <select className="bg-surface-container border border-outline-variant rounded-lg text-body-sm text-on-surface-variant focus:ring-1 focus:ring-primary py-1 pr-8">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex-1 w-full relative group">
            <div className="absolute inset-0 flex items-end justify-between px-2 pb-6">
              <div className="w-[10%] bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm h-[40%]" title="Mon: 850" />
              <div className="w-[10%] bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm h-[65%]" title="Tue: 1100" />
              <div className="w-[10%] bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm h-[55%]" title="Wed: 950" />
              <div className="w-[10%] bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm h-[85%]" title="Thu: 1400" />
              <div className="w-[10%] bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm h-[70%]" title="Fri: 1200" />
              <div className="w-[10%] bg-primary hover:bg-primary/90 transition-all rounded-t-sm h-[95%]" title="Sat (Today): 1650" />
              <div className="w-[10%] bg-primary/10 hover:bg-primary/20 transition-all rounded-t-sm h-[30%]" title="Sun: TBA" />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-body-sm text-secondary/60 font-data-mono uppercase pt-2 border-t border-outline-variant/30">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path className="text-primary/30" d="M0,70 L15,50 L30,60 L45,20 L60,40 L75,10 L90,80" fill="none" stroke="currentColor" strokeWidth={1} />
            </svg>
          </div>
        </div>
        {/* Donut Chart Card */}
        <div className="glass-card p-6 rounded-xl h-96 flex flex-col">
          <h3 className="font-headline-md text-title-sm text-on-surface mb-6">Orders by Cuisine</h3>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="relative w-48 h-48 rounded-full border-[16px] border-surface-container flex items-center justify-center">
              <div className="absolute inset-[-16px] rounded-full border-[16px] border-primary" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 60%)'}} />
              <div className="text-center">
                <p className="text-display-lg font-display-lg leading-none text-on-surface">42%</p>
                <p className="text-body-sm text-secondary uppercase tracking-tight">Biryani</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" />Biryani</div>
              <span className="font-data-mono text-on-surface">42%</span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-tertiary" />North Indian</div>
              <span className="font-data-mono text-on-surface">28%</span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary" />Chinese</div>
              <span className="font-data-mono text-on-surface">18%</span>
            </div>
            <div className="flex justify-between items-center text-body-sm">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-outline" />South Indian</div>
              <span className="font-data-mono text-on-surface">12%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Orders Table */}
      <section className="glass-card rounded-xl overflow-hidden relative z-10">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white">
          <h3 className="font-headline-md text-title-sm text-on-surface">Recent Orders</h3>
          <button className="text-primary hover:underline text-body-md font-bold transition-all">View All Activity</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider">Restaurant</th>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider">Time</th>
                <th className="px-6 py-4 text-label-caps text-secondary uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant bg-white">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4 font-data-mono text-primary">#FE9823</td>
                <td className="px-6 py-4">
                  <div className="text-body-md font-medium text-on-surface">Rahul Sharma</div>
                  <div className="text-[11px] text-secondary">Gachibowli, Hyderabad</div>
                </td>
                <td className="px-6 py-4 text-body-md text-on-surface">Paradise Biryani</td>
                <td className="px-6 py-4 font-data-mono font-bold text-on-surface">₹543</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">Delivered</span>
                </td>
                <td className="px-6 py-4 text-body-sm text-secondary">10 mins ago</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-secondary hover:text-primary transition-all">
                    <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                  </button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4 font-data-mono text-primary">#FE9824</td>
                <td className="px-6 py-4">
                  <div className="text-body-md font-medium text-on-surface">Ananya Reddy</div>
                  <div className="text-[11px] text-secondary">Jubilee Hills, Hyderabad</div>
                </td>
                <td className="px-6 py-4 text-body-md text-on-surface">Chutneys</td>
                <td className="px-6 py-4 font-data-mono font-bold text-on-surface">₹320</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-[11px] font-bold uppercase tracking-wider">In-Transit</span>
                </td>
                <td className="px-6 py-4 text-body-sm text-secondary">15 mins ago</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-secondary hover:text-primary transition-all">
                    <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                  </button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4 font-data-mono text-primary">#FE9825</td>
                <td className="px-6 py-4">
                  <div className="text-body-md font-medium text-on-surface">Vikram Singh</div>
                  <div className="text-[11px] text-secondary">Banjara Hills, Hyderabad</div>
                </td>
                <td className="px-6 py-4 text-body-md text-on-surface">Shah Ghouse</td>
                <td className="px-6 py-4 font-data-mono font-bold text-on-surface">₹1,240</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-error/10 text-error text-[11px] font-bold uppercase tracking-wider">Delayed</span>
                </td>
                <td className="px-6 py-4 text-body-sm text-secondary">22 mins ago</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-secondary hover:text-primary transition-all">
                    <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                  </button>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="px-6 py-4 font-data-mono text-primary">#FE9826</td>
                <td className="px-6 py-4">
                  <div className="text-body-md font-medium text-on-surface">Priya Kapur</div>
                  <div className="text-[11px] text-secondary">Kondapur, Hyderabad</div>
                </td>
                <td className="px-6 py-4 text-body-md text-on-surface">Cream Stone</td>
                <td className="px-6 py-4 font-data-mono font-bold text-on-surface">₹450</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">Delivered</span>
                </td>
                <td className="px-6 py-4 text-body-sm text-secondary">28 mins ago</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-secondary hover:text-primary transition-all">
                    <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-surface-container-low flex items-center justify-between">
          <p className="text-body-sm text-secondary">Showing 4 of 1,245 orders</p>
          <div className="flex gap-2">
            <button className="p-1 rounded bg-white border border-outline-variant hover:bg-surface-container-high transition-all text-on-surface">
              <span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="p-1 rounded bg-white border border-outline-variant hover:bg-surface-container-high transition-all text-on-surface">
              <span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* FAB for quick actions */}
  <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
    <span className="material-symbols-outlined text-[32px]" data-icon="add">add</span>
  </button>
</div>

    </>
  );
}
