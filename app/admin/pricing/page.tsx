"use client"

import { useState } from "react"
import { Edit, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

// Mock pricing data
const initialPricing = {
  domestic: [
    { id: "DOM1", weight: "0-1 kg", standard: 10.99, express: 15.99, economy: 8.99 },
    { id: "DOM2", weight: "1-5 kg", standard: 15.99, express: 22.99, economy: 12.99 },
    { id: "DOM3", weight: "5-10 kg", standard: 25.99, express: 35.99, economy: 20.99 },
    { id: "DOM4", weight: "10-20 kg", standard: 40.99, express: 55.99, economy: 35.99 },
    { id: "DOM5", weight: "20+ kg", standard: 60.99, express: 80.99, economy: 50.99 },
  ],
  international: [
    { id: "INT1", weight: "0-1 kg", standard: 25.99, express: 35.99, economy: 20.99 },
    { id: "INT2", weight: "1-5 kg", standard: 45.99, express: 65.99, economy: 35.99 },
    { id: "INT3", weight: "5-10 kg", standard: 75.99, express: 95.99, economy: 60.99 },
    { id: "INT4", weight: "10-20 kg", standard: 120.99, express: 150.99, economy: 100.99 },
    { id: "INT5", weight: "20+ kg", standard: 180.99, express: 220.99, economy: 150.99 },
  ],
}

export default function PricingPage() {
  const [pricing, setPricing] = useState(initialPricing)
  const [editMode, setEditMode] = useState(false)
  const [editedPricing, setEditedPricing] = useState(initialPricing)
  const { toast } = useToast()

  const handlePriceChange = (category: "domestic" | "international", id: string, field: string, value: string) => {
    const numValue = Number.parseFloat(value)
    if (isNaN(numValue)) return

    setEditedPricing({
      ...editedPricing,
      [category]: editedPricing[category].map((item) => (item.id === id ? { ...item, [field]: numValue } : item)),
    })
  }

  const savePricing = () => {
    setPricing(editedPricing)
    setEditMode(false)

    toast({
      title: "Pricing updated",
      description: "The pricing changes have been saved successfully.",
    })
  }

  const cancelEdit = () => {
    setEditedPricing(pricing)
    setEditMode(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pricing Management</h1>
        {editMode ? (
          <div className="flex gap-2">
            <Button variant="outline" onClick={cancelEdit}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={savePricing}>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </div>
        ) : (
          <Button className="bg-[#D40511] hover:bg-[#b10410]" onClick={() => setEditMode(true)}>
            <Edit className="mr-2 h-4 w-4" /> Edit Pricing
          </Button>
        )}
      </div>

      <Tabs defaultValue="domestic">
        <TabsList className="mb-4">
          <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
          <TabsTrigger value="international">International Shipping</TabsTrigger>
        </TabsList>

        <TabsContent value="domestic">
          <Card>
            <CardHeader>
              <CardTitle>Domestic Shipping Rates</CardTitle>
              <CardDescription>Manage pricing for shipments within the country.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Weight Range</TableHead>
                    <TableHead>Economy ($)</TableHead>
                    <TableHead>Standard ($)</TableHead>
                    <TableHead>Express ($)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(editMode ? editedPricing.domestic : pricing.domestic).map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.weight}</TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            type="number"
                            value={item.economy}
                            onChange={(e) => handlePriceChange("domestic", item.id, "economy", e.target.value)}
                            step="0.01"
                            min="0"
                            className="w-24"
                          />
                        ) : (
                          `$${item.economy.toFixed(2)}`
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            type="number"
                            value={item.standard}
                            onChange={(e) => handlePriceChange("domestic", item.id, "standard", e.target.value)}
                            step="0.01"
                            min="0"
                            className="w-24"
                          />
                        ) : (
                          `$${item.standard.toFixed(2)}`
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            type="number"
                            value={item.express}
                            onChange={(e) => handlePriceChange("domestic", item.id, "express", e.target.value)}
                            step="0.01"
                            min="0"
                            className="w-24"
                          />
                        ) : (
                          `$${item.express.toFixed(2)}`
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="international">
          <Card>
            <CardHeader>
              <CardTitle>International Shipping Rates</CardTitle>
              <CardDescription>Manage pricing for international shipments.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Weight Range</TableHead>
                    <TableHead>Economy ($)</TableHead>
                    <TableHead>Standard ($)</TableHead>
                    <TableHead>Express ($)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(editMode ? editedPricing.international : pricing.international).map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.weight}</TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            type="number"
                            value={item.economy}
                            onChange={(e) => handlePriceChange("international", item.id, "economy", e.target.value)}
                            step="0.01"
                            min="0"
                            className="w-24"
                          />
                        ) : (
                          `$${item.economy.toFixed(2)}`
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            type="number"
                            value={item.standard}
                            onChange={(e) => handlePriceChange("international", item.id, "standard", e.target.value)}
                            step="0.01"
                            min="0"
                            className="w-24"
                          />
                        ) : (
                          `$${item.standard.toFixed(2)}`
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode ? (
                          <Input
                            type="number"
                            value={item.express}
                            onChange={(e) => handlePriceChange("international", item.id, "express", e.target.value)}
                            step="0.01"
                            min="0"
                            className="w-24"
                          />
                        ) : (
                          `$${item.express.toFixed(2)}`
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Custom Pricing Rules</CardTitle>
          <CardDescription>Set up special pricing rules for specific scenarios.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="discount-type">Discount Type</Label>
                <Select defaultValue="percentage">
                  <SelectTrigger>
                    <SelectValue placeholder="Select discount type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="fixed">Fixed Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount-value">Discount Value</Label>
                <Input id="discount-value" type="number" placeholder="10" min="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount-code">Discount Code (Optional)</Label>
                <Input id="discount-code" placeholder="SUMMER2023" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="min-order">Minimum Order Value</Label>
                <Input id="min-order" type="number" placeholder="100" min="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <Input id="expiry-date" type="date" />
              </div>
            </div>

            <Button className="bg-[#D40511] hover:bg-[#b10410]">Add Pricing Rule</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

