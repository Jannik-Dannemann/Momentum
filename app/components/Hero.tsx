"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Features from "./Features";
import Pricing from "./Pricing";
import Company from "./Company"; // 1. IMPORT COMPANY

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const component = useRef<HTMLDivElement>(null);
  const ctaButtonContainer = useRef<HTMLDivElement>(null);
  const gradientOverlay = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // --- ANIMATION 1: HERO EXPANSION (Self-contained) ---
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });
      heroTl
        .to(["[data-hero-headline]", "[data-hero-subheader]"], { opacity: 0, duration: 0.3 })
        .to(gradientOverlay.current, { opacity: 0, duration: 0.2, ease: "power1.in" }, "<")
        .to(ctaButtonContainer.current, { scale: 60, duration: 1, ease: "power2.inOut" }, "<");

      // --- ANIMATION 2: FEATURES FADE-IN (No pin) ---
      gsap.from("[data-feature-box]", {
        scrollTrigger: {
          trigger: "#features-section",
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0, y: 40, stagger: 0.1, ease: "power3.out",
      });
      
      // --- ANIMATION 3: FEATURES TO PRICING WIPE (Self-contained) ---
      gsap.to("#pricing-section", {
        clipPath: "circle(150% at 50% 50%)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#features-section",
          start: "bottom bottom",
          end: "+=1000",
          scrub: 1,
          pin: "#features-section",
        },
      });
      
      // --- ANIMATION 4: PRICING CARDS FADE-IN (No pin) ---
      gsap.from("[data-pricing-card]", {
        scrollTrigger: {
          trigger: "#pricing-container",
          start: "top 50%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0, y: 50, stagger: 0.1, ease: "power3.out",
      });

      // --- 5. NEW ANIMATION: PRICING TO COMPANY WIPE ---
      gsap.to("#company-section", {
        clipPath: "inset(0% 0% 0% 0%)", // Wipes down from the top
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#pricing-container", // Triggers on the pricing container
          start: "bottom bottom", // Starts when pricing bottom hits viewport bottom
          end: "+=1000",
          scrub: 1,
          pin: "#pricing-container", // Pins the pricing section during the wipe
        },
      });

      // --- 6. NEW ANIMATION: COMPANY CONTENT FADE-IN ---
      gsap.from("[data-company-box]", {
        scrollTrigger: {
          trigger: "#company-section",
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0, y: 50, stagger: 0.1, ease: "power3.out",
      });


      // The intro animation remains separate
      const introTl = gsap.timeline();
      introTl.fromTo(".char", { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" });
      introTl.fromTo("[data-hero-subheader]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");
      introTl.fromTo("[data-hero-cta]", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "<");

    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (text: string, key: string) => text.split("").map((char, index) => <span key={`${key}-${index}`} className={`char inline-block ${char === " " ? "whitespace-pre" : ""}`}>{char}</span>);


  return (
    <div ref={component}>
      <section className="hero-section relative min-h-screen w-full flex flex-col justify-center items-center bg-background text-foreground overflow-hidden">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter" data-hero-headline>
            {renderLetters("Build Unstoppable", "line1")}
          </h1>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter z-10" data-hero-headline>
            {renderLetters("Momentum.", "line2")}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto" data-hero-subheader>
            Momentum is the new standard in project management. Go from idea to launch faster than ever before with our intuitive and powerful platform.
          </p>
          <div ref={ctaButtonContainer} className="mt-10 relative z-20" data-hero-cta>
            <button className="relative bg-primary text-foreground text-xl font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
              <span ref={gradientOverlay} className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg"></span>
              <span className="relative">Get Started For Free</span>
            </button>
          </div>
        </div>
      </section>

     {/* This container is crucial for stacking the reveal effects */}
      <div className="relative">
        <Features />
        <div className="relative"> {/* New wrapper for pricing and company */}
          <Pricing />
          <Company />
        </div>
      </div>
    </div>
  );
};

export default Hero;