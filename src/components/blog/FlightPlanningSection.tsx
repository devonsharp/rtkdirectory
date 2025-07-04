
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Settings } from "lucide-react";

const FlightPlanningSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Flight Planning Best Practices</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <Camera className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Mission Planning</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Verify RTK coverage in survey area</li>
              <li>• Plan for adequate overlap (80% forward, 60% side)</li>
              <li>• Consider sun angle and lighting conditions</li>
              <li>• Plan emergency landing zones</li>
              <li>• Check weather conditions and wind speed</li>
              <li>• Ensure sufficient battery life</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <Settings className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-900">System Preparation</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Test RTK connection before flight</li>
              <li>• Verify coordinate system settings</li>
              <li>• Calibrate compass and IMU</li>
              <li>• Check camera settings and memory cards</li>
              <li>• Prepare backup communication methods</li>
              <li>• Document all configuration settings</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FlightPlanningSection;
