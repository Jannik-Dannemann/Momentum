// components/Features.jsx

import React from "react";
import { Zap, BrainCircuit, Rocket } from "lucide-react";

const Features = () => {
  return (
    <section id="features-section" className="relative z-10 w-full min-h-screen bg-secondary pt-48 pb-32 px-4 md:px-8">
      {/* The content remains the same */}
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 data-feature-box className="text-5xl md:text-7xl font-bold mb-4 text-secondary-foreground">Finally, a tool that works with you.</h2>
          <p data-feature-box className="text-xl md:text-2xl max-w-3xl mx-auto text-secondary-foreground/80">
            Momentum is built on three core principles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div data-feature-box className="bg-background p-8 rounded-2xl shadow-lg shadow-secondary/20">
            <Zap size={32} className="mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">Blazing Fast</h3>
            <p className="text-foreground/70">No lag, no waiting. Our platform is optimized for speed, so your team can focus on what matters.</p>
          </div>
          <div data-feature-box className="bg-background p-8 rounded-2xl shadow-lg shadow-secondary/20">
            <BrainCircuit size={32} className="mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">AI Powered</h3>
            <p className="text-foreground/70">Automate repetitive tasks and get intelligent insights with our built-in AI assistant.</p>
          </div>
          <div data-feature-box className="bg-background p-8 rounded-2xl shadow-lg shadow-secondary/20">
            <Rocket size={32} className="mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">Intuitive Design</h3>
            <p className="text-foreground/70">A clean, easy-to-use interface that doesn't require a manual. Onboard your team in minutes.</p>
          </div>
          <div data-feature-box className="md:col-span-2 bg-background p-8 rounded-2xl shadow-lg shadow-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Powerful Integrations</h3>
            <p className="text-foreground/70 mb-6">Connect with the tools you already use. From Slack to GitHub, we've got you covered.</p>
            <div className="bg-secondary/20 p-4 rounded-lg font-mono text-sm text-foreground/80">
              <p><span className="text-foreground">momentum.</span><span className="text-green-600 font-medium">connect</span>(<span className="text-amber-700">'github'</span>);</p>
              <p><span className="text-foreground">momentum.</span><span className="text-green-600 font-medium">connect</span>(<span className="text-amber-700">'slack'</span>);</p>
              <p><span className="text-foreground">momentum.</span><span className="text-green-600 font-medium">connect</span>(<span className="text-amber-700">'figma'</span>);</p>
            </div>
          </div>
          <div data-feature-box className="bg-background p-8 rounded-2xl shadow-lg shadow-secondary/20 flex flex-col justify-center items-center text-center">
            <p className="text-6xl font-bold text-secondary">3x</p>
            <p className="text-foreground/70 mt-2">Faster project completion on average.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;