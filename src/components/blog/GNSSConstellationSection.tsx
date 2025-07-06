
import { Satellite } from "lucide-react";

const GNSSConstellationSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Current State of GNSS Technology</h2>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Today's GNSS ecosystem includes multiple fully operational constellations providing global coverage:
      </p>
      
      <div className="mb-8 space-y-4">
        <div className="border-l-4 border-gray-300 pl-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
            <Satellite className="h-5 w-5 text-gray-600 mr-2" />
            GPS (USA)
          </h3>
          <p className="text-gray-700">31 satellites providing global coverage with ongoing modernization efforts introducing new signals and enhanced capabilities.</p>
        </div>
        
        <div className="border-l-4 border-gray-300 pl-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
            <Satellite className="h-5 w-5 text-gray-600 mr-2" />
            GLONASS (Russia)
          </h3>
          <p className="text-gray-700">24 satellites offering global positioning services with CDMA modernization currently in progress to improve accuracy and reliability.</p>
        </div>
        
        <div className="border-l-4 border-gray-300 pl-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
            <Satellite className="h-5 w-5 text-gray-600 mr-2" />
            Galileo (EU)
          </h3>
          <p className="text-gray-700">30 satellites delivering high-accuracy services across Europe and beyond, with commercial and safety-critical applications already operational.</p>
        </div>
        
        <div className="border-l-4 border-gray-300 pl-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
            <Satellite className="h-5 w-5 text-gray-600 mr-2" />
            BeiDou (China)
          </h3>
          <p className="text-gray-700">35 satellites providing global coverage since 2020, offering both civilian and military positioning services with regional enhancements in Asia-Pacific.</p>
        </div>
      </div>
    </section>
  );
};

export default GNSSConstellationSection;
