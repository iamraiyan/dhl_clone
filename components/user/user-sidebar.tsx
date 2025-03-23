"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { CreditCard, Home, LogOut, MessageSquare, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Dashboard",
    href: "/user/dashboard",
    icon: Home,
  },
  {
    title: "My Shipments",
    href: "/user/shipments",
    icon: Package,
  },
  {
    title: "Get Quote",
    href: "/get-quote",
    icon: CreditCard,
  },
  {
    title: "Feedback",
    href: "/user/feedback",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/user/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/user/settings",
    icon: Settings,
  },
]

export default function UserSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn("bg-white border-r h-screen sticky top-0 transition-all duration-300", collapsed ? "w-16" : "w-64")}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-[#D40511]" />
            {!collapsed && <span className="ml-2 font-bold text-lg">User Portal</span>}
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-2 rounded-md transition-colors",
                    pathname === item.href ? "bg-[#FFCC00] text-black" : "hover:bg-gray-100",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!collapsed && <span className="ml-3">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>

        <div className="p-4 border-t">
          <Button variant="outline" size="sm" className="w-full" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "→" : "←"}
          </Button>
        </div>
      </div>
    </div>
  )
}

