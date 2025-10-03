"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Gift,
  Heart,
  MessageSquare,
  Sparkles,
  Coins,
  Loader2,
} from "lucide-react";
import { redeemVoucher } from "@/lib/actions/payment-actions";
import { likeMerchant } from "@/lib/actions/points-actions";
import { useToast } from "@/hooks/use-toast";
import type { Merchant } from "@/lib/types";

interface MerchantPromotionsProps {
  merchant: Merchant;
}

export function MerchantPromotions({ merchant }: MerchantPromotionsProps) {
  const [voucherCode, setVoucherCode] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const { toast } = useToast();

  const handleRedeemVoucher = async () => {
    if (!voucherCode) {
      toast({
        title: "Invalid Code",
        description: "Please enter a voucher code",
        variant: "destructive",
      });
      return;
    }

    setIsRedeeming(true);

    try {
      const customerId = "CUST-001"; // Mock customer ID
      const result = await redeemVoucher(voucherCode, customerId);

      if (result.success) {
        toast({
          title: "Voucher Redeemed!",
          description: result.message,
        });
        setVoucherCode("");
      } else {
        toast({
          title: "Redemption Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while redeeming the voucher",
        variant: "destructive",
      });
    } finally {
      setIsRedeeming(false);
    }
  };

  const handleLikeMerchant = async () => {
    if (isLiked) return;

    setIsLiking(true);

    try {
      const customerId = "CUST-001"; // Mock customer ID
      const result = await likeMerchant(customerId, merchant.merchant_id);

      if (result.success) {
        setIsLiked(true);
        toast({
          title: "Business Liked!",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold text-brand">
          Sunrise Promotions
        </h2>
        <p className="mt-2 text-description">
          Redeem vouchers, earn points, and engage with {merchant.display_name}
        </p>
      </div>

      {/* Redeem Voucher */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            <CardTitle>Redeem Voucher</CardTitle>
          </div>
          <CardDescription>
            Enter your voucher code to earn Sunrise Points
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="voucher-code">Voucher Code</Label>
            <div className="flex gap-2">
              <Input
                id="voucher-code"
                placeholder="Enter voucher code"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                className="font-mono uppercase"
                disabled={isRedeeming}
              />
              <Button
                onClick={handleRedeemVoucher}
                disabled={!voucherCode || isRedeeming}
              >
                {isRedeeming ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Redeeming...
                  </>
                ) : (
                  "Redeem"
                )}
              </Button>
            </div>
          </div>
          <p className="text-sm text-description">
            Voucher codes are case-insensitive and can be found on your receipts
            or gift vouchers
          </p>
        </CardContent>
      </Card>

      {/* Active Promotions */}
      <Card className="border-2 border-accent/20 bg-accent/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <CardTitle>Active Promotions</CardTitle>
          </div>
          <CardDescription>
            Special offers from {merchant.display_name}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border-2 border-primary/20 bg-card p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    New Customer
                  </Badge>
                  <Badge variant="outline">Limited Time</Badge>
                </div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-brand">
                  15% Off First Service
                </h3>
                <p className="mt-1 text-sm text-description">
                  Get 15% off your first service when you book through Sunrise
                  Hub
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Coins className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary">
                    Earn 50 bonus points
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border-2 border-secondary/20 bg-card p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Loyalty Reward
                  </Badge>
                </div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-brand">
                  Refer a Friend
                </h3>
                <p className="mt-1 text-sm text-description">
                  Refer a friend and both of you get 100 Sunrise Points when
                  they make their first purchase
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Coins className="h-4 w-4 text-secondary" />
                  <span className="font-semibold text-secondary">
                    Earn 100 points each
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Engagement Actions */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Engage with {merchant.display_name}</CardTitle>
          <CardDescription>
            Show your support and stay connected
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              variant={isLiked ? "default" : "outline"}
              className="gap-2"
              onClick={handleLikeMerchant}
              disabled={isLiked || isLiking}
            >
              {isLiking ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Liking...
                </>
              ) : (
                <>
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
                  />
                  {isLiked ? "Liked" : "Like Business"}
                </>
              )}
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <MessageSquare className="h-4 w-4" />
              Send Message
            </Button>
          </div>

          {isLiked && (
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-center gap-2 text-sm">
                <Coins className="h-4 w-4 text-primary" />
                <span className="font-semibold text-primary">
                  +10 points earned for liking this business!
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Points Summary */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-sm text-description">
              Your Sunrise Points Balance
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <Coins className="h-6 w-6 text-primary" />
              <span className="font-serif text-4xl font-bold text-primary">
                1,200
              </span>
            </div>
            <Button variant="outline" className="mt-4 bg-transparent" asChild>
              <a href="/#points">View Points History</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
