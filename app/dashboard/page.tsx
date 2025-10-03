import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Package,
  DollarSign,
  Settings,
  TrendingUp,
  Eye,
  MessageSquare,
  Heart,
  Plus,
  Edit,
  Trash2,
  BarChart3,
} from "lucide-react"
import { merchants, services, transactions, pointsActivities } from "@/lib/mock-data"
import { VerificationBadge } from "@/components/verification-badge"

export default function DashboardPage() {
  // Mock: Get current merchant (in real app, from auth session)
  const currentMerchant = merchants[0]
  const merchantServices = services.filter((s) => s.merchantId === currentMerchant.merchantId)
  const merchantTransactions = transactions.filter((t) => t.merchantId === currentMerchant.merchantId)
  const merchantPoints = pointsActivities.filter((p) => p.merchantId === currentMerchant.merchantId)

  // Calculate stats
  const totalRevenue = merchantTransactions
    .filter((t) => t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)
  const totalViews = 1247 // Mock data
  const totalLikes = 89 // Mock data
  const totalMessages = 34 // Mock data

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-charcoal/10 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sunrise to-sunrise-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-charcoal">Sunrise Hub</h1>
                <p className="text-xs text-charcoal/60">Merchant Dashboard</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/merchants/${currentMerchant.merchantId}`}>
                  <Eye className="h-4 w-4 mr-2" />
                  View Profile
                </Link>
              </Button>
              <Avatar>
                <AvatarImage src={currentMerchant.logoUrl || "/placeholder.svg"} alt={currentMerchant.displayName} />
                <AvatarFallback>{currentMerchant.displayName[0]}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-2">
                Welcome back, {currentMerchant.displayName}
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-charcoal/60">Merchant ID: {currentMerchant.merchantId}</p>
                <VerificationBadge status={currentMerchant.verificationStatus} />
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-charcoal/60 mb-1">Profile Score</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 bg-charcoal/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sunrise to-forest rounded-full"
                    style={{ width: `${currentMerchant.profileScore}%` }}
                  />
                </div>
                <span className="font-bold text-charcoal">{currentMerchant.profileScore}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal/60">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-forest" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-charcoal">E{totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-forest flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal/60">Profile Views</CardTitle>
              <Eye className="h-4 w-4 text-sunrise" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-charcoal">{totalViews}</div>
              <p className="text-xs text-sunrise flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +8.2% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal/60">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-sunrise" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-charcoal">{totalMessages}</div>
              <p className="text-xs text-charcoal/60 mt-1">3 unread messages</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-charcoal/60">Likes</CardTitle>
              <Heart className="h-4 w-4 text-sunrise" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-charcoal">{totalLikes}</div>
              <p className="text-xs text-forest flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +15 this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="bg-white border border-charcoal/10">
            <TabsTrigger
              value="services"
              className="data-[state=active]:bg-sunrise/10 data-[state=active]:text-sunrise"
            >
              <Package className="h-4 w-4 mr-2" />
              Services
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-sunrise/10 data-[state=active]:text-sunrise"
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-sunrise/10 data-[state=active]:text-sunrise"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-sunrise/10 data-[state=active]:text-sunrise"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif text-2xl text-charcoal">Your Services</CardTitle>
                    <CardDescription>Manage your service listings ({merchantServices.length}/24)</CardDescription>
                  </div>
                  <Button className="bg-sunrise hover:bg-sunrise-dark text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Service
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {merchantServices.map((service) => (
                    <div
                      key={service.serviceId}
                      className="flex items-center gap-4 p-4 border border-charcoal/10 rounded-lg hover:border-sunrise/50 transition-colors"
                    >
                      <img
                        src={service.images[0] || "/placeholder.svg"}
                        alt={service.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-charcoal mb-1">{service.name}</h3>
                        <p className="text-sm text-charcoal/60 mb-2 line-clamp-1">{service.description}</p>
                        <div className="flex items-center gap-4 text-xs text-charcoal/60">
                          <span>{service.images.length} images</span>
                          <span>•</span>
                          <span>{service.variants?.length || 0} variants</span>
                          <span>•</span>
                          <span className="font-semibold text-forest">{service.pricing}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-charcoal">Recent Transactions</CardTitle>
                <CardDescription>View your payment history and earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {merchantTransactions.map((transaction) => (
                    <div
                      key={transaction.transactionRef}
                      className="flex items-center justify-between p-4 border border-charcoal/10 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            transaction.status === "completed" ? "bg-forest/10" : "bg-sunrise/10"
                          }`}
                        >
                          <DollarSign
                            className={`h-5 w-5 ${transaction.status === "completed" ? "text-forest" : "text-sunrise"}`}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal">{transaction.transactionType.replace("_", " ")}</p>
                          <p className="text-sm text-charcoal/60">{transaction.transactionRef}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-charcoal">E{transaction.amount.toFixed(2)}</p>
                        <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="mt-1">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-charcoal">Performance Overview</CardTitle>
                  <CardDescription>Your business metrics at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
                    <span className="text-charcoal/60">Total Services</span>
                    <span className="font-bold text-charcoal">{merchantServices.length}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
                    <span className="text-charcoal/60">Total Transactions</span>
                    <span className="font-bold text-charcoal">{merchantTransactions.length}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
                    <span className="text-charcoal/60">Conversion Rate</span>
                    <span className="font-bold text-forest">12.4%</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-charcoal/60">Avg. Transaction Value</span>
                    <span className="font-bold text-charcoal">
                      E{(totalRevenue / merchantTransactions.length).toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-charcoal">Customer Engagement</CardTitle>
                  <CardDescription>How customers interact with your profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
                    <span className="text-charcoal/60">Profile Shares</span>
                    <span className="font-bold text-charcoal">47</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
                    <span className="text-charcoal/60">Service Shares</span>
                    <span className="font-bold text-charcoal">123</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
                    <span className="text-charcoal/60">WhatsApp Clicks</span>
                    <span className="font-bold text-forest">89</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-charcoal/60">Phone Clicks</span>
                    <span className="font-bold text-charcoal">56</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-charcoal">Business Settings</CardTitle>
                <CardDescription>Manage your business profile and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-charcoal mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-charcoal/60 mb-1 block">Display Name</label>
                        <p className="font-medium text-charcoal">{currentMerchant.displayName}</p>
                      </div>
                      <div>
                        <label className="text-sm text-charcoal/60 mb-1 block">Industry</label>
                        <p className="font-medium text-charcoal">{currentMerchant.industry}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-charcoal/60 mb-1 block">Bio</label>
                      <p className="text-charcoal">{currentMerchant.shortBio}</p>
                    </div>
                    <Button variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>

                <div className="border-t border-charcoal/10 pt-6">
                  <h3 className="font-semibold text-charcoal mb-4">Administrators</h3>
                  <div className="space-y-3">
                    {currentMerchant.administrators.map((admin, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-charcoal/10 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{admin.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-charcoal">{admin.name}</p>
                            <p className="text-sm text-charcoal/60">{admin.role}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full bg-transparent">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Administrator
                    </Button>
                  </div>
                </div>

                <div className="border-t border-charcoal/10 pt-6">
                  <h3 className="font-semibold text-charcoal mb-4">Branches</h3>
                  <div className="space-y-3">
                    {currentMerchant.branches.map((branch, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-charcoal/10 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-charcoal">{branch.name}</p>
                          <p className="text-sm text-charcoal/60">{branch.address}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full bg-transparent">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Branch
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
