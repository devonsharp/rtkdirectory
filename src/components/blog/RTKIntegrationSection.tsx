
import { Card, CardContent } from "@/components/ui/card";
import { Settings, MapPin } from "lucide-react";

const RTKIntegrationSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">RTK Integration Methods</h2>
      
      <div className="space-y-6">
        <Card className="border-l-4 border-l-gray-400">
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <Settings className="h-6 w-6 text-gray-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Onboard RTK Receivers</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Many modern mapping drones include integrated RTK receivers that connect directly to correction services 
              via cellular or radio links.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Advantages:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Seamless integration</li>
                  <li>• Real-time corrections</li>
                  <li>• Simplified workflow</li>
                  <li>• Factory calibration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Considerations:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Higher initial cost</li>
                  <li>• Communication requirements</li>
                  <li>• Limited to specific platforms</li>
                  <li>• Subscription costs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-gray-400">
          <CardContent className="p-6">
            <div className="flex items-center mb-3">
              <MapPin className="h-6 w-6 text-gray-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">PPK Processing Workflow</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Post-Processed Kinematic (PPK) approach records raw GNSS data during flight and applies corrections 
              during post-processing, ideal for areas without real-time communication.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Advantages:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Works in remote areas</li>
                  <li>• No communication needed</li>
                  <li>• Flexible processing options</li>
                  <li>• Lower operational costs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Considerations:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Post-processing required</li>
                  <li>• Delayed quality feedback</li>
                  <li>• More complex workflow</li>
                  <li>• Processing expertise needed</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RTKIntegrationSection;
