
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Grid3X3, List } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import RegionBrowser from "@/components/RegionBrowser";
import ListingsTable from "@/components/ListingsTable";
import DirectoryCTA from "@/components/DirectoryCTA";
import FeaturedServicesBanner from "@/components/FeaturedServicesBanner";

const sampleListings = [
  {
    id: 4,
    name: "GlobalRTK Pro",
    company: "Global Positioning Solutions",
    region: "Global",
    continent: "global",
    country: "Multiple",
    email: "contact@globalrtkpro.com",
    website: "https://globalrtkpro.com",
    description: "Worldwide RTK correction service with satellite and ground-based reference stations providing global coverage.",
    pricing: "paid" as const,
    priceDetails: "$49.99/month",
    coverageMapLink: "https://globalrtkpro.com/global-coverage",
    freeTrialLink: "https://globalrtkpro.com/free-trial",
    providerInfo: "Global network with 500+ reference stations worldwide"
  },
  {
    id: 1,
    name: "PrecisionRTK Solutions",
    company: "PrecisionRTK Solutions LLC",
    region: "North America",
    continent: "north-america",
    country: "United States",
    email: "contact@precisionrtk.com",
    website: "https://precisionrtk.com",
    description: "Professional RTK correction services covering the entire North American region with 24/7 support and sub-centimeter accuracy.",
    pricing: "paid" as const,
    priceDetails: "$29.99/month",
    coverageMapLink: "https://precisionrtk.com/coverage",
    freeTrialLink: "https://precisionrtk.com/trial",
    providerInfo: "Established in 2015, serving 10,000+ professional users"
  },
  {
    id: 2,
    name: "EuroRTK Network",
    company: "European RTK Services",
    region: "Europe",
    continent: "europe",
    country: "Germany",
    email: "info@eurortk.eu", 
    website: "https://eurortk.eu",
    description: "Comprehensive RTK correction network covering all EU countries with real-time corrections and historical data access.",
    pricing: "paid" as const,
    priceDetails: "€24.99/month",
    coverageMapLink: "https://eurortk.eu/coverage-map",
    freeTrialLink: null,
    providerInfo: "Leading European provider with 99.9% uptime guarantee"
  },
  {
    id: 3,
    name: "AsiaPac GNSS",
    company: "Asia Pacific GNSS Solutions",
    region: "Asia Pacific",
    continent: "asia",
    country: "Japan",
    email: "support@asiapacgnss.com",
    website: "https://asiapacgnss.com", 
    description: "Leading RTK correction provider in the Asia Pacific region serving surveying and drone mapping professionals.",
    pricing: "free" as const,
    priceDetails: "Free with premium upgrades available",
    coverageMapLink: "https://asiapacgnss.com/map",
    freeTrialLink: null,
    providerInfo: "Open-source community driven with enterprise support options"
  }
];

const DirectoryPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          RTK Correction Service Directory
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find trusted RTK correction service providers worldwide. Browse by region 
          or search for specific services in your area.
        </p>
      </div>

      <RegionBrowser />

      {/* Listings */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            All RTK Service Providers ({sampleListings.length})
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">View:</span>
            <Toggle
              pressed={viewMode === "list"}
              onPressedChange={() => setViewMode("list")}
              aria-label="Table view"
              className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-600"
            >
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={viewMode === "grid"}
              onPressedChange={() => setViewMode("grid")}
              aria-label="Grid view"
              className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-600"
            >
              <Grid3X3 className="h-4 w-4" />
            </Toggle>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <ListingsTable listings={sampleListings} />
        )}
      </div>

      <FeaturedServicesBanner />

      <DirectoryCTA />
    </div>
  );
};

export default DirectoryPage;
