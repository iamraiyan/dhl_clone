"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Globe, Menu, Package, Search, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/use-auth"

export default function Header() {
  const { user, logout } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-white/95",
      )}
    >
      {/* Top navigation */}
      <div className="bg-[#FFCC00] py-1 px-4 text-xs hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Global Express Shipping
            </Link>
            <Link href="#" className="hover:underline flex items-center gap-1">
              <Globe className="h-3 w-3" />
              English
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Contact Us
            </Link>
            {!user ? (
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            ) : (
              <span className="hover:underline cursor-pointer" onClick={() => logout()}>
                Logout
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-[#D40511]" />
              <span className="font-bold text-lg hidden sm:inline-block">Global Express</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="font-medium hover:text-[#D40511]">
              Home
            </Link>
            <Link href="/track/123456789" className="font-medium hover:text-[#D40511]">
              Track Your Shipment
            </Link>
            <Link href="/pricing-calculator" className="font-medium hover:text-[#D40511]">
              Pricing Calculator
            </Link>
            <Link href="/get-quote" className="font-medium hover:text-[#D40511]">
              Get a Quote
            </Link>
            <Link href="/business-account" className="font-medium hover:text-[#D40511]">
              Business Accounts
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user.role === "admin" ? (
                  <DropdownMenuItem asChild>
                    <Link href="/admin/dashboard">Admin Dashboard</Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link href="/user/dashboard">My Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Link href="/user/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/user/shipments">My Shipments</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="hidden md:flex bg-[#D40511] hover:bg-[#b10410]">
              <Link href="/login">Login</Link>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center gap-2">
                    <Package className="h-6 w-6 text-[#D40511]" />
                    <span className="font-bold">Global Express</span>
                  </div>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col py-6 gap-1">
                  <Link href="/" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md">
                    Home
                  </Link>
                  <Link
                    href="/track/123456789"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md"
                  >
                    Track Your Shipment
                  </Link>
                  <Link
                    href="/pricing-calculator"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md"
                  >
                    Pricing Calculator
                  </Link>
                  <Link href="/get-quote" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md">
                    Get a Quote
                  </Link>
                  <Link
                    href="/business-account"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md"
                  >
                    Business Accounts
                  </Link>
                  {user && (
                    <>
                      <div className="h-px bg-gray-200 my-2"></div>
                      {user.role === "admin" ? (
                        <Link
                          href="/admin/dashboard"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md"
                        >
                          Admin Dashboard
                        </Link>
                      ) : (
                        <Link
                          href="/user/dashboard"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-md"
                        >
                          My Dashboard
                        </Link>
                      )}
                    </>
                  )}
                </nav>
                <div className="mt-auto border-t py-4">
                  {user ? (
                    <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => logout()}>
                      Logout
                    </Button>
                  ) : (
                    <Button asChild className="w-full bg-[#D40511] hover:bg-[#b10410]">
                      <Link href="/login">Login</Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

