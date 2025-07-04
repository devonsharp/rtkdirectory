
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl text-gray-900 leading-tight">
            {listing.name}
          </CardTitle>
          <Badge 
            variant="secondary"
            className="bg-gray-100 text-gray-800"
          >
            {listing.pricing === "free" ? "Free" : "Paid"}
          </Badge>
        </div>
        
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{listing.region} • {listing.country}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-start mb-2">
            <Info className="h-4 w-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-500 leading-relaxed">
              {listing.providerInfo}
            </p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {listing.description}
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={`mailto:${listing.email}`}
              className="text-blue-600 hover:text-blue-800 text-sm truncate"
            >
              {listing.email}
            </a>
          </div>
          
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={listing.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Visit Website
            </a>
          </div>
          
          <div className="flex items-center">
            <Map className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={listing.coverageMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              View Coverage Map
            </a>
          </div>
          
          {listing.freeTrialLink && (
            <div className="flex items-center">
              <Gift className="h-4 w-4 mr-2 text-gray-400" />
              <a 
                href={listing.freeTrialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 text-sm font-medium"
              >
                Start Free Trial
              </a>
            </div>
          )}
        </div>
        
        <div className="pt-4 border-t border-gray-100 space-y-2">
          <Button 
            size="sm" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(`mailto:${listing.email}`, '_blank')}
          >
            Contact Provider
          </Button>
          
          {listing.freeTrialLink && (
            <Button 
              size="sm" 
              variant="outline"
              className="w-full text-green-600 border-green-600 hover:bg-green-50"
              onClick={() => window.open(listing.freeTrialLink!, '_blank')}
            >
              Try Free
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
