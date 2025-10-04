"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MerchantCard } from "@/components/merchant-card";
import { mockMerchants, INDUSTRIES } from "@/lib/mock-data";
import { Header } from "@/components/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function MerchantsPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  const filteredMerchants = useMemo(() => {
    return mockMerchants.filter((merchant) => {
      const matchesSearch =
        searchQuery === "" ||
        merchant.display_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        merchant.merchant_id
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        merchant.short_bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        merchant.branches.some((branch) =>
          branch.address.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesIndustry =
        selectedIndustry === "all" ||
        merchant.industry.toLowerCase() === selectedIndustry.toLowerCase();

      return matchesSearch && matchesIndustry;
    });
  }, [searchQuery, selectedIndustry]);

  return (
    <div className="min-h-screen">
      <Header showNavigation={false} />

      {/* Search Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Find Merchants
          </h1>
          <p className="mt-2 text-muted-foreground">
            Search by merchant code, name, industry, or location
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative md:col-span-2">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name or merchant code..."
                className="h-12 pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select
              value={selectedIndustry}
              onValueChange={setSelectedIndustry}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Filter by industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {INDUSTRIES.map((industry) => (
                  <SelectItem key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Merchants Grid */}
      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredMerchants.length} verified merchants
          </p>
        </div>

        {filteredMerchants.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMerchants.map((merchant) => (
              <MerchantCard key={merchant.merchant_id} merchant={merchant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No merchants found matching your search.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
