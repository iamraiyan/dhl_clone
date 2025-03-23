export const mockTrackingData: Record<string, any> = {
  "123456789": {
    status: "In Transit",
    estimatedDelivery: "Mar 25, 2023",
    shipDate: "Mar 22, 2023",
    serviceType: "Express",
    origin: {
      name: "Global Express Shipping Center",
      address: "123 Shipping Lane",
      city: "New York",
      country: "USA",
    },
    destination: {
      name: "John Smith",
      address: "456 Delivery Street",
      city: "London",
      country: "UK",
    },
    trackingHistory: [
      {
        status: "Shipment picked up",
        location: "New York, USA",
        date: "Mar 22, 2023",
        time: "09:15 AM",
      },
      {
        status: "Departed facility",
        location: "New York, USA",
        date: "Mar 22, 2023",
        time: "02:30 PM",
      },
      {
        status: "Arrived at sort facility",
        location: "Newark, USA",
        date: "Mar 22, 2023",
        time: "04:45 PM",
      },
      {
        status: "Departed facility",
        location: "Newark, USA",
        date: "Mar 23, 2023",
        time: "01:20 AM",
      },
      {
        status: "International shipment release",
        location: "Newark, USA",
        date: "Mar 23, 2023",
        time: "03:40 AM",
      },
      {
        status: "In Transit",
        location: "In Transit to Destination",
        date: "Mar 24, 2023",
        time: "10:15 AM",
      },
    ],
  },
  "987654321": {
    status: "Delivered",
    estimatedDelivery: "Mar 20, 2023",
    shipDate: "Mar 18, 2023",
    serviceType: "Standard",
    origin: {
      name: "Global Express Distribution Center",
      address: "789 Shipping Avenue",
      city: "Los Angeles",
      country: "USA",
    },
    destination: {
      name: "Jane Doe",
      address: "321 Recipient Road",
      city: "Toronto",
      country: "Canada",
    },
    trackingHistory: [
      {
        status: "Shipment picked up",
        location: "Los Angeles, USA",
        date: "Mar 18, 2023",
        time: "11:30 AM",
      },
      {
        status: "Departed facility",
        location: "Los Angeles, USA",
        date: "Mar 18, 2023",
        time: "04:15 PM",
      },
      {
        status: "Arrived at sort facility",
        location: "San Francisco, USA",
        date: "Mar 19, 2023",
        time: "01:45 AM",
      },
      {
        status: "Customs clearance",
        location: "San Francisco, USA",
        date: "Mar 19, 2023",
        time: "09:20 AM",
      },
      {
        status: "Departed facility",
        location: "San Francisco, USA",
        date: "Mar 19, 2023",
        time: "11:50 AM",
      },
      {
        status: "Arrived at destination",
        location: "Toronto, Canada",
        date: "Mar 20, 2023",
        time: "08:30 AM",
      },
      {
        status: "Out for delivery",
        location: "Toronto, Canada",
        date: "Mar 20, 2023",
        time: "09:45 AM",
      },
      {
        status: "Delivered",
        location: "Toronto, Canada",
        date: "Mar 20, 2023",
        time: "02:15 PM",
      },
    ],
  },
  "456789123": {
    status: "Processing",
    estimatedDelivery: "Mar 28, 2023",
    shipDate: "Mar 24, 2023",
    serviceType: "Economy",
    origin: {
      name: "Global Express Warehouse",
      address: "567 Shipping Boulevard",
      city: "Miami",
      country: "USA",
    },
    destination: {
      name: "Carlos Rodriguez",
      address: "890 Recipient Street",
      city: "Mexico City",
      country: "Mexico",
    },
    trackingHistory: [
      {
        status: "Shipping label created",
        location: "Miami, USA",
        date: "Mar 24, 2023",
        time: "10:00 AM",
      },
      {
        status: "Processing",
        location: "Miami, USA",
        date: "Mar 24, 2023",
        time: "02:30 PM",
      },
    ],
  },
}

