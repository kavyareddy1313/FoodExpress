import React from 'react';

export default function SignUp() {
  return (
    <>
{/* Split Screen Layout */}
<div className="flex w-full min-h-screen">
  {/* Left Panel (40%) - Dark Navy Panel with Food Collage */}
  <div className="hidden lg:flex w-2/5 bg-primary-container text-on-primary relative flex-col justify-between overflow-hidden">
    {/* Decorative Glass Elements */}
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0 pointer-events-none" />
    <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-tertiary-fixed/20 rounded-full blur-3xl z-0 pointer-events-none" />
    <div className="relative z-10 p-margin-desktop flex-grow flex flex-col justify-center items-center">
      <h1 className="font-display-lg text-display-lg text-on-primary-fixed mb-section-gap text-center max-w-md relative z-20">
        Deliciousness, <br />delivered fast.
      </h1>
      {/* Food Collage Container */}
      <div className="relative w-full max-w-lg aspect-square mt-8">
        {/* Main Image */}
        <div className="absolute inset-0 bg-cover bg-center rounded-[24px] shadow-xl z-10 transform -rotate-2" data-alt="A highly stylized, premium food photography shot of a gourmet double cheeseburger. The burger is incredibly appetizing with melted cheese, fresh lettuce, and perfect grill marks on the patty. It sits on a dark, textured slate surface. The lighting is dramatic and moody, emphasizing the textures and colors of the food. The scene is shot from a slightly high angle, creating a dynamic and modern composition suitable for a high-end food delivery app." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw3y9IgKbNB0c3_J_LlIxmEb1iQSLzi4pEKCgddHH3u3dGFmrRcAGSIxQ9-WkapYhbMZ51kf1m_kgmcKmQgLDpHLB8einMItVI-XGBXqWW5yUYBaWNsqZ-EaqNWky4sFi9XZ-ggr3nMUreJ7GSo9Xyr3rKUURu9IhGgxXZzDVglMgeM10YMaR_KR93_Ua_lDe4l8M3ZClVwI86masUddT1qFxwqby-IvrYr1yOdEm97hKfjioDgGviFk5E4YhMfxW71q5p6ZGXABA")'}} />
        {/* Floating Accent Images */}
        <div className="absolute -top-12 -right-8 w-48 h-48 bg-cover bg-center rounded-full shadow-2xl z-20 border-4 border-primary-container transform rotate-6" data-alt="A close-up, macro photography shot of vibrant, fresh green basil leaves and bright red cherry tomatoes. The composition is tight, focusing on the dewdrops on the leaves and the shiny skin of the tomatoes. The lighting is soft and natural, creating a fresh and appetizing feel. The background is softly blurred, isolating the fresh ingredients. This image acts as a fresh accent piece in a modern food app layout." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkDUUa9ypcmBkQEg8LVADtFTQffjGoB_RQJbYIivqQhQ0-_cbp-iTHrUgFA53BDq0W_SChdoFIXdxd1OW1Xqh5EYvqVE7i6XTjYqwpsoZBYSh3FiWLeQPEEnm_W_rzEVMCMk6_wH0p40Rw_jh3KFUG6EZN2WfhyapAoMPRPt52aJWb__ZfgP-JE_Sc5AeomY9RKK2MLHIrRIitmYGNh9xIf3-xYBnSUEc-bi87e0tHccoKtQgF5zfQvdhRuaJxjSGK-Nbkqbz0Wmw")'}} />
        <div className="absolute -bottom-8 -left-12 w-56 h-56 bg-cover bg-center rounded-[24px] shadow-2xl z-20 border-4 border-primary-container transform -rotate-12" data-alt="A dynamic, high-speed photography shot of golden french fries mid-air, lightly dusted with salt. The fries are perfectly crispy and golden brown. The background is a solid, deep navy blue, matching a corporate modern aesthetic. The lighting is crisp, freezing the motion and highlighting the texture of the fries. This creates a sense of rapid, energetic food delivery." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAn24R7xNi7P7ROfZwSkglVOcIbSy-dUhx-dkrlx3H_Z25zklTlMGE4jSh7V0gFK_WErI_H-rjikRZGwsA2KLn4bvurT1131JnZTOwFnXGZ9c6DRL0qIdxsESMU8Wji_aSWnfOD8klsRMN-0d-xG3lDOqY4AN4jahRXYLuBOcfTCMK0xOm7I1rdVziRGi0NevLkCVY0BpRQEIlc661aBpoVOs0EZgFlrVtlEeEQ_XsmFP2OxDIm3UoGAoBZmGQWgbhqgaJZ3pAfMzo")'}} />
      </div>
    </div>
    {/* Branding Bottom Left */}
    <div className="relative z-10 p-margin-desktop opacity-50">
      <p className="font-body-md text-body-md text-on-primary-fixed">© 2024 FoodExpress. Rapid Service.</p>
    </div>
  </div>
  {/* Right Panel (60%) - Form Area */}
  <div className="w-full lg:w-3/5 bg-background flex flex-col justify-center items-center p-margin-mobile md:p-margin-desktop relative">
    {/* Header Logo */}
    <div className="absolute top-margin-mobile md:top-margin-desktop left-1/2 transform -translate-x-1/2 lg:left-margin-desktop lg:translate-x-0 w-full max-w-[200px]">
      <img alt="FoodExpress Logo" className="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLur-HFo1Fx0xQ5wmpGjonI7vpS3nVg565R-6h6a9hdktx0MFMBPIA0W2hDaMGkSMcRJlFri4cIVNbk6IEqmohDWgimlipxUqA0ZxDc4pSQvXcefOXxA9RGFYOMPmnr6D69fgnefCJGxrAUPmQmEBPZ7y2ARu8_0Tao9iF8Y81Jb68GRA4MxB3cSiVZ5GwZsHrntplyo4cCG3ShnWRUjuHl_i1AMoLVkVssOo0nFVpQlcUDVtqU15BkdJac" />
    </div>
    {/* Central Card */}
    <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-md p-stack-lg md:p-[48px] flex flex-col gap-stack-lg mt-section-gap lg:mt-0">
      {/* Tabs */}
      <div className="flex w-full border-b border-outline-variant relative">
        <a className="flex-1 text-center py-stack-sm font-headline-sm text-headline-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
          Login
        </a>
        <div className="flex-1 text-center py-stack-sm font-headline-sm text-headline-sm text-secondary border-b-2 border-secondary relative">
          Sign Up
        </div>
      </div>
      {/* Form */}
      <form className="flex flex-col gap-stack-md w-full">
        {/* Full Name */}
        <div className="relative w-full">
          <input className="peer w-full h-[56px] bg-surface border border-outline rounded-xl px-stack-md pt-stack-sm pb-1 text-on-surface font-body-md text-body-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" id="fullname" placeholder="Full Name" type="text" />
          <label className="absolute left-stack-md top-1/2 transform -translate-y-1/2 text-on-surface-variant font-body-md text-body-md transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-body-md peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary peer-valid:top-2 peer-valid:text-xs" htmlFor="fullname">
            Full Name
          </label>
        </div>
        {/* Phone Number */}
        <div className="flex gap-stack-sm w-full h-[56px]">
          <div className="w-24 bg-surface border border-outline rounded-xl flex items-center justify-center font-body-md text-body-md text-on-surface">
            +91
          </div>
          <div className="relative flex-1">
            <input className="peer w-full h-full bg-surface border border-outline rounded-xl px-stack-md pt-stack-sm pb-1 text-on-surface font-body-md text-body-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" id="phone" placeholder="Phone Number" type="tel" />
            <label className="absolute left-stack-md top-1/2 transform -translate-y-1/2 text-on-surface-variant font-body-md text-body-md transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-body-md peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary peer-valid:top-2 peer-valid:text-xs" htmlFor="phone">
              Phone Number
            </label>
          </div>
        </div>
        {/* Email Address */}
        <div className="relative w-full">
          <input className="peer w-full h-[56px] bg-surface border border-outline rounded-xl px-stack-md pt-stack-sm pb-1 text-on-surface font-body-md text-body-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" id="email" placeholder="Email Address" type="email" />
          <label className="absolute left-stack-md top-1/2 transform -translate-y-1/2 text-on-surface-variant font-body-md text-body-md transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-body-md peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary peer-valid:top-2 peer-valid:text-xs" htmlFor="email">
            Email Address
          </label>
        </div>
        {/* Checkbox */}
        <div className="flex items-start gap-stack-sm mt-stack-sm">
          <div className="flex items-center h-5">
            <input className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary bg-surface" id="terms" type="checkbox" />
          </div>
          <label className="font-body-md text-sm text-on-surface-variant" htmlFor="terms">
            I agree to the <a className="text-secondary hover:underline" href="#">Terms &amp; Conditions</a> and <a className="text-secondary hover:underline" href="#">Privacy Policy</a>
          </label>
        </div>
        {/* Action Button */}
        <button className="w-full mt-stack-md bg-secondary text-on-secondary font-label-bold text-label-bold py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-all duration-200 flex justify-center items-center gap-2" type="button">
          Create Account
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </form>
      {/* Footer Link */}
      <div className="text-center mt-stack-sm">
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#">
          Continue as Guest
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
