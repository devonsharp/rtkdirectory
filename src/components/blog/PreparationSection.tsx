
const PreparationSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Preparing for the Future</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Organizations should prepare for the evolving GNSS landscape by taking strategic steps:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Investment</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Multi-constellation, multi-frequency receivers</li>
              <li>• Advanced processing techniques</li>
              <li>• Infrastructure upgrades and modernization</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Planning</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Explore new applications and markets</li>
              <li>• Build technology partnerships</li>
              <li>• Stay informed about emerging standards</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mt-6 text-lg leading-relaxed">
        The future of GNSS and RTK technology promises unprecedented accuracy, reliability, and new applications 
        that will transform how we navigate, map, and interact with our world.
      </p>
    </section>
  );
};

export default PreparationSection;
