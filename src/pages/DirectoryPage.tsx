
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ListingCard from "@/components/ListingCard";

// Sample data - in a real app this would come from a database
const sampleListings = [
  {
    id: 1,
    name: "PrecisionRTK Solutions",
    company: "PrecisionRTK Solutions LLC",
    region: "North America",
    continent: "north-america",
    email: "contact@precisionrtk.com",
    website: "https://precisionrtk.com",
    description: "Professional RTK correction services covering the entire North American region with 24/7 support and sub-centimeter accuracy."
  },
  {
    id: 2,
    name: "EuroRTK Network",
    company: "European RTK Services",
    region: "Europe",
    continent: "europe",
    email: "info@eurortk.eu", 
    website: "https://eurortk.eu",
    description: "Comprehensive RTK correction network covering all EU countries with real-time corrections and historical data access."
  },
  {
    id: 3,
    name: "AsiaPac GNSS",
    company: "Asia Pacific GNSS Solutions",
    region: "Asia Pacific",
    continent: "asia",
    email: "support@asiapacgnss.com",
    website: "https://asiapacgnss.com", 
    description: "Leading RTK correction provider in the Asia Pacific region serving surveying and drone mapping professionals."
  }
];

const continents = [
  { name: "North America", slug: "north-america", count: 1 },
  { name: "Europe", slug: "europe", count: 1 },
  { name: "Asia", slug: "asia", count: 1 },
  { name: "South America", slug: "south-america", count: 0 },
  { name: "Africa", slug: "africa", count: 0 },
  { name: "Oceania", slug: "oceania", count: 0 }
];

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredListings = sampleListings.filter(listing =>
    listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* Search */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search by service name, region, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      {/* Browse by Continent */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Browse by Continent
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {continents.map((continent) => (
            <Link key={continent.slug} to={`/directory/${continent.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{continent.name}</h3>
                  <p className="text-sm text-gray-600">
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
          All RTK Service Providers ({filteredListings.length})
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
