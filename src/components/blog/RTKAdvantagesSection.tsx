
const RTKAdvantagesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why RTK Matters for Drone Mapping</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Traditional drone mapping relies on ground control points (GCPs) for accuracy, requiring significant field time and 
        limiting operational efficiency. RTK-enabled drones eliminate or drastically reduce GCP requirements while maintaining 
        survey-grade accuracy.
      </p>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">RTK Advantages</h3>
        <ul className="text-gray-700 space-y-2 mb-6">
          <li>• Achieve 2-5 cm absolute accuracy</li>
          <li>• Reduce or eliminate GCPs</li>
          <li>• Faster field operations</li>
          <li>• Consistent accuracy across large areas</li>
          <li>• Real-time quality assurance</li>
          <li>• Reduced post-processing time</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Applications</h3>
        <ul className="text-gray-700 space-y-2">
          <li>• Corridor mapping without GCPs</li>
          <li>• Rapid emergency response surveys</li>
          <li>• Precision agriculture monitoring</li>
          <li>• Construction progress tracking</li>
          <li>• Environmental monitoring</li>
          <li>• Infrastructure inspection</li>
        </ul>
      </div>
    </section>
  );
};

export default RTKAdvantagesSection;
