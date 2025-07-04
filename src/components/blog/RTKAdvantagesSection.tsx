
import { Card, CardContent } from "@/components/ui/card";

const RTKAdvantagesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why RTK Matters for Drone Mapping</h2>
      <p className="text-gray-700 mb-4">
        Traditional drone mapping relies on ground control points (GCPs) for accuracy, requiring significant field time and 
        limiting operational efficiency. RTK-enabled drones eliminate or drastically reduce GCP requirements while maintaining 
        survey-grade accuracy.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-green-800 mb-3">RTK Advantages</h3>
            <ul className="text-green-700 space-y-2">
              <li>• Achieve 2-5 cm absolute accuracy</li>
              <li>• Reduce or eliminate GCPs</li>
              <li>• Faster field operations</li>
              <li>• Consistent accuracy across large areas</li>
              <li>• Real-time quality assurance</li>
              <li>• Reduced post-processing time</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-800 mb-3">Application Benefits</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Corridor mapping without GCPs</li>
              <li>• Rapid emergency response surveys</li>
              <li>• Precision agriculture monitoring</li>
              <li>• Construction progress tracking</li>
              <li>• Environmental monitoring</li>
              <li>• Infrastructure inspection</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RTKAdvantagesSection;
