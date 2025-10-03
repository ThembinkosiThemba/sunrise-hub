"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, MessageCircle, Mail, Share2 } from "lucide-react"
import type { Merchant, Service } from "@/lib/types"

interface MerchantServicesProps {
  merchant: Merchant
}

// Mock services data with images
const mockServices: Service[] = [
  {
    id: "SVC-001",
    service_name: "Box Braids",
    description: "Professional box braids in various sizes. Long-lasting style that protects your natural hair.",
    pricing: "E250 - E450",
    images: [
      "/box-braids-hairstyle.png",
      "/box-braids-side-view.jpg",
      "/box-braids-back-view.jpg",
      "/box-braids-styling.jpg",
      "/box-braids-close-up.jpg",
      "/box-braids-different-colors.jpg",
      "/box-braids-with-beads.jpg",
    ],
    variants: ["Small", "Medium", "Large"],
    display_order: 1,
    is_active: true,
  },
  {
    id: "SVC-002",
    service_name: "Cornrows",
    description: "Traditional cornrow braiding with modern designs. Perfect for any occasion.",
    pricing: "E150 - E300",
    images: [
      "/cornrows-hairstyle.jpg",
      "/cornrows-pattern.jpg",
      "/cornrows-design.jpg",
      "/cornrows-side-view.jpg",
      "/cornrows-back-view.jpg",
      "/cornrows-styling.jpg",
      "/cornrows-with-extensions.jpg",
    ],
    variants: ["Simple", "Complex Design"],
    display_order: 2,
    is_active: true,
  },
  {
    id: "SVC-003",
    service_name: "Weave Installation",
    description: "High-quality weave installation with natural-looking results. Various textures available.",
    pricing: "E400 - E800",
    images: [
      "/weave-hairstyle.jpg",
      "/weave-installation.jpg",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    variants: ["Straight", "Curly", "Wavy"],
    display_order: 3,
    is_active: true,
  },
  {
    id: "SVC-004",
    service_name: "Hair Coloring",
    description: "Professional hair coloring services with premium products. Custom colors available.",
    pricing: "E200 - E500",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    variants: ["Full Color", "Highlights", "Ombre"],
    display_order: 4,
    is_active: true,
  },
  {
    id: "SVC-005",
    service_name: "Locs Maintenance",
    description: "Expert locs retwisting and maintenance. Keep your locs looking fresh and healthy.",
    pricing: "E180 - E350",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    variants: ["Retwist", "Full Maintenance", "Styling"],
    display_order: 5,
    is_active: true,
  },
  {
    id: "SVC-006",
    service_name: "Bridal Hair",
    description: "Elegant bridal hairstyling for your special day. Includes trial session.",
    pricing: "E600 - E1200",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    variants: ["Classic", "Modern", "Traditional"],
    display_order: 6,
    is_active: true,
  },
]

export function MerchantServices({ merchant }: MerchantServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Services</h2>
            <p className="mt-1 text-muted-foreground">Browse our {mockServices.length} professional services</p>
          </div>
        </div>

        {/* Services Grid - eCommerce Style */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockServices.map((service) => (
            <Card
              key={service.id}
              className="group cursor-pointer overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={service.images[0] || "/placeholder.svg"}
                  alt={service.service_name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {service.variants && service.variants.length > 0 && (
                  <Badge className="absolute right-2 top-2 bg-card/90 text-card-foreground backdrop-blur-sm">
                    {service.variants.length} options
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1">
                  {service.service_name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-primary">{service.pricing}</span>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-3xl">{selectedService.service_name}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="grid gap-4">
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={selectedService.images[0] || "/placeholder.svg"}
                      alt={selectedService.service_name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {selectedService.images.slice(1, 7).map((image, index) => (
                      <div key={index} className="relative aspect-square overflow-hidden rounded-md bg-muted">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${selectedService.service_name} ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Description</h3>
                    <p className="text-muted-foreground">{selectedService.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Pricing</h3>
                    <p className="text-2xl font-bold text-primary">{selectedService.pricing}</p>
                  </div>

                  {selectedService.variants && selectedService.variants.length > 0 && (
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">Available Options</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.variants.map((variant) => (
                          <Badge key={variant} variant="secondary" className="text-sm">
                            {variant}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Actions */}
                <div className="border-t border-border pt-6">
                  <h3 className="mb-4 font-semibold text-foreground">Contact {merchant.display_name}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button className="gap-2" size="lg">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent" size="lg">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent" size="lg">
                      <Mail className="h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent" size="lg">
                      <Share2 className="h-4 w-4" />
                      Share Service
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
