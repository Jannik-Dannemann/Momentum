import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="px-4 md:px-[64px] py-4 md:py-[26px] flex justify-between items-center">
        <div>
          <Link href="/" className="text-4xl font-bold text-foreground">
            Momentum
          </Link>
        </div>
        <div className="hidden lg:flex gap-10">
         <Link
            href="/features-section"
            className="text-foreground transition-all duration-300 hover:brightness-50 font-semibold text-3xl relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            href="/pricing-section"
            className="text-foreground transition-all duration-300 hover:brightness-50 font-semibold text-3xl relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            href="/company-section"
            className="text-foreground transition-all duration-300 hover:brightness-50 font-semibold text-3xl relative group"
          >
            Company
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </div>
        <div>
          <button className="bg-gradient-to-r from-primary to-secondary text-foreground text-md sm:text-lg font-semibold py-2 sm:py-2.5 px-3 sm:p-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
