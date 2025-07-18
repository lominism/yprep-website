"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tests</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 p-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/sat"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          SAT
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Scholastic Assessment Test preparation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/act"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          ACT
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          American College Testing preparation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/toefl"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          TOEFL
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Test of English as a Foreign Language
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/features">Features</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/resources">Resources</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
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
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">
                Tests
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/sat"
                  className="block text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  SAT
                </Link>
                <Link
                  href="/act"
                  className="block text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  ACT
                </Link>
                <Link
                  href="/toefl"
                  className="block text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  TOEFL
                </Link>
              </div>
            </div>
            <Link
              href="/features"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/login"
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
