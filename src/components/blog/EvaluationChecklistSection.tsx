
import { CheckCircle } from "lucide-react";

const EvaluationChecklistSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Checklist</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-4">Before Making Your Decision:</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Request a trial period or demo to test service quality</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Verify coverage in all your operational areas</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Check references from similar projects or industries</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Compare total cost of ownership, not just subscription fees</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Ensure compatibility with your existing equipment</span>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Understand the service level agreement (SLA) terms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationChecklistSection;
