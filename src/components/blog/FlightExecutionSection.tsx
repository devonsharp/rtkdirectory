
const FlightExecutionSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Flight Execution Guidelines</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Critical Flight Considerations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Before Takeoff:</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Verify RTK fixed solution</li>
              <li>• Allow 2-3 minutes for initialization</li>
              <li>• Check satellite visibility and DOP values</li>
              <li>• Confirm correction age &lt; 10 seconds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">During Flight:</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Monitor RTK status continuously</li>
              <li>• Abort if RTK fix is lost</li>
              <li>• Maintain consistent flight speed</li>
              <li>• Avoid rapid altitude changes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimal Flight Parameters</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Altitude</h4>
            <p className="text-gray-700">Maintain consistent AGL height, typically 80-120m for mapping missions</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Speed</h4>
            <p className="text-gray-700">Fly at 8-12 m/s for optimal image quality and overlap</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Overlap</h4>
            <p className="text-gray-700">Maintain 80% forward, 60% side overlap minimum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightExecutionSection;
