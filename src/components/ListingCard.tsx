
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Globe } from "lucide-react";

interface Listing {
  id: number;
  name: string;
  company: string;
  region: string;
  email: string;
  website: string;
  description: string;
}

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{listing.name}</CardTitle>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{listing.region}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {listing.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={`mailto:${listing.email}`}
              className="text-blue-600 hover:text-blue-800 text-sm"
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
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button 
            size="sm" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(`mailto:${listing.email}`, '_blank')}
          >
            Contact Provider
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
