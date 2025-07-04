
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Globe, Map, Gift, Star } from "lucide-react";

const FeaturedServiceCard = () => {
  const featuredService = {
    name: "GlobalRTK Pro",
    company: "Global Positioning Solutions",
    region: "Global",
    country: "Multiple",
    email: "contact@globalrtkpro.com",
    website: "https://globalrtkpro.com",
    description: "Worldwide RTK correction service with satellite and ground-based reference stations providing global coverage with 99.9% uptime guarantee.",
    pricing: "paid" as const,
    priceDetails: "$49.99/month",
    coverageMapLink: "https://globalrtkpro.com/global-coverage",
    freeTrialLink: "https://globalrtkpro.com/free-trial",
    providerInfo: "Global network with 500+ reference stations worldwide"
  };

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-blue-700">Featured Provider</span>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {featuredService.pricing === "free" ? "Free" : "Paid"}
          </Badge>
        </div>
        
        <CardTitle className="text-2xl text-gray-900 leading-tight">
          {featuredService.name}
        </CardTitle>
        
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{featuredService.region} • {featuredService.country}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-gray-600 leading-relaxed">
            {featuredService.description}
          </p>
          <p className="text-sm text-blue-600 font-medium mt-2">
            {featuredService.providerInfo}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={`mailto:${featuredService.email}`}
              className="text-blue-600 hover:text-blue-800 text-sm truncate"
            >
              {featuredService.email}
            </a>
          </div>
          
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={featuredService.website}
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
              href={featuredService.coverageMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              View Coverage Map
            </a>
          </div>
          
          <div className="flex items-center">
            <Gift className="h-4 w-4 mr-2 text-gray-400" />
            <a 
              href={featuredService.freeTrialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 text-sm font-medium"
            >
              Start Free Trial
            </a>
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(`mailto:${featuredService.email}`, '_blank')}
          >
            Contact Provider
          </Button>
          
          <Button 
            variant="outline"
            className="flex-1 text-green-600 border-green-600 hover:bg-green-50"
            onClick={() => window.open(featuredService.freeTrialLink, '_blank')}
          >
            Try Free
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedServiceCard;
