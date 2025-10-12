// components/Company.jsx

import React from "react";

const Company = () => {
  return (
    // This section is initially hidden by a clip-path, ready to be revealed
    <section 
      id="company-section" 
      className="relative w-full min-h-screen bg-background pt-48 pb-32 px-4 md:px-8"
      style={{ clipPath: "inset(100% 0% 0% 0%)" }} // Starts fully clipped from the top
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-company-box className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Built on a foundation of trust.</h2>
          <p data-company-box className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground/70">
            We believe that the best tools are born from collaboration and a deep respect for the creative process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member Card */}
          <div data-company-box className="text-center">
            <img 
              src="https://placehold.co/400x400/a2e4b8/3D453A?text=AV" 
              alt="Team Member 1" 
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
            />
            <h3 className="text-2xl font-bold text-foreground">Ava Verdant</h3>
            <p className="text-foreground/70">Founder & CEO</p>
          </div>

          {/* Team Member Card */}
          <div data-company-box className="text-center">
            <img 
              src="https://placehold.co/400x400/fadbc5/3D453A?text=LI" 
              alt="Team Member 2" 
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
            />
            <h3 className="text-2xl font-bold text-foreground">Leo Ipsum</h3>
            <p className="text-foreground/70">Lead Designer</p>
          </div>

          {/* Team Member Card */}
          <div data-company-box className="text-center">
            <img 
              src="https://placehold.co/400x400/a2e4b8/3D453A?text=CH" 
              alt="Team Member 3" 
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
            />
            <h3 className="text-2xl font-bold text-foreground">Chloe Hue</h3>
            <p className="text-foreground/70">Head of Engineering</p>
          </div>

          {/* Team Member Card */}
          <div data-company-box className="text-center">
            <img 
              src="https://placehold.co/400x400/fadbc5/3D453A?text=MA" 
              alt="Team Member 4" 
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
            />
            <h3 className="text-2xl font-bold text-foreground">Mason Arrow</h3>
            <p className="text-foreground/70">Product Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;