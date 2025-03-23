import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production"

  try {
    const token = await getToken({
      req: request,
      secret,
    })

    // Protect admin routes
    if (request.nextUrl.pathname.startsWith("/admin") && (!token || token.role !== "admin")) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    // Protect user routes
    if (request.nextUrl.pathname.startsWith("/user") && !token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    // If there's an error, redirect to login
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
}

