// components/CTA.jsx

import React from "react";

const CTA = () => {
  return (
    // This section is positioned to sit underneath the Company section for the reveal effect
    <section 
      id="cta-section" 
      className="absolute inset-0 w-full min-h-screen flex flex-col justify-center items-center bg-primary text-primary-foreground"
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 data-cta-box className="text-5xl md:text-7xl font-bold mb-6">
          Ready to Build Momentum?
        </h2>
        <p data-cta-box className="text-xl md:text-2xl mb-10 text-primary-foreground/80">
          Join thousands of teams who have transformed their workflow. Go from idea to launch faster than ever before.
        </p>
        <div data-cta-box>
          <button className="bg-background text-foreground text-xl font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;