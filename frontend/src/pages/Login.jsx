import React from 'react';

export default function Login() {
  return (
    <>
<div>
  {/* Left Panel: Branding & Imagery */}
  <div className="hidden lg:flex flex-col w-[40%] bg-primary-container relative p-margin-desktop overflow-hidden justify-between">
    {/* Floating Patterns/Shaders via CSS class */}
    <div className="absolute inset-0 pattern-bg opacity-30 z-0" />
    {/* Logo */}
    <div className="z-10 relative">
      <img alt="FoodExpress Logo" className="h-12 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AP1WRLur-HFo1Fx0xQ5wmpGjonI7vpS3nVg565R-6h6a9hdktx0MFMBPIA0W2hDaMGkSMcRJlFri4cIVNbk6IEqmohDWgimlipxUqA0ZxDc4pSQvXcefOXxA9RGFYOMPmnr6D69fgnefCJGxrAUPmQmEBPZ7y2ARu8_0Tao9iF8Y81Jb68GRA4MxB3cSiVZ5GwZsHrntplyo4cCG3ShnWRUjuHl_i1AMoLVkVssOo0nFVpQlcUDVtqU15BkdJac" />
    </div>
    {/* Collage & Copy */}
    <div className="z-10 relative mt-section-gap flex flex-col items-center">
      <div className="relative w-full max-w-[400px] aspect-square mb-stack-lg">
        {/* Collage Images */}
        <div className="absolute top-0 left-0 w-48 h-48 rounded-xl shadow-xl bg-cover bg-center transform -rotate-6 z-20 border-4 border-surface border-opacity-10" data-alt="A mouth-watering, high-resolution top-down shot of authentic Indian Chicken Biryani served in a traditional copper handi. The vibrant yellow and orange saffron rice is perfectly fluffy, garnished with caramelized onions, fresh mint leaves, and roasted cashews. Soft, diffused natural light highlights the rich textures and steam rising gently from the dish, set against a dark rustic wooden table for a premium corporate aesthetic." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD99tWUR59oXDKz7oIJoMnQ0nkphjNvnRkG2aT29Fqnby3OG6vGgXEYb_IU0ypOCxeam2edPRjZW0WuAS9PR4yReTCKSdIp8kB0W5qmJIhnzNs7rB_SEzD-JCfw10zJO0c3S6eSihyGoYQimy-7HG8fGImzrHxUjjB-BHLMaE9HeNAMWyFM9H6vGSPOe--esk1jiwpUsM6rc99ayP1ReMSVu-aWRnl3GLrob5M7od305lFsD9yDdqPpvf4jBqsOx9BNgsC1mjhtC9M")'}} />
        <div className="absolute top-12 right-0 w-40 h-40 rounded-full shadow-xl bg-cover bg-center transform rotate-6 z-10 border-4 border-surface border-opacity-10" data-alt="A professional studio photo of a perfectly baked, artisanal Neapolitan pizza with blistered crusts, fresh mozzarella, and vibrant green basil leaves. The lighting is bright and directional, emphasizing the bubbling cheese and rich red tomato sauce. It sits on a minimal slate gray surface, evoking a modern, fast yet high-quality food delivery experience in a corporate modern setting." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZWFwy9gwjLkiDVhXA-CpFXA-R25rS4pQSLdACRPBOgteaQ5myRPnVBOLW1sPOjXfi3NEK81S3jvhNLFrwJ6SaCJt6GBnBxPuoUIh_SFAaAaI5tCdU1WlqI8I88IyfwBL2pyLizglPfFvQjKFsoBFFgVR7-s0egZTRTF-cgyCoruqlwCrsUyyLwrGk2RLhnoQkiyDpR79Tp4sYyHUtHMNqzQ0sIjFbg_GOGCXdtfJrU4vFSvZ54RukQbilsGe6YFZoTtbe36z_HSY")'}} />
        <div className="absolute bottom-4 left-12 w-56 h-32 rounded-xl shadow-xl bg-cover bg-center transform rotate-3 z-30 border-4 border-surface border-opacity-10" data-alt="A close-up, dramatic shot of sizzling Tandoori chicken skewers resting on a dark iron grill. The meat is a deep, rich crimson red, charred perfectly at the edges. Tiny embers glow in the soft-focus background, creating a warm, inviting atmosphere. The lighting enhances the juicy texture and the vibrant emerald green of a fresh cilantro garnish, perfectly matching a premium, energetic brand identity." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClcuM7693a739TwjOWMNFYRkgapaVkAF29OIr2F_j32zATSZBCDWjaqZV0durHQPEfczhs4phqb_cQ770FPoJE9o1MDRWBD0tMsqwAf1O19DA1rSevONrVA2sR1_VahQgvB7NshSnaC4kEH0nVbhangJVDEuy3lfPNZ7ob6gLX9eWHvIVVe_kOc0nlnY1VIHqrSqFB0Utm9EaeDkb0gkF_u1AXzPQ73udDr8vgjsmes1oAV8SxUW01S5lh0N7lPp4Csvhrs_EkpiY")'}} />
      </div>
      <h1 className="font-display-lg text-display-lg text-on-primary text-center mb-stack-sm tracking-tight leading-tight">
        Deliciousness,<br />delivered fast.
      </h1>
      <p className="font-body-lg text-body-lg text-on-primary-fixed-variant text-center max-w-sm">
        From over 5,000+ top restaurants right to your doorstep.
      </p>
    </div>
    {/* Empty div for spacing balance */}
    <div />
  </div>
  {/* Right Panel: Login Form */}
  <div className="w-full lg:w-[60%] flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop bg-surface overflow-y-auto">
    <div className="w-full max-w-[420px] bg-surface-container-lowest rounded-2xl shadow-md p-stack-lg border border-outline-variant/30 flex flex-col">
      {/* Mobile Logo */}
      <div className="lg:hidden flex justify-center mb-stack-lg">
        <img alt="FoodExpress Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLur-HFo1Fx0xQ5wmpGjonI7vpS3nVg565R-6h6a9hdktx0MFMBPIA0W2hDaMGkSMcRJlFri4cIVNbk6IEqmohDWgimlipxUqA0ZxDc4pSQvXcefOXxA9RGFYOMPmnr6D69fgnefCJGxrAUPmQmEBPZ7y2ARu8_0Tao9iF8Y81Jb68GRA4MxB3cSiVZ5GwZsHrntplyo4cCG3ShnWRUjuHl_i1AMoLVkVssOo0nFVpQlcUDVtqU15BkdJac" />
      </div>
      {/* Tabs */}
      <div className="flex border-b border-outline-variant mb-stack-lg">
        <button className="flex-1 pb-stack-sm text-center font-headline-sm text-headline-sm text-secondary border-b-2 border-secondary">
          Login
        </button>
        <button className="flex-1 pb-stack-sm text-center font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors">
          Sign Up
        </button>
      </div>
      {/* Form */}
      <form className="flex flex-col gap-stack-md" onsubmit="event.preventDefault();">
        <div>
          <label className="block font-label-bold text-label-bold text-on-surface mb-2">Phone Number</label>
          <div className="flex flex-row items-center bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition-colors">
            <div className="flex items-center px-4 py-3 bg-surface-container-high border-r border-outline-variant">
              {/* Simple India Flag SVG */}
              <svg className="w-6 h-4 mr-2 rounded-sm shadow-sm" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#FF9933" height={200} width={900} />
                <rect fill="#FFFFFF" height={200} width={900} y={200} />
                <rect fill="#138808" height={200} width={900} y={400} />
                <circle cx={450} cy={300} fill="none" r={80} stroke="#000080" strokeWidth={6} />
              </svg>
              <span className="font-body-md text-on-surface">+91</span>
            </div>
            <input className="flex-1 w-full border-none bg-transparent py-3 px-4 focus:ring-0 font-body-md text-on-surface placeholder:text-outline h-[56px]" placeholder="Enter mobile number" required type="tel" />
          </div>
        </div>
        <button className="w-full bg-secondary text-on-secondary font-label-bold text-label-bold py-4 rounded-xl shadow-md hover:bg-secondary-fixed-dim hover:-translate-y-[2px] transition-all duration-200 mt-stack-sm flex justify-center items-center group" type="submit">
          Continue
          <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </form>
      {/* Divider */}
      <div className="relative flex py-stack-lg items-center">
        <div className="flex-grow border-t border-outline-variant" />
        <span className="flex-shrink-0 mx-4 font-body-md text-on-surface-variant text-sm">or continue with</span>
        <div className="flex-grow border-t border-outline-variant" />
      </div>
      {/* Social Buttons */}
      <div className="flex flex-col gap-stack-sm">
        <button className="w-full flex items-center justify-center py-3 px-4 border border-outline-variant rounded-xl bg-transparent text-on-surface font-label-bold text-label-bold hover:bg-surface-container transition-colors">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
        <button className="w-full flex items-center justify-center py-3 px-4 border border-outline-variant rounded-xl bg-transparent text-on-surface font-label-bold text-label-bold hover:bg-surface-container transition-colors">
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.365 7.143c-.022-2.585 2.115-3.86 2.213-3.918-1.2-1.758-3.072-1.996-3.743-2.023-1.595-.16-3.109.937-3.926.937-.816 0-2.062-.916-3.411-.889-1.757.026-3.376.963-4.28 2.535-1.83 3.176-.467 7.876 1.314 10.457.872 1.264 1.905 2.68 3.252 2.627 1.3-.052 1.802-.843 3.378-.843 1.575 0 2.026.843 3.38.818 1.398-.026 2.274-1.288 3.125-2.545.983-1.43 1.388-2.822 1.41-2.894-.033-.014-2.709-1.04-2.712-4.262zm-2.52-6.07c.725-.877 1.213-2.096 1.08-3.314-1.05.043-2.311.698-3.056 1.57-.665.772-1.246 2.016-1.096 3.21 1.173.09 2.348-.592 3.072-1.466z" />
          </svg>
          Apple
        </button>
      </div>
      <div className="mt-stack-lg text-center">
        <a className="font-body-md text-on-surface-variant hover:text-secondary underline decoration-outline-variant hover:decoration-secondary transition-colors text-sm" href="#">
          Continue as Guest
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
