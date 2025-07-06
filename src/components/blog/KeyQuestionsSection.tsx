
const KeyQuestionsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Questions to Ask Providers</h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-l-blue-500 pl-4">
          <h3 className="font-semibold text-gray-900 mb-2">Service Reliability</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• What is your guaranteed uptime percentage?</li>
            <li>• How do you handle service interruptions?</li>
            <li>• What redundancy measures are in place?</li>
          </ul>
        </div>

        <div className="border-l-4 border-l-green-500 pl-4">
          <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• What support hours do you offer?</li>
            <li>• How quickly do you respond to technical issues?</li>
            <li>• Do you provide on-site support if needed?</li>
          </ul>
        </div>

        <div className="border-l-4 border-l-orange-500 pl-4">
          <h3 className="font-semibold text-gray-900 mb-2">Pricing and Contracts</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• What are your subscription options and pricing tiers?</li>
            <li>• Are there setup fees or equipment costs?</li>
            <li>• What are the contract terms and cancellation policies?</li>
          </ul>
        </div>

        <div className="border-l-4 border-l-purple-500 pl-4">
          <h3 className="font-semibold text-gray-900 mb-2">Future-Proofing</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• How do you handle technology upgrades?</li>
            <li>• What new features are in development?</li>
            <li>• How do you adapt to changing GNSS constellations?</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyQuestionsSection;
