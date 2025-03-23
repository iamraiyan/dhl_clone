"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

interface StripeProps {
  children: React.ReactNode
  options: {
    mode: "payment" | "subscription"
    amount?: number
    currency?: string
    paymentIntentId?: string
  }
  className?: string
}

export function Stripe({ children, options, className }: StripeProps) {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    // Mock client secret for demo purposes
    setClientSecret("demo_secret_key")

    // In a real app, you would fetch the client secret from your server
    // Example:
    // fetch("/api/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(options),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret))

    // Initialize Stripe (in a real app, use your actual publishable key)
    setStripePromise(loadStripe("pk_test_demo"))
  }, [options])

  return (
    <div className={className}>
      {clientSecret && stripePromise ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          {children}
        </Elements>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse text-center">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  )
}

