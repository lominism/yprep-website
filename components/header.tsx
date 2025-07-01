"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Responsive Logo */}
        <Link
          href="/"
          className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-16 md:w-48"
        >
          <Image
            src="/yprep-logo.png"
            alt="YPrep Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Tests
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#"
            className="text-sm font-medium hover:text-orange-500 transition-colors"
          >
            Log in
          </Link>
          <Button className="bg-orange-400 hover:bg-orange-500">
            Get Started
          </Button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b px-4 py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Tests
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Log in
            </Link>
            <Button className="bg-orange-400 hover:bg-orange-500 w-full mt-2">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
