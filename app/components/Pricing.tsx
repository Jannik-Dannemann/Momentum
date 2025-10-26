import React from "react";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div id="pricing-container" className="relative">
      <section 
        id="pricing-section" 
        className="w-full min-h-screen bg-background pt-48 pb-32 px-4 md:px-8"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 data-pricing-card className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Fair pricing for everyone.</h2>
            <p data-pricing-card className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground/70">
              Choose the plan that's right for your team's size and needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-pricing-card className="bg-secondary/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">$0<span className="text-lg font-medium text-foreground/70">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> 3 Projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> Basic Analytics</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> Community Support</li>
              </ul>
              <button data-pricing-button className="w-full bg-foreground text-background font-bold py-3 rounded-lg">Get Started</button>
            </div>
            
            <div data-pricing-card className="bg-background p-8 rounded-2xl shadow-2xl shadow-primary/20 border-2 border-primary relative">
              <span className="absolute top-0 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$29<span className="text-lg font-medium text-foreground/70">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> Unlimited Projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> Advanced Analytics</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> Priority Support</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> AI Assistant</li>
              </ul>
              <button data-pricing-button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg">Choose Pro</button>
            </div>
            
            <div data-pricing-card className="bg-secondary/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> All Pro features</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> Dedicated Onboarding</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> SSO & Security</li>
              </ul>
              <button data-pricing-button className="w-full bg-foreground text-background font-bold py-3 rounded-lg">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;