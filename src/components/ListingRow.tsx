
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Globe, Map, Gift, Info } from "lucide-react";

interface Listing {
  id: number;
  name: string;
  company: string;
  region: string;
  country: string;
  email: string;
  website: string;
  description: string;
  pricing: "free" | "paid";
  priceDetails: string;
  coverageMapLink: string;
  freeTrialLink: string | null;
  providerInfo: string;
}

interface ListingRowProps {
  listing: Listing;
}

const ListingRow = ({ listing }: ListingRowProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{listing.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{listing.region} • {listing.country}</span>
              </div>
            </div>
            <Badge 
              variant={listing.pricing === "free" ? "secondary" : "default"}
              className={listing.pricing === "free" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
            >
              {listing.pricing === "free" ? "Free" : "Paid"}
            </Badge>
          </div>
          
          <div className="mb-3">
            <div className="flex items-start mb-1">
              <Info className="h-3 w-3 mr-1 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-500">
                {listing.providerInfo}
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {listing.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a 
              href={`mailto:${listing.email}`}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Mail className="h-3 w-3 mr-1" />
              Contact
            </a>
            <a 
              href={listing.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Globe className="h-3 w-3 mr-1" />
              Website
            </a>
            <a 
              href={listing.coverageMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Map className="h-3 w-3 mr-1" />
              Coverage Map
            </a>
            {listing.freeTrialLink && (
              <a 
                href={listing.freeTrialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-800 font-medium"
              >
                <Gift className="h-3 w-3 mr-1" />
                Free Trial
              </a>
            )}
          </div>
        </div>
        
        <div className="flex flex-row lg:flex-col gap-2 lg:w-32">
          <Button 
            size="sm" 
            className="flex-1 lg:w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(`mailto:${listing.email}`, '_blank')}
          >
            Contact
          </Button>
          
          {listing.freeTrialLink && (
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1 lg:w-full text-green-600 border-green-600 hover:bg-green-50"
              onClick={() => window.open(listing.freeTrialLink!, '_blank')}
            >
              Try Free
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingRow;
