
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Cpu, Wifi, Battery, Shield } from "lucide-react";

interface FeaturedHardwareCardProps {
  isSecondCard?: boolean;
}

const FeaturedHardwareCard = ({ isSecondCard = false }: FeaturedHardwareCardProps) => {
  const featuredHardware = [
    {
      manufacturer: "Emlid",
      model: "Reach RS3 RTK Receiver",
      country: "Russia",
      website: "https://www.emlid.com",
      description: "Professional-grade RTK receiver with built-in LoRa radio, long battery life, and centimeter-level accuracy. Perfect for surveying, mapping, and precision agriculture applications.",
      features: [
        "Centimeter-level accuracy",
        "Built-in LoRa radio",
        "22-hour battery life",
        "IP67 waterproof rating"
      ],
      price: "$2,200"
    },
    {
      manufacturer: "Trimble",
      model: "R12i GNSS Receiver",
      country: "United States",
      website: "https://www.trimble.com",
      description: "Advanced multi-constellation GNSS receiver with integrated IMU technology for reliable positioning in challenging environments. Ideal for construction and surveying professionals.",
      features: [
        "Multi-constellation tracking",
        "Integrated IMU technology",
        "All-day battery life",
        "Rugged IP68 design"
      ],
      price: "$8,500"
    }
  ];

  const hardware = featuredHardware[isSecondCard ? 1 : 0];

  return (
    <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-green-700">Featured Hardware</span>
        </div>
        
        <CardTitle className="text-2xl text-gray-900 leading-tight">
          {hardware.model}
        </CardTitle>
        
        <div className="text-sm text-gray-600">
          <span className="font-medium">{hardware.manufacturer}</span> • {hardware.country}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          {hardware.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {hardware.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              {index === 0 && <Cpu className="h-4 w-4 mr-2 text-green-600" />}
              {index === 1 && <Wifi className="h-4 w-4 mr-2 text-green-600" />}
              {index === 2 && <Battery className="h-4 w-4 mr-2 text-green-600" />}
              {index === 3 && <Shield className="h-4 w-4 mr-2 text-green-600" />}
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-gray-900">{hardware.price}</span>
            <span className="text-sm text-gray-500 ml-1">starting price</span>
          </div>
          
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open(hardware.website, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedHardwareCard;
