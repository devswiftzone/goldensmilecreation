"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

// Logo temporal hasta que tengamos la imagen real
const ToothLogo = () => (
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 mr-2 text-dental-gold"
    >
      <path d="M12 5.5c-7.5 0-7 8-7 8 0 7 6 6 6 6-1-3 1-3 1-3 8.5 0 6-14 0-11z" />
      <path d="M12 5.5c7.5 0 7 8 7 8 0 7-6 6-6 6 1-3-1-3-1-3-8.5 0-6-14 0-11z" />
    </svg>
    <div>
      <span className="font-agbalumo text-dental-teal text-xl">Golden Smile</span>
      <span className="font-agbalumo text-dental-gold text-xl ml-1">Creation</span>
    </div>
  </div>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-dental-teal/10 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <ToothLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="font-epilogue text-dental-teal hover:text-dental-gold transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-dental-teal hover:bg-dental-teal/90 text-white font-epilogue">
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-epilogue text-lg text-dental-teal hover:text-dental-gold transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 bg-dental-teal hover:bg-dental-teal/90 text-white font-epilogue">
                Book Appointment
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
