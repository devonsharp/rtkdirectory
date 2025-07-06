
import { Card, CardContent } from "@/components/ui/card";

const FutureApplicationsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Revolutionary Applications on the Horizon</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Autonomous Vehicles</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Next-generation RTK systems will enable lane-level positioning for autonomous vehicles, 
              requiring sub-decimeter accuracy and high reliability.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Lane-level positioning</li>
                <li>• Integrity monitoring</li>
                <li>• Urban canyon performance</li>
                <li>• Seamless indoor/outdoor</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">IoT and Sensor Networks</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Miniaturized RTK receivers will enable precise positioning for IoT devices, 
              environmental sensors, and smart city infrastructure.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Ultra-low power consumption</li>
                <li>• Miniaturized form factors</li>
                <li>• Integrated sensor fusion</li>
                <li>• Edge computing capabilities</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Augmented Reality</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              AR applications will leverage precise positioning to overlay digital information 
              accurately on the real world for construction, maintenance, and visualization.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Capabilities:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Millimeter-level registration</li>
                <li>• Real-time tracking</li>
                <li>• Multi-user collaboration</li>
                <li>• Indoor/outdoor continuity</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision Agriculture 4.0</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Advanced RTK systems will enable fully autonomous farming operations with 
              centimeter-level precision for optimal crop management.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Applications:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Autonomous machinery</li>
                <li>• Precision seeding/spraying</li>
                <li>• Yield optimization</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FutureApplicationsSection;
