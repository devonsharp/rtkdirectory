
import { Card, CardContent } from "@/components/ui/card";

const SelectionCriteriaSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Selection Criteria</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Coverage and Network Density</h3>
        <p className="text-gray-700 mb-4">
          The foundation of reliable RTK service is comprehensive coverage. Evaluate providers based on:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Reference station density in your operational area</li>
          <li>Maximum baseline distances between stations</li>
          <li>Coverage reliability in challenging terrain</li>
          <li>Plans for network expansion</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Accuracy and Performance</h3>
        <p className="text-gray-700 mb-4">
          Different applications require different levels of precision. Consider:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Horizontal and vertical accuracy specifications</li>
          <li>Convergence time requirements</li>
          <li>Performance in various atmospheric conditions</li>
          <li>Multi-constellation GNSS support</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Communication Options</h3>
        <p className="text-gray-700 mb-4">
          Modern RTK services offer multiple communication methods:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-800 mb-2">Cellular/Internet</h4>
              <p className="text-green-700 text-sm">High reliability, wide coverage, easy setup</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Radio</h4>
              <p className="text-blue-700 text-sm">No ongoing costs, works in remote areas</p>
            </CardContent>
          </Card>
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Satellite</h4>
              <p className="text-purple-700 text-sm">Global coverage, premium pricing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SelectionCriteriaSection;
