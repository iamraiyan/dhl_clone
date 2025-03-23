"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function TrackingForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [trackingNumber, setTrackingNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }

    // Reset error state
    setError(null)
    setLoading(true)

    // Simulate API validation
    setTimeout(() => {
      setLoading(false)

      // Simple validation - in a real app, this would be more sophisticated
      if (trackingNumber.length < 6) {
        setError("Invalid tracking number format")
        toast({
          variant: "destructive",
          title: "Invalid tracking number",
          description: "Please enter a valid tracking number and try again.",
        })
      } else {
        // Navigate to tracking page
        router.push(`/track/${trackingNumber}`)
      }
    }, 1000)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Track your shipment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            placeholder="Enter your tracking number(s)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className={`pl-10 ${error ? "border-red-500" : ""}`}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <p className="text-sm text-gray-500">Enter up to 10 tracking numbers, separated by commas</p>
        <Button type="submit" className="w-full md:w-auto bg-[#D40511] hover:bg-[#b10410]" disabled={loading}>
          {loading ? "Tracking..." : "Track"}
        </Button>
      </form>
    </div>
  )
}

