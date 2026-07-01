import React from 'react';

export default function OTPVerification() {
  return (
    <>
<div className="flex w-full min-h-screen">
  {/* Left Panel (40%) */}
  <div className="hidden lg:flex w-2/5 bg-primary-container relative overflow-hidden flex-col justify-center items-center px-margin-desktop shadow-xl z-10">
    {/* Decorative Elements */}
    <div className="absolute inset-0 opacity-20 pointer-events-none" data-alt="A dynamic, high-energy food photography collage featuring gourmet burgers, fresh salads, and steaming pizzas on a deep navy background. The style is Corporate Modern, very sharp, well-lit, appetizing, with floating ingredients. Dark mode aesthetic with high contrast." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjgzSpu0CNe4zqp5tUHX8Ds4AmWaFFpev6kYuKzqk4zx0XHQIWl8TVWRZ_JQAe0nCeMGBZ5Uj8BklW13Nt_9-6l5pIep8Es2vu9zttCGAQmuzi2gf0NKzBh6cg7TZmyH3NTRPrgg5OR7w9uAMTCIJd6ZCDTBAomW_IhrGepY--EsX2fhh2UMFrt4CvCmvXmNHvemJVrTKI-ZBz0bvPPvwW68tw1Rj2M0GezkCC32AzQtaU8LpbOb_jn-Wvy34VwpY-3sac6NqEZ-Y")'}} />
    <div className="relative z-10 text-center">
      <h1 className="font-display-lg text-display-lg text-on-primary mb-stack-md">Deliciousness,<br />delivered fast.</h1>
      <p className="font-body-lg text-body-lg text-on-primary-container max-w-md mx-auto">Experience the finest culinary delights from your favorite local restaurants, brought straight to your door with unprecedented speed.</p>
    </div>
    {/* Glassmorphism Floating Cards */}
    <div className="absolute bottom-section-gap right-margin-desktop bg-white/10 backdrop-blur-md rounded-xl p-stack-md border border-white/20 shadow-xl transform rotate-3 flex items-center gap-stack-sm">
      <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
      <div>
        <p className="font-label-bold text-label-bold text-on-primary">Top Rated Service</p>
        <p className="font-body-md text-body-md text-on-primary-container text-sm">4.9/5 from 10k+ users</p>
      </div>
    </div>
    <div className="absolute top-section-gap left-margin-desktop bg-white/10 backdrop-blur-md rounded-xl p-stack-md border border-white/20 shadow-xl transform -rotate-2 flex items-center gap-stack-sm">
      <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: '"FILL" 1'}}>timer</span>
      <div>
        <p className="font-label-bold text-label-bold text-on-primary">Under 30 Mins</p>
        <p className="font-body-md text-body-md text-on-primary-container text-sm">Guaranteed delivery</p>
      </div>
    </div>
  </div>
  {/* Right Panel (60%) */}
  <div className="w-full lg:w-3/5 bg-surface flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop relative">
    {/* Header Brand */}
    <div className="absolute top-section-gap left-margin-mobile md:left-margin-desktop w-full max-w-sm">
      <img alt="FoodExpress Logo" className="h-10 object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLur-HFo1Fx0xQ5wmpGjonI7vpS3nVg565R-6h6a9hdktx0MFMBPIA0W2hDaMGkSMcRJlFri4cIVNbk6IEqmohDWgimlipxUqA0ZxDc4pSQvXcefOXxA9RGFYOMPmnr6D69fgnefCJGxrAUPmQmEBPZ7y2ARu8_0Tao9iF8Y81Jb68GRA4MxB3cSiVZ5GwZsHrntplyo4cCG3ShnWRUjuHl_i1AMoLVkVssOo0nFVpQlcUDVtqU15BkdJac" />
    </div>
    {/* OTP Card */}
    <div className="w-full max-w-md bg-surface-container-lowest rounded-[24px] shadow-md p-stack-lg md:p-[48px] border border-outline-variant/30">
      <div className="mb-stack-lg text-center">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Verify Phone Number</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">We've sent a 4-digit code to <span className="font-label-bold text-label-bold text-on-surface">+91 98765 43210</span></p>
      </div>
      <form action="#" className="flex flex-col gap-stack-lg" method="POST">
        {/* OTP Inputs */}
        <div className="flex justify-center gap-stack-sm md:gap-stack-md mb-stack-sm">
          <input autoComplete="one-time-code" className="w-14 h-16 text-center font-headline-md text-headline-md text-primary bg-background border border-outline-variant rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none" inputMode="numeric" maxLength={1} required type="text" />
          <input className="w-14 h-16 text-center font-headline-md text-headline-md text-primary bg-background border border-outline-variant rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none" inputMode="numeric" maxLength={1} required type="text" />
          <input className="w-14 h-16 text-center font-headline-md text-headline-md text-primary bg-background border border-outline-variant rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none" inputMode="numeric" maxLength={1} required type="text" />
          <input className="w-14 h-16 text-center font-headline-md text-headline-md text-primary bg-background border border-outline-variant rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all outline-none" inputMode="numeric" maxLength={1} required type="text" />
        </div>
        <div className="text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Didn't receive code? <a className="font-label-bold text-label-bold text-secondary hover:text-on-secondary-container transition-colors" href="#">Resend OTP in 00:30</a>
          </p>
        </div>
        <button className="w-full bg-secondary text-on-secondary font-label-bold text-label-bold py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2" type="submit">
          Verify &amp; Continue
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </form>
      <div className="mt-stack-lg text-center border-t border-outline-variant/30 pt-stack-md">
        <a className="inline-flex items-center gap-2 font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-low px-4 py-2 rounded-full" href="#">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to login
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
