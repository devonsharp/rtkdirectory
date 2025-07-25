
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Grid3X3, List } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import ListingsTable from "@/components/ListingsTable";
import { ArrowLeft } from "lucide-react";

// Enhanced sample data with new fields - reordered to put Global first
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

const continentNames: { [key: string]: string } = {
  "global": "Global",
  "north-america": "North America",
  "europe": "Europe", 
  "asia": "Asia",
  "south-america": "South America",
  "africa": "Africa",
  "oceania": "Oceania"
};

const ContinentDirectory = () => {
  const { continent } = useParams<{ continent: string }>();
  const continentName = continentNames[continent || ""] || "Unknown";
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  
  const filteredListings = sampleListings.filter(
    listing => listing.continent === continent
  );

  const getHeading = () => {
    if (continent === "global") {
      return "Global RTK Correction Service Providers";
    }
    return `RTK Correction Service Providers in ${continentName}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to="/rtk-service-providers"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Directory
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getHeading()}
        </h1>
        <p className="text-xl text-gray-600">
          {continentName === "Global" 
            ? "Browse RTK correction service providers with worldwide coverage."
            : `Browse RTK correction service providers in ${continentName}.`
          }
        </p>
      </div>

      {filteredListings.length > 0 ? (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              RTK Service Providers ({filteredListings.length})
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
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <ListingsTable listings={filteredListings} />
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No listings found for {continentName}
          </h2>
          <p className="text-gray-600 mb-6">
            Be the first RTK service provider to list in this region!
          </p>
          <Link to="/submit-listing">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit Your Listing
            </Button>
          </Link>
        </div>
      )}

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Provide RTK services in {continentName}?
        </h3>
        <p className="text-gray-600 mb-6">
          Join our directory and connect with professionals in your region.
        </p>
        <Link to="/submit-listing">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Submit Your Listing
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContinentDirectory;
