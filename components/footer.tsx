import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Shipping</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Track a Shipment
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:underline">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Schedule a Pickup
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Find Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shipping Supplies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/business-account" className="hover:underline">
                  Business Accounts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Green Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Innovation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Claims
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Customs Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Fraud Awareness
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for shipping tips and special offers.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-[#D40511] hover:bg-[#b10410]">Subscribe</Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-[#FFCC00] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#FFCC00] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#FFCC00] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-[#FFCC00] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="font-bold text-xl mr-2">Global Express</div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm">
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Fraud Awareness
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Settings
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Global Express Shipping. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

