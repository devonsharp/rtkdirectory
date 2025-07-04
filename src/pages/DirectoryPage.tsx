
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ListingCard from "@/components/ListingCard";

// Enhanced sample data with new fields
const sampleListings = [
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
    pricing: "paid",
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
    pricing: "paid",
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
    pricing: "free",
    priceDetails: "Free with premium upgrades available",
    coverageMapLink: "https://asiapacgnss.com/map",
    freeTrialLink: null,
    providerInfo: "Open-source community driven with enterprise support options"
  },
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
    pricing: "paid",
    priceDetails: "$49.99/month",
    coverageMapLink: "https://globalrtkpro.com/global-coverage",
    freeTrialLink: "https://globalrtkpro.com/free-trial",
    providerInfo: "Global network with 500+ reference stations worldwide"
  }
];

const continents = [
  { name: "North America", slug: "north-america", count: 1 },
  { name: "Europe", slug: "europe", count: 1 },
  { name: "Asia", slug: "asia", count: 1 },
  { name: "South America", slug: "south-america", count: 0 },
  { name: "Africa", slug: "africa", count: 0 },
  { name: "Oceania", slug: "oceania", count: 0 },
  { name: "Global", slug: "global", count: 1 }
];

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pricingFilter, setPricingFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  
  const filteredListings = sampleListings.filter(listing => {
    const matchesSearch = listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPricing = pricingFilter === "all" || listing.pricing === pricingFilter;
    const matchesRegion = regionFilter === "all" || listing.continent === regionFilter;
    
    return matchesSearch && matchesPricing && matchesRegion;
  });

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

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <Input
          type="text"
          placeholder="Search by service name, region, country, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
        
        <div className="flex flex-wrap justify-center gap-4">
          <Select value={pricingFilter} onValueChange={setPricingFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Pricing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pricing</SelectItem>
              <SelectItem value="free">Free Services</SelectItem>
              <SelectItem value="paid">Paid Services</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={regionFilter} onValueChange={setRegionFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="global">Global</SelectItem>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="south-america">South America</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Browse by Continent */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse by Region
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4">
          {continents.map((continent) => (
            <Link key={continent.slug} to={`/directory/${continent.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 text-sm">{continent.name}</h3>
                  <p className="text-xs text-gray-600">
                    {continent.count} service{continent.count !== 1 ? 's' : ''}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          RTK Service Providers ({filteredListings.length})
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Don't see your service listed?
        </h3>
        <p className="text-gray-600 mb-6">
          Join our directory and connect with professionals who need RTK correction services.
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

export default DirectoryPage;
