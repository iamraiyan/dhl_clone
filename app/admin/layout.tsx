import type React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and has admin role
    if (!session || session.user?.role !== "admin") {
      redirect("/login")
    }

    return (
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        <div className="flex-1 p-8">{children}</div>
      </div>
    )
  } catch (error) {
    console.error("Error in admin layout:", error)
    redirect("/login")
  }
}

