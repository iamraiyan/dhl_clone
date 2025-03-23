"use client"

import { useState } from "react"
import { Check, MessageSquare, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

// Mock feedback data
const initialFeedback = {
  pending: [
    {
      id: "FB001",
      customer: "John Smith",
      customerEmail: "john.smith@example.com",
      rating: 5,
      comment: "Excellent service! My package arrived ahead of schedule and in perfect condition.",
      date: "2023-07-15",
      shipmentId: "SHP78945612",
    },
    {
      id: "FB002",
      customer: "Sarah Johnson",
      customerEmail: "sarah.johnson@example.com",
      rating: 4,
      comment: "Good service overall. The tracking was accurate and helpful.",
      date: "2023-07-14",
      shipmentId: "SHP45612378",
    },
    {
      id: "FB003",
      customer: "Michael Brown",
      customerEmail: "michael.brown@example.com",
      rating: 3,
      comment: "Average experience. Delivery was on time but the package was slightly damaged.",
      date: "2023-07-14",
      shipmentId: "SHP12378945",
    },
    {
      id: "FB004",
      customer: "Emily Davis",
      customerEmail: "emily.davis@example.com",
      rating: 5,
      comment: "Very professional service. The delivery person was courteous and helpful.",
      date: "2023-07-13",
      shipmentId: "SHP89456123",
    },
  ],
  approved: [
    {
      id: "FB005",
      customer: "David Wilson",
      customerEmail: "david.wilson@example.com",
      rating: 5,
      comment: "Outstanding service! Will definitely use again for my shipping needs.",
      date: "2023-07-12",
      shipmentId: "SHP56789012",
    },
    {
      id: "FB006",
      customer: "Jennifer Martinez",
      customerEmail: "jennifer.martinez@example.com",
      rating: 4,
      comment: "Reliable and efficient shipping service. No complaints.",
      date: "2023-07-11",
      shipmentId: "SHP34567890",
    },
  ],
  rejected: [
    {
      id: "FB007",
      customer: "Robert Taylor",
      customerEmail: "robert.taylor@example.com",
      rating: 1,
      comment: "Terrible service! My package was delivered to the wrong address and customer service was unhelpful.",
      date: "2023-07-10",
      shipmentId: "SHP23456789",
    },
    {
      id: "FB008",
      customer: "Lisa Anderson",
      customerEmail: "lisa.anderson@example.com",
      rating: 2,
      comment: "Poor experience. The delivery was late and the package was damaged.",
      date: "2023-07-09",
      shipmentId: "SHP12345678",
    },
  ],
}

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState(initialFeedback)
  const { toast } = useToast()

  const handleApprove = (id: string) => {
    const feedbackItem = feedback.pending.find((item) => item.id === id)
    if (!feedbackItem) return

    setFeedback({
      ...feedback,
      pending: feedback.pending.filter((item) => item.id !== id),
      approved: [...feedback.approved, feedbackItem],
    })

    toast({
      title: "Feedback approved",
      description: "The feedback has been approved and is now visible to users.",
    })
  }

  const handleReject = (id: string) => {
    const feedbackItem = feedback.pending.find((item) => item.id === id)
    if (!feedbackItem) return

    setFeedback({
      ...feedback,
      pending: feedback.pending.filter((item) => item.id !== id),
      rejected: [...feedback.rejected, feedbackItem],
    })

    toast({
      title: "Feedback rejected",
      description: "The feedback has been rejected and will not be displayed.",
    })
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  const renderFeedbackCard = (item: any, actions = false) => (
    <Card key={item.id} className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{item.customer}</CardTitle>
            <CardDescription>{item.customerEmail}</CardDescription>
          </div>
          <div className="flex items-center">{renderStars(item.rating)}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MessageSquare className="h-5 w-5 text-gray-400 mt-0.5" />
            <p className="text-gray-700">{item.comment}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              <span>Shipment: {item.shipmentId}</span>
              <span className="mx-2">•</span>
              <span>Date: {item.date}</span>
            </div>
            {actions && (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => handleApprove(item.id)}
                >
                  <Check className="mr-1 h-4 w-4" /> Approve
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50"
                  onClick={() => handleReject(item.id)}
                >
                  <X className="mr-1 h-4 w-4" /> Reject
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Feedback Management</h1>

      <Tabs defaultValue="pending">
        <TabsList className="mb-4">
          <TabsTrigger value="pending">
            Pending{" "}
            <span className="ml-1 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
              {feedback.pending.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved{" "}
            <span className="ml-1 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
              {feedback.approved.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected{" "}
            <span className="ml-1 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
              {feedback.rejected.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Feedback</CardTitle>
                <CardDescription>Review and moderate customer feedback before publishing.</CardDescription>
              </CardHeader>
              <CardContent>
                {feedback.pending.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No pending feedback to review</div>
                ) : (
                  feedback.pending.map((item) => renderFeedbackCard(item, true))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="approved">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Approved Feedback</CardTitle>
                <CardDescription>Feedback that has been approved and is visible to users.</CardDescription>
              </CardHeader>
              <CardContent>
                {feedback.approved.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No approved feedback</div>
                ) : (
                  feedback.approved.map((item) => renderFeedbackCard(item))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rejected">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Feedback</CardTitle>
                <CardDescription>Feedback that has been rejected and is not visible to users.</CardDescription>
              </CardHeader>
              <CardContent>
                {feedback.rejected.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No rejected feedback</div>
                ) : (
                  feedback.rejected.map((item) => renderFeedbackCard(item))
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

