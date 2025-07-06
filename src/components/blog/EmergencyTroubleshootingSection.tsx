
const EmergencyTroubleshootingSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Emergency Troubleshooting</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-yellow-800 mb-4">When Things Go Wrong in the Field:</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">1</span>
            <span className="text-yellow-800">Stop work immediately if RTK fix is lost - don't continue with degraded accuracy</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">2</span>
            <span className="text-yellow-800">Check communication links and satellite visibility indicators</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">3</span>
            <span className="text-yellow-800">Re-initialize the system and verify accuracy with known control points</span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">4</span>
            <span className="text-yellow-800">Contact technical support if problems persist - don't guess at solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyTroubleshootingSection;
