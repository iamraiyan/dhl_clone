// Simple authentication library without NextAuth.js
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Mock user database
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "2",
    name: "Test User",
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
]

export type User = {
  id: string
  name: string
  email: string
  role: string
}

export type Session = {
  user: User
}

// Login function
export async function login(email: string, password: string): Promise<User | null> {
  const user = users.find((user) => user.email === email && user.password === password)

  if (user) {
    // Create a session cookie
    const session = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }

    // Set the session cookie
    cookies().set("session", JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return session.user
  }

  return null
}

// Logout function
export async function logout() {
  cookies().delete("session")
}

// Get current session
export async function getSession(): Promise<Session | null> {
  const sessionCookie = cookies().get("session")

  if (sessionCookie) {
    try {
      return JSON.parse(sessionCookie.value)
    } catch (error) {
      return null
    }
  }

  return null
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession()
  return !!session
}

// Check if user is admin
export async function isAdmin(): Promise<boolean> {
  const session = await getSession()
  return !!session && session.user.role === "admin"
}

// Protect route - redirect if not authenticated
export async function protectRoute() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/login")
  }
}

// Protect admin route - redirect if not admin
export async function protectAdminRoute() {
  const admin = await isAdmin()

  if (!admin) {
    redirect("/login")
  }
}

