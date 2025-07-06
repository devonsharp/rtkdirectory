
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const FieldProcedureSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Field Procedure Mistakes</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setup Errors</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Critical setup mistakes include incorrect antenna height measurement, not leveling the antenna properly, 
          measuring to the wrong reference point, and using inconsistent setup procedures between measurements.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Control Oversights</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Skipping redundant measurements, not checking against known control points, ignoring quality indicators, 
          and insufficient documentation can compromise the reliability of survey results.
        </p>
      </div>

      <Card className="bg-blue-50 border-blue-200 mb-8">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-4">Essential Quality Assurance Checklist:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Measure antenna height twice for verification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Check setup against known control points</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Document all setup parameters thoroughly</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Verify RTK fix quality before measurements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Take redundant measurements for validation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Monitor environmental conditions continuously</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FieldProcedureSection;
