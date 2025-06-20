import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-orange-500" />
          <Link href="/" className="text-xl font-bold">
            TestPrep Pro
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Tests
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
            Resources
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors hidden sm:block">
            Log in
          </Link>
          <Button className="bg-orange-400 hover:bg-orange-500">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
