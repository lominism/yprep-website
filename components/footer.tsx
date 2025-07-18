import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-orange-500" />
              <Link href="/" className="text-xl font-bold">
                YPrep Acacdemy
              </Link>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Bangkok's top boutique test prep center since 2013.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Tests</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  SAT Prep
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  ACT Prep
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  GMAT Prep
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  TOEFL Prep
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  IELTS Prep
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Study Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Practice Tests
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Flashcards
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} YPrep Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
