
import { Card, CardContent } from "@/components/ui/card";

const TroubleshootingSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting Common Issues</h2>
      
      <div className="space-y-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <h3 className="font-semibold text-red-800 mb-2">RTK Fix Loss During Flight</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-red-700 mb-1">Causes:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Communication interruption</li>
                  <li>• Satellite visibility obstruction</li>
                  <li>• High DOP values</li>
                  <li>• Atmospheric disturbances</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-700 mb-1">Solutions:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Return to home and re-initialize</li>
                  <li>• Switch to backup correction source</li>
                  <li>• Increase flight altitude</li>
                  <li>• Abort mission if persistent</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <h3 className="font-semibold text-orange-800 mb-2">Coordinate System Errors</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-orange-700 mb-1">Symptoms:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Large positional offsets</li>
                  <li>• Inconsistent check point residuals</li>
                  <li>• Scale discrepancies</li>
                  <li>• Projection distortions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-orange-700 mb-1">Solutions:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Verify datum and projection settings</li>
                  <li>• Check with survey control points</li>
                  <li>• Validate coordinate transformations</li>
                  <li>• Use local coordinate systems</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TroubleshootingSection;
