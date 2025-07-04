
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ListingCard from "@/components/ListingCard";
import { ArrowLeft } from "lucide-react";

// Sample data - would come from database in real app
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

const continentNames: { [key: string]: string } = {
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
  
  const filteredListings = sampleListings.filter(
    listing => listing.continent === continent
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to="/directory"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Directory
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          RTK Services in {continentName}
        </h1>
        <p className="text-xl text-gray-600">
          Browse RTK correction service providers in {continentName}.
        </p>
      </div>

      {filteredListings.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
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
