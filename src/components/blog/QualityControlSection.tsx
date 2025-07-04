
import { Card, CardContent } from "@/components/ui/card";

const QualityControlSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Control and Validation</h2>
      
      <div className="space-y-6">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">In-Flight Monitoring</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">RTK Status Indicators</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Fixed solution: Green status</li>
                  <li>• Float solution: Yellow warning</li>
                  <li>• Single point: Red alert</li>
                  <li>• Correction age: &lt; 10 seconds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Flight Metrics</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Consistent ground speed</li>
                  <li>• Stable altitude profile</li>
                  <li>• Adequate image overlap</li>
                  <li>• Proper exposure settings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Flight Validation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Data Quality Checks</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Verify image count and coverage</li>
                  <li>• Check GPS log continuity</li>
                  <li>• Validate overlap percentages</li>
                  <li>• Review exposure consistency</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Accuracy Verification</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Compare to check points</li>
                  <li>• Verify coordinate system</li>
                  <li>• Check altitude consistency</li>
                  <li>• Validate with known features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QualityControlSection;
